# DOM and Events Fundamentals

### DOM
The DOM (Document Object Model) represents an HTML document as a tree structure where each node is an object representing a part of the document. Below is an example of a simple HTML document and its corresponding DOM tree structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document Title</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph.</p>
    <div>
        <a href="https://example.com">Link to Example</a>
    </div>
</body>
</html>

```
### Corresponding DOM Tree Structure
The DOM tree structure for the above HTML document can be visualized as follows:

```less
#document
├── html
│   ├── head
│   │   ├── meta
│   │   └── title
│   └── body
│       ├── h1
│       ├── p
│       └── div
│           └── a

```
### Detailed Breakdown
1. #document: The root node of the DOM tree, representing the entire document.
2. `html`: The `<html>` element, representing the root of the HTML document.
    - `head`: The `<head>` element, containing metadata and links to scripts and styles.
    - `meta`: The `<meta`> element, specifying the character set of the document.
    - `title`: The `<title>` element, specifying the title of the document.
    - `body`: The `<body>` element, containing the content of the document.
    - `h1`: The `<h1>` element, representing a top-level heading.
    - `p`: The `<p>` element, representing a paragraph.
    - `div`: The `<div>` element, representing a division or section.
    - `a`: The `<a>` element, representing a hyperlink.

