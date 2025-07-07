# Video Script: Modern CSS - Layout & Theming

**Video Title:** Modern CSS: Layout & Theming

**Video Duration:** ~10-12 minutes

---

**[SCENE 1: Introduction]**

*   **[Visuals]:**
    *   Start with a shot of the unstyled, semantic HTML from the end of Video 1.
    *   A fast, satisfying transition wipes across the screen, revealing the fully styled, modern-looking portfolio page.
    *   Title card: "Modern CSS: Layout & Theming"
*   **[Narration]:**
    "Welcome back! In our last video, we laid the essential foundation with semantic HTML. But as you can see, structure alone isn't very exciting. Today, we're going to bring it to life. We're diving into the world of CSS, or Cascading Style Sheets."

    "We'll focus on three powerful, modern CSS concepts that are absolutely essential for building any contemporary website: CSS Custom Properties for theming, Flexbox for one-dimensional layout, and CSS Grid for two-dimensional layout."

---

**[SCENE 2: Linking our Stylesheet & CSS Custom Properties]**

*   **[Visuals]:**
    *   Code editor view. Show the `index.html` file.
    *   Add the `<link rel="stylesheet" href="styles.css">` line in the `<head>`.
    *   Switch to a new, empty `styles.css` file.
    *   Type out the `:root` block with CSS variables.
    *   Show a diagram illustrating how `var(--primary-color)` pulls the value from the `:root` definition.
*   **[Narration]:**
    "First, we need to connect our CSS to our HTML. We do this with a single `<link>` tag in the `<head>` of our HTML document. This tells the browser to apply the rules from our `styles.css` file."

    "Now, let's talk about making our styles maintainable. Instead of repeating color codes everywhere, we can define them once as **CSS Custom Properties**, or variables. We do this inside the `:root` selector, which represents the entire page."

    **[Code Snippet - Type/Display]:**
    ```css
    :root {
      --background-color: #ffffff;
      --text-color: #333333;
      --primary-color: #007bff;
      --card-bg-color: #f8f9fa;
    }

    body {
      background-color: var(--background-color);
      color: var(--text-color);
    }
    ```
    **[Narration]:**
    "Now, if we want to change our primary color, we only have to change it in one place! This is also the key to theming. We can define a new set of variables for a dark theme, which we'll activate with JavaScript in a later video."

    **[Code Snippet - Type/Display]:**
    ```css
    [data-theme="dark"] {
      --background-color: #121212;
      --text-color: #e0e0e0;
      --primary-color: #bb86fc;
      --card-bg-color: #1e1e1e;
    }
    ```

---

**[SCENE 3: Flexbox for 1D Layout]**

*   **[Visuals]:**
    *   Focus on the header of the portfolio page.
    *   Show the navigation items and the theme switcher button stacked on top of each other initially.
    *   Animate the `display: flex` property being applied, causing the items to align in a row.
    *   Animate `justify-content: space-between` pushing the navigation to the left and the button to the right.
    *   Animate `align-items: center` vertically centering the items.
*   **[Narration]:**
    "Next up is **Flexbox**. Flexbox is a layout model designed for arranging items in a single dimension—either a row or a column. It is perfect for components like our site header."

    "Our header contains the navigation on the left and the theme switcher on the right. To align them, we first set the header's display property to `flex`."

    **[Code Snippet - Type/Display]:**
    ```css
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 2rem;
    }
    ```
    **[Narration]:**
    "Then, `justify-content: space-between` pushes the direct children to opposite ends of the container. Finally, `align-items: center` vertically centers them. It's that simple to create a clean, flexible header layout."

---

**[SCENE 4: CSS Grid for 2D Layout]**

*   **[Visuals]:**
    *   Focus on the "My Projects" section.
    *   Show three project cards stacked vertically.
    *   Animate the `display: grid` property being applied.
    *   Visualize the `grid-template-columns` property by drawing columns over the cards. Show how `repeat(auto-fit, minmax(300px, 1fr))` automatically creates a responsive grid that reflows as the screen size changes.
*   **[Narration]:**
    "While Flexbox is for one dimension, **CSS Grid** is for two: rows AND columns. This makes it incredibly powerful for the main layout of a page or for a gallery of items, like our project cards."

    "We want our project cards to arrange themselves into a responsive grid. We start by setting the container's display to `grid`."

    **[Code Snippet - Type/Display]:**
    ```css
    #projects-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    ```
    **[Narration]:**
    "This `grid-template-columns` line is magic. `repeat(auto-fit, ...)` tells the browser to fit as many columns as it can. `minmax(300px, 1fr)` tells it that each column should be at least 300 pixels wide, but can grow to take up any available space. With this one line of code, we get a perfectly responsive grid without any complex media queries."

---

**[SCENE 5: Conclusion]**

*   **[Visuals]:**
    *   Show the final, beautifully styled portfolio page.
    *   Quickly recap the three main concepts with text overlays: "CSS Custom Properties", "Flexbox", "CSS Grid".
    *   Show a title card for the next video: "JavaScript Essentials: DOM & Events".
*   **[Narration]:**
    "And there we have it. We've taken a plain HTML document and given it a modern, responsive layout and a theming structure. We used Custom Properties for maintainable styles, Flexbox for our 1D header layout, and CSS Grid for our 2D projects layout."

    "In our next video, we'll make our page interactive. We'll dive into the third core technology of the web, JavaScript, to handle user events and manipulate the DOM. We'll finally make that theme switcher work!"

    "Thanks for watching. Practice these CSS concepts, and I'll see you in the next video!"
