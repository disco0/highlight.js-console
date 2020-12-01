declare module "html2json"
{
    type Not<T> = Exclude<any, T>;
    type ItemOrItems<T extends Not<never | void>> = T | T[];

    namespace HTML2JSON
    {
        export type ChildHTMLNode =
            | Nodes.Element
            | Nodes.Text
        
        export type AnyHTMLNode =
            | Nodes.Root
            | Nodes.Element
            | Nodes.Text
        
        //#region Base Node

        export interface Node
        {
            node:   Nodes.Type
        }
        
        //#endregion Base Node

        namespace Nodes
        {
            //#region Node Type Keys

            enum HTMLNodeTypes
            {
                'root',
                'element',
                'text'
            }
            export type Type = keyof typeof HTMLNodeTypes;

            //#endregion Node Type Keys
            
            //#region Node Types
            
            export type Root = Node &
            {
                node:  'root';
                child: ChildHTMLNode[];
            }
            
            export type Element = Node &
            {
                node:   'element';
                child:  ChildHTMLNode[];
                tag:    keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap

                attr: ElementAttribute;
            }
            
            export type Text = Node &
            {
                node: 'text';

                text:  string;
            }

            //#endregion Node Types
            
            //#region Subtype Properties
            
            interface ElementAttribute
            {
                class?: ItemOrItems<string>
            }

            //#endregion Subtype Properties
        }

        export type RootNode = Nodes.Root;
        export type ParentNode = Nodes.Root | Nodes.Element;
        export type AnyNode = AnyHTMLNode;  

        export function html2json(input: string): Nodes.Root;
    }
    
    export = HTML2JSON
}