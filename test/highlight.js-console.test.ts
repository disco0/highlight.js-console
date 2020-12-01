import * as fs from 'fs'
import * as path from 'path'

import hljs from 'highlight.js';
import c from 'chalk';

// import hljsc from '../src/index'
const hljsc = require('../index')
console.dir(hljsc)

const basePath = path.resolve('./')

const source = fs.readFileSync(path.resolve(basePath, 'test/highlight.js-console.test.ts')).toString();

const cssStyleFile = 'github-gist'
// const cssStyleFile = path.resolve('./node_modules/highlight.js/styles/github-gist.css')

console.log(`Transforming highlight.js formatted file ${c.underline.ansi256(32)(__filename)}`);

const hljsSource = hljs.highlightAuto(source, ['typescript']);

(async () => {

    console.log(await hljsc.convert(hljsSource, cssStyleFile))
})()
