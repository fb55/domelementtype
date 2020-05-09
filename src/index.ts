/** Types of elements found in the DOM */
export const enum ElementType {
    Text = "text", //Text
    Directive = "directive", //<? ... ?>
    Comment = "comment", //<!-- ... -->
    Script = "script", //<script> tags
    Style = "style", //<style> tags
    Tag = "tag", //Any tag
    CDATA = "cdata", //<![CDATA[ ... ]]>
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
export const Text = ElementType.Text; //Text
export const Directive = ElementType.Directive; //<? ... ?>
export const Comment = ElementType.Comment; //<!-- ... -->
export const Script = ElementType.Script; //<script> tags
export const Style = ElementType.Style; //<style> tags
export const Tag = ElementType.Tag; //Any tag
export const CDATA = ElementType.CDATA; //<![CDATA[ ... ]]>
export const Doctype = ElementType.Doctype;
