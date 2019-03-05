---
title: Typography
badges: html, css
description: Clarity uses the geometric sans-serif font, Metropolis.
layout: pattern
---

Text Styles
Style Name	Attributes	Selectors	Used For
Body text

Metropolis Regular
color: #565656
font-size: 14px
letter-spacing: normal
p, .p1	
Default text styling (page_bodyText)
Sidenav text (sidenav_text)
Body text in cards (card_text)
Text and dropdowns (dropdown_text)
Tab navigation links (tab_text)
Wizard steps and table of contents
General paragraphs, sentences, lists
Section header

Metropolis Medium
color: #565656
font-size: 13px
letter-spacing: normal
.p2	
Stack view header (stackview_header)
Form headers
Tree view headers
Table, grid, and form text

Metropolis Regular
color: #565656
font-size: 13px
letter-spacing: normal
.p3	
Text in alerts (alert_text)
Stack view text (stackview_text)
Datagrid text (table_text)
Text in HTML tables (table_text)
Text in tooltips and validations (tooltip_text)
Form text
Treeview text
Form labels and column headers

Metropolis Semibold
color: #565656
font-size: 12px
letter-spacing: normal
.p4	
Button text (Normal)
Table and datagrid headers (table_header)
Dropdown headers (dropdown_header)
Table footers and chart data

Metropolis Regular
color: #565656
font-size: 12px
letter-spacing: normal
.p5	
Table and datagrid footers
Chart and data visualization info
Small headers

Metropolis Semibold
color: #565656
font-size: 11px
letter-spacing: 0.03em
.p6	
Button text (Small)
Usually used in all caps
Tags and labels

Metropolis Regular
color: #565656
font-size: 11px
letter-spacing: 0.03em
.p7	
Text inside tags and labels (label_text)
Badges

Metropolis Regular
color: #565656
font-size: 10px
letter-spacing: 0.03em
.p8	
Text inside badges
Monospaced

Consolas Regular
font-size: 14px
letter-spacing: normal
pre.
language-*
or code.
language-*	
Code or system-type messages like in a terminal or console
<p class="p1">Body text</p>
<p class="p2">Section header</p>
<p class="p3">Table, grid, and form text</p>
<p class="p4">Form labels and column headers</p>
<p class="p5">Table footers and chart data</p>
<p class="p6">Mostly buttons</p>
<p class="p7">Tags and labels</p>
<p class="p8">Badges</p>
<pre class="language-html">Monospaced</pre> or <code class="language-html">Monospaced</code>
Header Styles
Style Name	Attributes	Selectors	Used For
Heading 1
Metropolis Light
color: #000000
font-size: 32px
letter-spacing: normal
h1	
Login screen product name (login_productName)
Large display numbers (charts/data visualization)
Heading 2
Metropolis Light
color: #000000
font-size: 28px
letter-spacing: normal
h2	
Main content header (page_mainHeading)
Heading 3
Metropolis Light
color: #000000
font-size: 22px
letter-spacing: normal
h3	
Secondary content header (page_secondaryHeading)
Modal/Wizard/Dialog header (modal_header)
Heading 4
Metropolis Light
color: #000000
font-size: 18px
letter-spacing: normal
h4	
Tertiary content header (page_tertiaryHeading)
Card header/title (card_title)
Heading 5
Metropolis Regular
color: #565656
font-size: 16px
letter-spacing: 0.01em
h5	
Section header 1 (page_sectionHeader)
Introductory paragraph (page_introParagraph)
Heading 6
Metropolis Medium
color: #313131
font-size: 14px
letter-spacing: normal
h6	
Section header 2
Sidenav section header (sidenav_sectionHeader)
TOC header (toc_header)
<h1>Header 1 (Display)</h1>
<h2>Header 2 (Headline)</h2>
<h3>Header 3 (Sub Heading)</h3>
<h4>Header 4 (Section Heading Level 1)</h4>
<h5>Header 5 (Category / group label, TOC)</h5>
<h6>Header 6 (Section Heading Level 2 group label)</h6>
Using Typography
Clarity includes several SASS variables, collections, mixing, and functions for working with typography. These are described below:

$clr-font
This SASS variable points to our default text font, Metropolis.

$clr-altFont
This SASS variable is only used for our headers (H1..H6). Currently, it also points to Metropolis.

$clr-font-size
This SASS variable sets our default font size to 14px.

$clr-font-weights
This SASS variable contains a collection for the font weights used in Clarity — light, regular, semibold, and bold. The actual weights assigned to these values are 200, 400, 500, and 600 respectively. The default font weight in Clarity is regular/400. The bold font-weight is actually Metropolis semi-bold (600).

$clr-elements
This SASS variable contains a collection that can access all of the font properties for H1 through H6 and P1 through P8 as defined in our typography specs. These properties are returned as a collection which contains nested collections of both common font properties across all screen sizes, as well as breakpoint overrides.


// passing element label to map-get
map-get($clr-elements, h3);

