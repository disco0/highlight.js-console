//#region Import

import type { 
    OverwriteProps
} from 'tsdef'

// Namespace
import type {
    Nodes,
} from 'html2json';

// Types
import type { 
    // Types
    AnyHTMLNode,
    AnyNode,
    ChildHTMLNode as ChildNode,
    ParentNode,
    RootNode,

    // Interface
    Node,
} from 'html2json'

//#endregion Import

export type ReplaceStates =
    | Nodes.Text
    | Nodes.Element
    | Nodes.Root

export type FlattenedNode =
    Node
    & { 
        type: 'element' | 'root'; 
        child: OverwriteProps<Nodes.Text | Nodes.Element, ChildNode[] | string[]> 
    }