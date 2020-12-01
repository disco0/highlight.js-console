//#region Import

// Namespace
import type { Nodes } from 'html2json';

// Types
import type { AnyNode } from 'html2json'

//#endregion Import

//#region Guards

function isHtmlNode(obj: unknown): obj is AnyNode
{
    return (typeof obj === 'object' && 'type' in obj)
}

function isElementNode(obj: unknown): obj is Nodes.Element
{
    return (typeof obj === 'object' && 'element' in obj)
}

function isTextNode(obj: unknown): obj is Nodes.Text
{
    return (typeof obj === 'object' && 'text' in obj)
}

function isRootNode(obj: unknown): obj is Nodes.Root
{
    return (typeof obj === 'object' && 'root' in obj)
}

//#endregion Guards

export
{
    isHtmlNode    as htmlNode,
    isTextNode    as textNode,
    isRootNode    as rootNode,
    isElementNode as elementNode
}

export default 
{
    htmlNode:    isHtmlNode,
    textNode:    isTextNode,
    rootNode:    isRootNode,
    elementNode: isElementNode
}