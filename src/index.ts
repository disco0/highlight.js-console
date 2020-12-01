//#region Imports

// import fs from './fs-wrap'
import * as afs from 'fs/promises';
import * as fs from 'fs'
import _debug from 'debug';
const debug = _debug('hljsc');

import * as path from 'path';

// Not sure if this is necessary? Require not sued 
require('highlight.js')
import h2j from 'html2json';
import css2json from 'css2json';
import type { CssJSONObject } from 'css2json'
import chalk from 'chalk'

import is from './guards';
import type {
    FlattenedNode,
    ReplaceStates,
} from './html2json-additions'

//#endregion Imports

const defaults =
{
    styleDirectory: path.join(__dirname, 'node_modules', 'highlight.js', 'styles'),
    style:          'default'
}

const rssDebug = debug.extend('readStylesheet')
async function readStylesheet(cssFilePath: string): Promise<CssJSONObject>
{
    // var styleRaw = await fs.readFileAsync(path.join(__dirname, 'node_modules', 'highlight.js', 'styles', name + '.css'));
    
    let styleRaw: string;

    try
    {
        rssDebug('Loading file %s', cssFilePath);
        
        styleRaw = await afs.readFile(cssFilePath, 'ascii');

        rssDebug('Successfully read style file, %i chars', styleRaw.length)
    }
    catch(err)
    {
        console.error(chalk.red`Failed to find style file at path: ${chalk.underline(cssFilePath)}`)
    }

    // Return empty object if file was not found or read failed
    // return styleRaw ? css2json(styleRaw) : {};
    if(!styleRaw)
    {
        rssDebug('Failed to load source file, returning empty object.')   

        return {}
    }
    else
    {
        // rssDebug('Content of stylesheet file:\n%s', styleRaw);
        const cssJson = css2json(styleRaw);
        rssDebug('Created css JSON:\n%o', cssJson);   

        return cssJson
    }
};

const sDebug = debug.extend('stylize');
function stylize(name: string, text: string, styleData: CssJSONObject)
{
    var currentStyle = styleData['.' + name];
    if(currentStyle !== null)
    {
        // Handle foreground color
        if(is.hexColor(currentStyle.color))
        {
            if(currentStyle.color.startsWith('#'))
            {
                if(currentStyle.color.length === 4)
                {
                    var expandColor = '#';
                    var char = currentStyle.color.substring(1, 2);
                    expandColor = expandColor + char + char;
                    char = currentStyle.color.substring(2, 3);
                    expandColor = expandColor + char + char;
                    char = currentStyle.color.substring(3, 4);
                    expandColor = expandColor + char + char;
                    text = chalk.hex(expandColor)(text);
                } 
                else
                {
                    text = chalk.hex(currentStyle.color)(text);
                }
            } 
            else
            {
                text = chalk.keyword(currentStyle.color)(text);
            }
        }

        // Handle background color
        var backColorString = undefined;

        if(currentStyle['background-color'] !== undefined)
            backColorString = currentStyle['background-color'];

        else if(currentStyle.background !== undefined)
            backColorString = currentStyle.background;

        if(is.hexColor(backColorString))
        {
            // Rebind original branded object casted back to string
            let color = backColorString as string;

            if(color.startsWith('#'))
            {
                if(color.length === 4)
                {
                    let expandColor = '#';
                    let char = color.substring(1, 2);
                    expandColor = expandColor + char + char;
                    char = color.substring(2, 3);
                    expandColor = expandColor + char + char;
                    char = color.substring(3, 4);
                    expandColor = expandColor + char + char;
                    text = chalk.bgHex(expandColor)(text);
                } 
                else
                    text = chalk.bgHex(color)(text);
            } 
            else
                text = chalk.bgKeyword(color)(text);
        }

        // Handle bold/italics/underline
        if(currentStyle["text-decoration"] !== undefined &&
            currentStyle["text-decoration"].toLowerCase() === "underline")
        {
            text = chalk.underline(text);
        }

        if(currentStyle["font-weight"] !== undefined &&
            currentStyle["font-weight"].toLowerCase() === "bold")
        {
            text = chalk.bold(text);
        }

        if(currentStyle["font-style"] !== undefined &&
            currentStyle["font-style"].toLowerCase() === "italics")
        {
            text = chalk.italic(text);
        }
    }
    return text;
};

