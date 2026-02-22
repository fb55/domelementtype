/** Types of elements found in htmlparser2's DOM */
export enum ElementType {
    /** Type for the root element of a document */
    Root = "root",
    /** Type for Text */
    Text = "text",
    /** Type for <? ... ?> */
    Directive = "directive",
    /** Type for <!-- ... --> */
    Comment = "comment",
    /** Type for <script> tags */
    Script = "script",
    /** Type for <style> tags */
    Style = "style",
    /** Type for Any tag */
    Tag = "tag",
    /** Type for <![CDATA[ ... ]]> */
    CDATA = "cdata",
    /** Type for <!doctype ...> */
    Doctype = "doctype",
}

/**
 * Tests whether an element is a tag or not.
 *
 * @param element Element to test
 */
export function isTag(element: { type: ElementType }): boolean {
    return (
        element.type === ElementType.Tag ||
        element.type === ElementType.Script ||
        element.type === ElementType.Style
    );
}

// Exports for backwards compatibility
/** Type for the root element of a document */
// eslint-disable-next-line prefer-destructuring
export const Root: ElementType.Root = ElementType.Root;
/** Type for Text */
// eslint-disable-next-line prefer-destructuring
export const Text: ElementType.Text = ElementType.Text;
/** Type for <? ... ?> */
// eslint-disable-next-line prefer-destructuring
export const Directive: ElementType.Directive = ElementType.Directive;
/** Type for <!-- ... --> */
// eslint-disable-next-line prefer-destructuring
export const Comment: ElementType.Comment = ElementType.Comment;
/** Type for <script> tags */
// eslint-disable-next-line prefer-destructuring
export const Script: ElementType.Script = ElementType.Script;
/** Type for <style> tags */
// eslint-disable-next-line prefer-destructuring
export const Style: ElementType.Style = ElementType.Style;
/** Type for Any tag */
// eslint-disable-next-line prefer-destructuring
export const Tag: ElementType.Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
// eslint-disable-next-line prefer-destructuring
export const CDATA: ElementType.CDATA = ElementType.CDATA;
/** Type for <!doctype ...> */
// eslint-disable-next-line prefer-destructuring
export const Doctype: ElementType.Doctype = ElementType.Doctype;
