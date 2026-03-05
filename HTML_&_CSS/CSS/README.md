# PART 2 — CSS

# CSS Topics Covered

1. Introduction to CSS
2. CSS Syntax
3. CSS Selectors
4. CSS Colors
5. CSS Background
6. CSS Box Model
7. CSS Margin
8. CSS Padding
9. CSS Border
10. CSS Text Styling
11. CSS Fonts
12. CSS Display
13. CSS Position
14. CSS Flexbox
15. CSS Grid
16. CSS Responsive Design
17. CSS Media Queries
18. CSS Transitions
19. CSS Animations
20. CSS Best Practices

---

# 1. Introduction to CSS

CSS stands for **Cascading Style Sheets**.

It is used to **style HTML pages**.

Example:

```css
p {
color: red;
}
```

---

# 2. CSS Syntax

```css
selector {
property: value;
}
```

Example:

```css
h1 {
color: blue;
font-size: 30px;
}
```

---

# 3. CSS Selectors

### Element selector

```css
p {
color: red;
}
```

### Class selector

```css
.box {
background: yellow;
}
```

### ID selector

```css
#title {
color: blue;
}
```

---

# 4. CSS Colors

```css
color: red;
color: #ff0000;
color: rgb(255,0,0);
```

---

# 5. Background

```css
body {
background-color: lightblue;
}

div {
background-image: url("image.jpg");
}
```

---

# 6. CSS Box Model

Every element has:

```
Margin
Border
Padding
Content
```

Example:

```css
div {
width:200px;
padding:20px;
border:2px solid black;
margin:10px;
}
```

---

# 7. Margin

Space outside element.

```css
margin:20px;
margin-top:10px;
```

---

# 8. Padding

Space inside element.

```css
padding:20px;
```

---

# 9. Border

```css
border:2px solid black;
```

---

# 10. Text Styling

```css
p {
text-align:center;
text-transform:uppercase;
letter-spacing:2px;
}
```

---

# 11. Fonts

```css
body {
font-family: Arial;
font-size:16px;
font-weight:bold;
}
```

---

# 12. Display

```css
display:block;
display:inline;
display:flex;
display:grid;
```

---

# 13. Position

```css
position:static;
position:relative;
position:absolute;
position:fixed;
position:sticky;
```

---

# 14. Flexbox

Used for layout.

```css
.container{
display:flex;
justify-content:center;
align-items:center;
}
```

---

# 15. Grid

```css
.container{
display:grid;
grid-template-columns: 1fr 1fr 1fr;
}
```

---

# 16. Responsive Design

Websites adjust for screen sizes.

Example:

```css
img{
max-width:100%;
}
```

---

# 17. Media Queries

```css
@media (max-width:768px){
body{
background:red;
}
}
```

---

# 18. Transitions

```css
button{
transition:0.3s;
}

button:hover{
background:red;
}
```

---

# 19. Animations

```css
@keyframes move{
from{left:0;}
to{left:200px;}
}
```

---

# 20. Best Practices

✔ Use semantic HTML
✔ Keep CSS organized
✔ Use classes instead of inline styles
✔ Make responsive designs

---
