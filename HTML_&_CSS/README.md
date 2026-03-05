
# PART 1 — HTML

# HTML Topics Covered

1. Introduction to HTML
2. HTML Document Structure
3. HTML Elements and Tags
4. HTML Attributes
5. Headings and Paragraphs
6. Text Formatting
7. Links
8. Images
9. Lists
10. Tables
11. Forms
12. Input Types
13. Semantic HTML
14. Block vs Inline Elements
15. Div and Span
16. HTML Media (Audio, Video)
17. HTML Iframe
18. HTML Entities
19. HTML Meta Tags
20. HTML Accessibility
21. HTML Best Practices

---

# 1. Introduction to HTML

HTML stands for **HyperText Markup Language**.

It is used to **create the structure of web pages**.

HTML tells the browser **what content should appear on the page**.

Example:

```html
<p>This is a paragraph</p>
```

Browser Output:

This is a paragraph

---

# 2. HTML Document Structure

Every HTML page follows this structure:

```html
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<title>My Website</title>
</head>

<body>

<h1>Hello World</h1>
<p>Welcome to my website</p>

</body>

</html>
```

Explanation:

| Tag               | Purpose         |
| ----------------- | --------------- |
| `<!DOCTYPE html>` | Defines HTML5   |
| `<html>`          | Root element    |
| `<head>`          | Metadata        |
| `<body>`          | Visible content |

---

# 3. HTML Elements

An **HTML element** consists of:

```
Opening Tag + Content + Closing Tag
```

Example:

```html
<h1>Welcome</h1>
```

Parts:

| Part    | Meaning     |
| ------- | ----------- |
| `<h1>`  | Opening tag |
| Welcome | Content     |
| `</h1>` | Closing tag |

---

# 4. HTML Attributes

Attributes provide **extra information about elements**.

Example:

```html
<a href="https://google.com">Google</a>
```

Here:

```
href = attribute
```

Another example:

```html
<img src="image.jpg" alt="photo">
```

Common attributes:

| Attribute | Purpose           |
| --------- | ----------------- |
| id        | unique identifier |
| class     | CSS styling       |
| src       | image path        |
| href      | link              |
| alt       | image description |

---

# 5. Headings

HTML has **6 heading levels**.

```html
<h1>Main Title</h1>
<h2>Subtitle</h2>
<h3>Section</h3>
<h4>Subsection</h4>
<h5>Small heading</h5>
<h6>Smallest heading</h6>
```

---

# 6. Paragraphs

Paragraphs are created using `<p>`.

```html
<p>This is a paragraph.</p>
```

---

# 7. Text Formatting

HTML provides tags for formatting text.

```html
<b>Bold</b>
<strong>Important</strong>
<i>Italic</i>
<em>Emphasis</em>
<u>Underline</u>
<mark>Highlight</mark>
<small>Small text</small>
<del>Deleted text</del>
<ins>Inserted text</ins>
```

Example:

```html
<p>This is <b>bold</b> text</p>
```

---

# 8. Links

Links connect pages.

```html
<a href="https://google.com">Go to Google</a>
```

Open in new tab:

```html
<a href="https://google.com" target="_blank">Google</a>
```

---

# 9. Images

Images are inserted using `<img>`.

```html
<img src="cat.jpg" alt="cat image" width="300">
```

Attributes:

| Attribute | Meaning        |
| --------- | -------------- |
| src       | image location |
| alt       | description    |
| width     | size           |

---

# 10. Lists

### Unordered List

```html
<ul>
<li>Apple</li>
<li>Mango</li>
<li>Orange</li>
</ul>
```

### Ordered List

```html
<ol>
<li>Step 1</li>
<li>Step 2</li>
<li>Step 3</li>
</ol>
```

### Description List

```html
<dl>
<dt>HTML</dt>
<dd>Markup language</dd>
</dl>
```

---

# 11. Tables

Tables organize data.

```html
<table border="1">

<tr>
<th>Name</th>
<th>Age</th>
</tr>

<tr>
<td>Manohar</td>
<td>22</td>
</tr>

</table>
```

Table elements:

| Tag   | Meaning |
| ----- | ------- |
| table | table   |
| tr    | row     |
| th    | header  |
| td    | data    |

---

# 12. Forms

Forms collect user input.

```html
<form>

<label>Name</label>
<input type="text">

<br>

<label>Email</label>
<input type="email">

<br>

<input type="submit">

</form>
```

---

# 13. Input Types

HTML supports many input types.

```html
<input type="text">
<input type="password">
<input type="email">
<input type="number">
<input type="date">
<input type="checkbox">
<input type="radio">
<input type="file">
<input type="submit">
```

---

# 14. Semantic HTML

Semantic tags give **meaning to structure**.

Examples:

```html
<header></header>
<nav></nav>
<section></section>
<article></article>
<footer></footer>
```

Example:

```html
<header>
<h1>Website</h1>
</header>
```

---

# 15. Block vs Inline Elements

### Block elements

Take full width.

Examples:

```
div
p
h1
section
```

### Inline elements

Take only needed width.

Examples:

```
span
a
img
```

---

# 16. Div and Span

### Div

Used to group content.

```html
<div>
<h1>Title</h1>
<p>Paragraph</p>
</div>
```

### Span

Used for inline styling.

```html
<p>This is <span>important</span> text</p>
```

---

# 17. HTML Media

### Audio

```html
<audio controls>
<source src="song.mp3">
</audio>
```

### Video

```html
<video width="400" controls>
<source src="video.mp4">
</video>
```

---

# 18. Iframe

Used to embed other webpages.

```html
<iframe src="https://example.com"></iframe>
```

---

# 19. HTML Entities

Used to display special characters.

| Symbol | Entity   |
| ------ | -------- |
| <      | `&lt;`   |
| >      | `&gt;`   |
| &      | `&amp;`  |
| ©      | `&copy;` |

Example:

```html
<p>&copy; 2026 My Website</p>
```

---