function deentitize(str: string)
{
    str = str.replace(/&gt;/g, '>');
    str = str.replace(/&lt;/g, '<');
    str = str.replace(/&quot;/g, '"');
    str = str.replace(/&apos;/g, "'");
    str = str.replace(/&amp;/g, '&');
    return str;
};

const rsDebug = debug.extend('replaceSpan')
function replaceSpan(obj: ReplaceStates, styleData: CssJSONObject)
{
    rsDebug('Replacing span:\n%o', obj)
    if(obj.node === "text")
    {
        rsDebug(' -> Text Node: Return text content')
        return obj.text;
    }

    // Cast as modified form
    const flat = obj as FlattenedNode

    // If there are child objects, convert on each child first
    if(flat.child)
    {
        for(var i = 0; i < obj.child.length; i++)
            flat.child[i] = replaceSpan(obj.child[i], styleData);
    }

    if(is.elementNode(flat))
        return stylize(
            Array.isArray(flat.attr.class) 
                ? flat.attr.class.join('.')
                : flat.attr.class, 
            obj.child.join(''), 
            styleData);
    else if(flat.node === "root")
        return flat.child.join('');
    else
        console.error("Found a node type of " + obj.node + " that I can't handle!");
};

function getStyleFile(styleName: string): string
{ 
    return `${styleName}.css`;
}

function findLocalStyleSheet(styleName: string)
{
    // If styleName is actually fileName that exists return early
    if(fs.existsSync(styleName)) return styleName

    const styleFile = getStyleFile(styleName);
    
    // If expected style file is actually in current directory return
    if(fs.existsSync(styleFile)) return styleFile
}


/**
 * Returns a validated style file path
 */
const rdebug = debug.extend('resolveStyleFile')
function resolveStyleFile(styleName: string = defaults.style, directory?: string): string
{
    rdebug("Beginning resolve with styleName: %s", styleName);
    let file = findLocalStyleSheet(styleName);
    if(file) 
    {
        rdebug('Found style file matching parameter: %s', file);
        return file;
    }

    file = getStyleFile(styleName);

    rdebug('Trying with file name: %s', file);

    if(!directory)
    {
        directory = defaults.styleDirectory;
        rdebug('Using default directory: %s', directory)
    }

    let resolved = path.normalize(path.resolve(directory, file));
    rdebug('Resolved path: %s', resolved);

    if(fs.existsSync(resolved)) 
    {
        rdebug('Resolved path: %s', resolved)
        return resolved;
    }

    rdebug('Failed to resolve a path.')
}

const chDebug = debug.extend('convertHLJS')
async function convertHLJS(hljsHTML: AutoHighlightJsResult, styleName?: string, directory?: string): Promise<string>
async function convertHLJS(hljsHTML: string, styleName?: string, directory?: string): Promise<string>
async function convertHLJS(hljsHTML: AutoHighlightJsResult| string, styleName: string = 'default', directory?: string): Promise<string>
{
    const file = resolveStyleFile(styleName);
    if(!file)
        throw new Error('Failed to locate css style file');

    const styleData = await readStylesheet(styleName);


    const input = typeof hljsHTML === 'string' ? hljsHTML : hljsHTML.value

    chDebug('html2json <<<\\\n%o', input)
    const json      = h2j.html2json(input);
    
    let text = replaceSpan(json, styleData);
    text     = stylize('hljs', text, styleData);
    text     = deentitize(text);
 
    return text;
}

import type { highlightAuto } from 'highlight.js/lib/core'
type AutoHighlightJsResult = ReturnType<typeof highlightAuto>;

const entryDebug = debug.extend('entry')
export default function convert(hljsHTML: AutoHighlightJsResult, styleName?: string, directory?: string): Promise<string>
{
    entryDebug('Processing hljs output:\n%o', hljsHTML)
    return convertHLJS(hljsHTML, styleName || defaults.style, directory);
};

module.exports = convert;