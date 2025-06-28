
# Frontend Foundations: Revision Guide

This guide summarizes the core concepts from the portfolio project. Review these points to solidify your understanding of modern frontend development fundamentals.

---

### 1. Semantic HTML: Writing with Meaning

Semantic HTML means using tags that describe the *meaning* of the content they enclose. This is crucial for **accessibility** (screen readers) and **SEO**.

**Key Tags to Memorize:**

*   `<header>`: Introductory content for a page or section. Contains navigation, logos, etc.
*   `<nav>`: Contains navigation links.
*   `<main>`: The primary, unique content of the page. There should only be **one** per page.
*   `<section>`: A thematic grouping of content. Typically has a heading (`<h1>` - `<h6>`).
*   `<article>`: Self-contained content that could stand on its own (e.g., a blog post, a project card).
*   `<footer>`: Closing content for a page or section. Contains copyright, contact info, etc.
*   `<aside>`: Content that is tangentially related to the main content (e.g., a sidebar).

**Example Structure:**

```html
<body>
  <header>
    <nav></nav>
  </header>
  <main>
    <section id="about">
      <article></article>
    </section>
  </main>
  <footer></footer>
</body>
```

---

### 2. Modern CSS: Layout and Theming

#### a. CSS Custom Properties (Variables)

Custom Properties allow you to define reusable values. They are perfect for theming and maintaining consistency.

**How to Use:**

1.  **Define in `:root`:** Store global variables in the `:root` pseudo-class.
2.  **Use with `var()`:** Access the variable using the `var()` function.

**Example (Theming):**

```css
:root {
  --background-color: #ffffff;
  --text-color: #333333;
}

/* Dark theme override */
[data-theme="dark"] {
  --background-color: #121212;
  --text-color: #e0e0e0;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
}
```

#### b. Flexbox

Flexbox is a one-dimensional layout model for arranging items in rows or columns.

**Key Properties to Memorize:**

*   `display: flex;` (on the container)
*   `flex-direction: row | column;`
*   `justify-content: center | space-between | ...;` (aligns items along the main axis)
*   `align-items: center | ...;` (aligns items along the cross axis)
*   `gap: <value>;` (creates space between items)

**Example (Header Navigation):**

```css
header {
  display: flex;
  justify-content: space-between; /* Pushes children to opposite ends */
  align-items: center;       /* Vertically centers them */
}
```

#### c. CSS Grid

Grid is a two-dimensional layout model for arranging items in both rows and columns.

**Key Properties to Memorize:**

*   `display: grid;` (on the container)
*   `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));` (creates a responsive grid of columns)
*   `gap: <value>;` (creates space between grid items)

**Example (Project Cards Layout):**

```css
#projects-container {
  display: grid;
  /* 
    - repeat(): create multiple columns
    - auto-fit: fit as many columns as possible
    - minmax(300px, 1fr): each column is at least 300px wide, and can grow to take up available space (1fr)
  */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
```

---

### 3. JavaScript Essentials

#### a. DOM Manipulation

This is how you interact with the HTML structure.

*   **Selecting Elements:**
    *   `document.getElementById('id')`
    *   `document.querySelector('css-selector')`
*   **Creating Elements:**
    *   `document.createElement('div')`
*   **Modifying Elements:**
    *   `element.textContent = 'New text'`
    *   `element.className = 'my-class'`
    *   `element.setAttribute('data-theme', 'dark')`
*   **Adding Elements to the Page:**
    *   `parentElement.appendChild(childElement)`

#### b. Event Handling

This is how you respond to user actions.

*   **`element.addEventListener('event-type', callbackFunction)`**

**Example (Theme Switcher):**

```javascript
const themeSwitcher = document.getElementById('theme-switcher');

themeSwitcher.addEventListener('click', () => {
  // Your logic here
});
```

#### c. ES Modules (`import`/`export`)

Modules help you organize your code by splitting it into separate, reusable files.

*   **`export`:** Makes variables, functions, or classes available to other files.
*   **`import`:** Pulls exported code into another file.

**Example:**

```javascript
// projects.js
export const projects = [ { /* ... */ } ];

// app.js
import { projects } from './projects.js';
```

**Crucial Final Step:** You MUST tell the browser you are using modules in your HTML.

```html
<script type="module" src="app.js"></script>
```

---

### 4. Running a Local Server

**Why?** Modern web features, especially ES Modules, have security restrictions that prevent them from working when you open an HTML file directly from your local file system (`file:///...`). You need to serve them over HTTP (`http://...`).

**The Command to Memorize:**

1.  Navigate to your project folder in the terminal (`cd frontend_foundations_tutorial`).
2.  Run the command: `python3 -m http.server`
3.  Open `http://localhost:8000` in your browser.
