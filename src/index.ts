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
 * @param elem Element to test
 */
export function isTag(elem: { type: ElementType }): boolean {
    return (
        elem.type === ElementType.Tag ||
        elem.type === ElementType.Script ||
        elem.type === ElementType.Style
    );
}

// Exports for backwards compatibility
/** Type for the root element of a document */
export const Root = ElementType.Root;
/** Type for Text */
export const Text = ElementType.Text;
/** Type for <? ... ?> */
export const Directive = ElementType.Directive;
/** Type for <!-- ... --> */
export const Comment = ElementType.Comment;
/** Type for <script> tags */
export const Script = ElementType.Script;
/** Type for <style> tags */
export const Style = ElementType.Style;
/** Type for Any tag */
export const Tag = ElementType.Tag;
/** Type for <![CDATA[ ... ]]> */
export const CDATA = ElementType.CDATA;
/** Type for <!doctype ...> */
export const Doctype = ElementType.Doctype;
