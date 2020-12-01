declare module 'css2json'
{
    namespace css2json
    {
        export interface CssJSONObject
        {
            [selector: string]: CssJSONStyle
        }

        /**
         * Modified form of css declarations in lib
         * 
         * @TODO Generate this dynamically from the original interface
         */
        export interface CssJSONStyle
        {
            'align-content'?: string;
            'align-items'?: string;
            'align-self'?: string;
            'alignment-baseline'?: string;
            'all'?: string;
            'animation'?: string;
            'animation-delay'?: string;
            'animation-direction'?: string;
            'animation-duration'?: string;
            'animation-fill-mode'?: string;
            'animation-iteration-count'?: string;
            'animation-name'?: string;
            'animation-play-state'?: string;
            'animation-timing-function'?: string;
            'backface-visibility'?: string;
            'background'?: string;
            'background-attachment'?: string;
            'background-clip'?: string;
            'background-color'?: string;
            'background-image'?: string;
            'background-origin'?: string;
            'background-position'?: string;
            'background-position-x'?: string;
            'background-position-y'?: string;
            'background-repeat'?: string;
            'background-size'?: string;
            'baseline-shift'?: string;
            'block-size'?: string;
            'border'?: string;
            'border-block-end'?: string;
            'border-block-end-color'?: string;
            'border-block-end-style'?: string;
            'border-block-end-width'?: string;
            'border-block-start'?: string;
            'border-block-start-color'?: string;
            'border-block-start-style'?: string;
            'border-block-start-width'?: string;
            'border-bottom'?: string;
            'border-bottom-color'?: string;
            'border-bottom-left-radius'?: string;
            'border-bottom-right-radius'?: string;
            'border-bottom-style'?: string;
            'border-bottom-width'?: string;
            'border-collapse'?: string;
            'border-color'?: string;
            'border-image'?: string;
            'border-image-outset'?: string;
            'border-image-repeat'?: string;
            'border-image-slice'?: string;
            'border-image-source'?: string;
            'border-image-width'?: string;
            'border-inline-end'?: string;
            'border-inline-end-color'?: string;
            'border-inline-end-style'?: string;
            'border-inline-end-width'?: string;
            'border-inline-start'?: string;
            'border-inline-start-color'?: string;
            'border-inline-start-style'?: string;
            'border-inline-start-width'?: string;
            'border-left'?: string;
            'border-left-color'?: string;
            'border-left-style'?: string;
            'border-left-width'?: string;
            'border-radius'?: string;
            'border-right'?: string;
            'border-right-color'?: string;
            'border-right-style'?: string;
            'border-right-width'?: string;
            'border-spacing'?: string;
            'border-style'?: string;
            'border-top'?: string;
            'border-top-color'?: string;
            'border-top-left-radius'?: string;
            'border-top-right-radius'?: string;
            'border-top-style'?: string;
            'border-top-width'?: string;
            'border-width'?: string;
            'bottom'?: string;
            'box-shadow'?: string;
            'box-sizing'?: string;
            'break-after'?: string;
            'break-before'?: string;
            'break-inside'?: string;
            'caption-side'?: string;
            'caret-color'?: string;
            'clear'?: string;
            'clip'?: string;
            'clip-path'?: string;
            'clip-rule'?: string;
            'color'?: string;
            'color-interpolation'?: string;
            'color-interpolation-filters'?: string;
            'column-count'?: string;
            'column-fill'?: string;
            'column-gap'?: string;
            'column-rule'?: string;
            'column-rule-color'?: string;
            'column-rule-style'?: string;
            'column-rule-width'?: string;
            'column-span'?: string;
            'column-width'?: string;
            'columns'?: string;
            'content'?: string;
            'counter-increment'?: string;
            'counter-reset'?: string;
            'css-float'?: string;
            'css-text'?: string;
            'cursor'?: string;
            'direction'?: string;
            'display'?: string;
            'dominant-baseline'?: string;
            'empty-cells'?: string;
            'fill'?: string;
            'fill-opacity'?: string;
            'fill-rule'?: string;
            'filter'?: string;
            'flex'?: string;
            'flex-basis'?: string;
            'flex-direction'?: string;
            'flex-flow'?: string;
            'flex-grow'?: string;
            'flex-shrink'?: string;
            'flex-wrap'?: string;
            'float'?: string;
            'flood-color'?: string;
            'flood-opacity'?: string;
            'font'?: string;
            'font-family'?: string;
            'font-feature-settings'?: string;
            'font-kerning'?: string;
            'font-size'?: string;
            'font-size-adjust'?: string;
            'font-stretch'?: string;
            'font-style'?: string;
            'font-synthesis'?: string;
            'font-variant'?: string;
            'font-variant-caps'?: string;
            'font-variant-east-asian'?: string;
            'font-variant-ligatures'?: string;
            'font-variant-numeric'?: string;
            'font-variant-position'?: string;
            'font-weight'?: string;
            'gap'?: string;
            'glyph-orientation-vertical'?: string;
            'grid'?: string;
            'grid-area'?: string;
            'grid-auto-columns'?: string;
            'grid-auto-flow'?: string;
            'grid-auto-rows'?: string;
            'grid-column'?: string;
            'grid-column-end'?: string;
            'grid-column-gap'?: string;
            'grid-column-start'?: string;
            'grid-gap'?: string;
            'grid-row'?: string;
            'grid-row-end'?: string;
            'grid-row-gap'?: string;
            'grid-row-start'?: string;
            'grid-template'?: string;
            'grid-template-areas'?: string;
            'grid-template-columns'?: string;
            'grid-template-rows'?: string;
            'height'?: string;
            'hyphens'?: string;
            'image-orientation'?: string;
            'image-rendering'?: string;
            'inline-size'?: string;
            'justify-content'?: string;
            'justify-items'?: string;
            'justify-self'?: string;
            'left'?: string;
            'letter-spacing'?: string;
            'lighting-color'?: string;
            'line-break'?: string;
            'line-height'?: string;
            'list-style'?: string;
            'list-style-image'?: string;
            'list-style-position'?: string;
            'list-style-type'?: string;
            'margin'?: string;
            'margin-block-end'?: string;
            'margin-block-start'?: string;
            'margin-bottom'?: string;
            'margin-inline-end'?: string;
            'margin-inline-start'?: string;
            'margin-left'?: string;
            'margin-right'?: string;
            'margin-top'?: string;
            'marker'?: string;
            'marker-end'?: string;
            'marker-mid'?: string;
            'marker-start'?: string;
            'mask'?: string;
            'mask-composite'?: string;
            'mask-image'?: string;
            'mask-position'?: string;
            'mask-repeat'?: string;
            'mask-size'?: string;
            'mask-type'?: string;
            'max-block-size'?: string;
            'max-height'?: string;
            'max-inline-size'?: string;
            'max-width'?: string;
            'min-block-size'?: string;
            'min-height'?: string;
            'min-inline-size'?: string;
            'min-width'?: string;
            'object-fit'?: string;
            'object-position'?: string;
            'opacity'?: string;
            'order'?: string;
            'orphans'?: string;
            'outline'?: string;
            'outline-color'?: string;
            'outline-offset'?: string;
            'outline-style'?: string;
            'outline-width'?: string;
            'overflow'?: string;
            'overflow-anchor'?: string;
            'overflow-wrap'?: string;
            'overflow-x'?: string;
            'overflow-y'?: string;
            'overscroll-behavior'?: string;
            'overscroll-behavior-block'?: string;
            'overscroll-behavior-inline'?: string;
            'overscroll-behavior-x'?: string;
            'overscroll-behavior-y'?: string;
            'padding'?: string;
            'padding-block-end'?: string;
            'padding-block-start'?: string;
            'padding-bottom'?: string;
            'padding-inline-end'?: string;
            'padding-inline-start'?: string;
            'padding-left'?: string;
            'padding-right'?: string;
            'padding-top'?: string;
            'page-break-after'?: string;
            'page-break-before'?: string;
            'page-break-inside'?: string;
            'paint-order'?: string;
            'perspective'?: string;
            'perspective-origin'?: string;
            'place-content'?: string;
            'place-items'?: string;
            'place-self'?: string;
            'pointer-events'?: string;
            'position'?: string;
            'quotes'?: string;
            'resize'?: string;
            'right'?: string;
            'rotate'?: string;
            'row-gap'?: string;
            'ruby-align'?: string;
            'ruby-position'?: string;
            'scale'?: string;
            'scroll-behavior'?: string;
            'shape-rendering'?: string;
            'stop-color'?: string;
            'stop-opacity'?: string;
            'stroke'?: string;
            'stroke-dasharray'?: string;
            'stroke-dashoffset'?: string;
            'stroke-linecap'?: string;
            'stroke-linejoin'?: string;
            'stroke-miterlimit'?: string;
            'stroke-opacity'?: string;
            'stroke-width'?: string;
            'tab-size'?: string;
            'table-layout'?: string;
            'text-align'?: string;
            'text-align-last'?: string;
            'text-anchor'?: string;
            'text-combine-upright'?: string;
            'text-decoration'?: string;
            'text-decoration-color'?: string;
            'text-decoration-line'?: string;
            'text-decoration-style'?: string;
            'text-emphasis'?: string;
            'text-emphasis-color'?: string;
            'text-emphasis-position'?: string;
            'text-emphasis-style'?: string;
            'text-indent'?: string;
            'text-justify'?: string;
            'text-orientation'?: string;
            'text-overflow'?: string;
            'text-rendering'?: string;
            'text-shadow'?: string;
            'text-transform'?: string;
            'text-underline-position'?: string;
            'top'?: string;
            'touch-action'?: string;
            'transform'?: string;
            'transform-box'?: string;
            'transform-origin'?: string;
            'transform-style'?: string;
            'transition'?: string;
            'transition-delay'?: string;
            'transition-duration'?: string;
            'transition-property'?: string;
            'transition-timing-function'?: string;
            'translate'?: string;
            'unicode-bidi'?: string;
            'user-select'?: string;
            'vertical-align'?: string;
            'visibility'?: string;
            /** @deprecated */
            'webkit-align-content'?: string;
            /** @deprecated */
            'webkit-align-items'?: string;
            /** @deprecated */
            'webkit-align-self'?: string;
            /** @deprecated */
            'webkit-animation'?: string;
            /** @deprecated */
            'webkit-animation-delay'?: string;
            /** @deprecated */
            'webkit-animation-direction'?: string;
            /** @deprecated */
            'webkit-animation-duration'?: string;
            /** @deprecated */
            'webkit-animation-fill-mode'?: string;
            /** @deprecated */
            'webkit-animation-iteration-count'?: string;
            /** @deprecated */
            'webkit-animation-name'?: string;
            /** @deprecated */
            'webkit-animation-play-state'?: string;
            /** @deprecated */
            'webkit-animation-timing-function'?: string;
            /** @deprecated */
            'webkit-appearance'?: string;
            /** @deprecated */
            'webkit-backface-visibility'?: string;
            /** @deprecated */
            'webkit-background-clip'?: string;
            /** @deprecated */
            'webkit-background-origin'?: string;
            /** @deprecated */
            'webkit-background-size'?: string;
            /** @deprecated */
            'webkit-border-bottom-left-radius'?: string;
            /** @deprecated */
            'webkit-border-bottom-right-radius'?: string;
            /** @deprecated */
            'webkit-border-radius'?: string;
            /** @deprecated */
            'webkit-border-top-left-radius'?: string;
            /** @deprecated */
            'webkit-border-top-right-radius'?: string;
            /** @deprecated */
            'webkit-box-align'?: string;
            /** @deprecated */
            'webkit-box-flex'?: string;
            /** @deprecated */
            'webkit-box-ordinal-group'?: string;
            /** @deprecated */
            'webkit-box-orient'?: string;
            /** @deprecated */
            'webkit-box-pack'?: string;
            /** @deprecated */
            'webkit-box-shadow'?: string;
            /** @deprecated */
            'webkit-box-sizing'?: string;
            /** @deprecated */
            'webkit-filter'?: string;
            /** @deprecated */
            'webkit-flex'?: string;
            /** @deprecated */
            'webkit-flex-basis'?: string;
            /** @deprecated */
            'webkit-flex-direction'?: string;
            /** @deprecated */
            'webkit-flex-flow'?: string;
            /** @deprecated */
            'webkit-flex-grow'?: string;
            /** @deprecated */
            'webkit-flex-shrink'?: string;
            /** @deprecated */
            'webkit-flex-wrap'?: string;
            /** @deprecated */
            'webkit-justify-content'?: string;
            'webkit-line-clamp'?: string;
            /** @deprecated */
            'webkit-mask'?: string;
            /** @deprecated */
            'webkit-mask-box-image'?: string;
            /** @deprecated */
            'webkit-mask-box-image-outset'?: string;
            /** @deprecated */
            'webkit-mask-box-image-repeat'?: string;
            /** @deprecated */
            'webkit-mask-box-image-slice'?: string;
            /** @deprecated */
            'webkit-mask-box-image-source'?: string;
            /** @deprecated */
            'webkit-mask-box-image-width'?: string;
            /** @deprecated */
            'webkit-mask-clip'?: string;
            /** @deprecated */
            'webkit-mask-composite'?: string;
            /** @deprecated */
            'webkit-mask-image'?: string;
            /** @deprecated */
            'webkit-mask-origin'?: string;
            /** @deprecated */
            'webkit-mask-position'?: string;
            /** @deprecated */
            'webkit-mask-repeat'?: string;
            /** @deprecated */
            'webkit-mask-size'?: string;
            /** @deprecated */
            'webkit-order'?: string;
            /** @deprecated */
            'webkit-perspective'?: string;
            /** @deprecated */
            'webkit-perspective-origin'?: string;
            'webkit-tap-highlight-color'?: string;
            /** @deprecated */
            'webkit-text-fill-color'?: string;
            /** @deprecated */
            'webkit-text-size-adjust'?: string;
            /** @deprecated */
            'webkit-text-stroke'?: string;
            /** @deprecated */
            'webkit-text-stroke-color'?: string;
            /** @deprecated */
            'webkit-text-stroke-width'?: string;
            /** @deprecated */
            'webkit-transform'?: string;
            /** @deprecated */
            'webkit-transform-origin'?: string;
            /** @deprecated */
            'webkit-transform-style'?: string;
            /** @deprecated */
            'webkit-transition'?: string;
            /** @deprecated */
            'webkit-transition-delay'?: string;
            /** @deprecated */
            'webkit-transition-duration'?: string;
            /** @deprecated */
            'webkit-transition-property'?: string;
            /** @deprecated */
            'webkit-transition-timing-function'?: string;
            /** @deprecated */
            'webkit-user-select'?: string;
            'white-space'?: string;
            'widows'?: string;
            'width'?: string;
            'will-change'?: string;
            'word-break'?: string;
            'word-spacing'?: string;
            'word-wrap'?: string;
            'writing-mode'?: string;
            'z-index'?: string;
            /** @deprecated */
            'zoom'?: string;

            // Allow undeclared
            [index: string]: string;
        }

    }

    import CssJSONObject = css2json.CssJSONObject;

    function css2json(input: string): CssJSONObject

    export = css2json;
}