// returns nested map of common properties and breakpoint overrides
//  (
//      clr-common: (
//          font-weight: …,
//          letter-spacing: …,
//          font-family: …,
//          line-height: …,
//      ),
//      small: (
//          letter-spacing: [breakpoint override]
//      ),
//      medium: (
//          letter-spacing: [breakpoint override]
//      ),
//      large: (
//          letter-spacing: [breakpoint override]
//      ),
//      xlarge: (
//          letter-spacing: [breakpoint override]
//      )
//  );
$clr-typography-dom-to-type-element
This collection maps Clarity components and DOM containers to their expected type properties in $clr-elements. Use the labels listed in the Use For column of the typography tables above.

Mixins
Clarity uses SASS mixins to make it easier to access the type properties in the variables and collections listed above. The typography mixins return full CSS style definitions. They are intended to be used inside SASS/SCSS style declarations, placeholders, or other mixins.

clr-getTypeProperties ($element, $whichTypeProperties)
Returns specified styles (from $whichTypeProperties list parameter) for all styles from the designated typographic element (h1..h6 or p1..p8).

Parameters
Parameter	Optional	Purpose	Default
$element	No	Key for the typographic properties in the $clr-elements map. h1..h6 or p1..p8	 
$whichTypeProperties	Yes	A list of font style properties like (font-weight, line-height). If empty, all properties will be returned.	An empty list
Example

// passing type property list
.my-styles {
    @include clr-getTypeProperties(p1, (font-weight, font-size));
};

//  renders as...
//  .my-styles {
//      font-weight: 400;
//      font-size: 14px;
//  };

// passing no type property list
.all-my-styles {
    @include clr-getTypeProperties(p8);
};

//  renders as...
//  .all-my-styles {
//      font-weight: 400;
//      font-size: 10px;
//      letter-spacing: 0.03em;
//      line-height: 12px;
//      margin-top: 24px;
//      margin-bottom: 0;
//  };
clr-getTypePropertiesForDomElement($element-label, $typePropertiesToGet)
An include that abstracts the clr-getTypeProperties mixin so that users can look up typography based on how it is used in Clarity.

Parameters
Parameter	Optional	Purpose	Default
$element-label	No	Key/label for the element as found in the $clr-typography-dom-to-type-element map. Existing labels can be found in the Use For column of the header and body text tables above.	 
$typePropertiesToGet	Yes	A list of font style properties like (font-weight, line-height). If empty, all properties will be returned.	An empty list
Example

// passing type property list
.sidenav-styles {
    @include clr-getTypePropertiesForDomElement(p1, (font-weight, font-size));
};

//  renders as...
//  .sidenav-styles {
//      font-weight: 400;
//      font-size: 14px;
//      letter-spacing: 0.01em;
//  };

// passing no type property list
.small-text-styles {
    @include clr-getTypeProperties(label_text);
};

//  renders as...
//  .small-text-styles {
//      font-weight: 400;
//      font-size: 11px;
//      letter-spacing: 0.03em;
//      line-height: 12px;
//      margin-top: 24px;
//      margin-bottom: 0;
//  };
Functions
Clarity also includes functions that allow you to access typographic properties to assign them to your own style properties or SASS variables.

clr-getTypePropertyValue($element-label, $valToGet)
clr-getTypePropertyValue
Returns specified style value (from $valToGet) from styles for the designated typographic element (h1..h6 or p1..p8). Returns an empty string "" if the typographic element does not have the style for which it was asked or if it is passed invalid values.

Parameters
Parameter	Optional	Purpose
$element-label	No	Key for the typographic properties in the $clr-elements map. h1..h6 or p1..p8
$valToGet	No	A CSS style property from the list of font style properties like font-size, font-weight, etc.
Example

// passing type property list
$myCustomVar: clr-getTypePropertyValue(p1, font-size);
.my-style {
    font-size: $myCustomVar;
};

//  renders as...
//  .my-style {
//      font-size: 14px;
//  };
clr-getTypePropertyValueForDomElement($element-label, $valToGet)
This SASS function serves as an abstraction of the clr-getTypePropertyValue above. It performs a lookup against the $clr-typography-dom-to-type-element map so that users can use more familiar component/DOM element labels (as listed in the tables above) to access style property values.

The function returns a specified style value (from $valToGet) from styles for the designated DOM element label (like page_mainHeading). Returns an empty string "" if the DOM element or the style is not found.

Parameters
Parameter	Optional	Purpose
$element-label	No	Key/label for the element as found in the $clr-typography-dom-to-type-element map. Existing labels can be found in the Use For column of the header and body text tables above.
$valToGet	No	A CSS style property from the list of font style properties like font-size, font-weight, etc.
Example

// passing type property list
$myCustomVar: clr-getTypePropertyValueForDomElement(table_header, font-weight);
.my-style {
    font-weight: $myCustomVar;
};

//  renders as...
//  .my-style {
//      font-weight: 600;
//  };
The Metropolis Font
Metropolis has clear, simple letters with rounded forms. 
This gives the font a friendly and modern appearance.

Metropolis light, regular, medium, and semibold

Font Weights in Clarity
To maintain a light, clean look, Clarity does not use a weight stronger than semibold.

Metropolis light, regular, medium, and semibold

Use the Built-in Styles
The Clarity team determined the optimal height and weight of the text for each component. Some components also have line wrapping built-in. If not, text should be kept to a single line.

Use Text Links for Navigation
Text Links
Normal
Hovered
Clicked
Visited
Don’t use text links for a call to action. Buttons are better.