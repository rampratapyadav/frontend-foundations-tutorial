# Video Script: JavaScript Essentials - DOM & Events

**Video Title:** JavaScript Essentials: DOM & Events

**Video Duration:** ~12-14 minutes

---

**[SCENE 1: Introduction]**

*   **[Visuals]:**
    *   Show the styled, but static, portfolio page.
    *   The cursor moves to the "Switch Theme" button and clicks it, but nothing happens.
    *   Title card: "JavaScript Essentials: DOM & Events"
*   **[Narration]:**
    "Welcome back. We have a well-structured and beautifully styled portfolio page. But it's not alive. It doesn't *do* anything. That's about to change. It's time to introduce the third core technology of the web: **JavaScript**."

    "JavaScript is the language of interactivity. It lets us manipulate the page, respond to user actions, and fetch data. Today, we'll focus on two fundamental concepts: the Document Object Model, or DOM, and how to handle user events."

---

**[SCENE 2: What is the DOM?]**

*   **[Visuals]:**
    *   Show the `index.html` code on one side of the screen.
    *   On the other side, show a tree-like diagram representing the HTML structure, with the `<html>` element at the top, branching down to `<head>` and `<body>`, and so on.
    *   As the narrator mentions selecting an element, the code `document.getElementById('theme-switcher')` appears, and the corresponding node in the tree diagram and the button on the webpage both get highlighted.
*   **[Narration]:**
    "So, how does JavaScript interact with our HTML? It does so through the **Document Object Model**, or **DOM**. The browser takes our HTML document and turns it into a tree-like structure of objects. Each element, like a `<header>` or a `<button>`, becomes an object, or a 'node,' in this tree."

    "JavaScript can access and manipulate this tree. We can select elements, change their content, modify their styles, and even create new elements from scratch. The first step is always selecting the element you want to work with."

    **[Code Snippet - Type/Display]:**
    ```javascript
    // Selecting Elements
    const themeSwitcherBtn = document.getElementById('theme-switcher');
    const projectsContainer = document.querySelector('#projects-container');
    ```
    **[Narration]:**
    "We can use methods like `getElementById` to grab an element by its unique ID, or `querySelector` to find an element using any CSS selector."

---

**[SCENE 3: Handling Events]**

*   **[Visuals]:**
    *   Focus on the theme switcher button.
    *   Show the code for adding an event listener.
    *   A diagram shows a user clicking the button, which triggers the 'click' event, which in turn executes the callback function we've defined.
*   **[Narration]:**
    "Once we have an element, we can listen for user interactions. This is called **event handling**. We can listen for clicks, mouse movements, keyboard presses, and much more. We do this with the `addEventListener` method."

    "It takes two main arguments: the name of the event to listen for (like 'click'), and a 'callback function'—the function to execute when the event happens."

    **[Code Snippet - Type/Display]:**
    ```javascript
    themeSwitcherBtn.addEventListener('click', () => {
      // Our logic will go here!
      console.log('Button clicked!');
    });
    ```
    **[Narration]:**
    "Now, when we click our theme switcher button, this function will run. Let's use this to finally make our theme switcher work."

---

**[SCENE 4: Making the Theme Switcher Work]**

*   **[Visuals]:**
    *   Show the `theme.ts` file.
    *   Walk through the code, explaining how it gets the root `<html>` element, checks the `data-theme` attribute, and toggles it between 'light' and 'dark'.
    *   Show the live site, and when the button is clicked, the `data-theme="dark"` attribute appears on the `<html>` tag in the developer tools, and the site's theme changes instantly.
*   **[Narration]:**
    "Here's the logic. When the button is clicked, we get the root element of our document, which is the `<html>` tag. We check its `data-theme` attribute. If it's currently 'dark', we change it to 'light', and if it's 'light', we change it to 'dark'."

    **[Code Snippet - Type/Display from `theme.ts`]:**
    ```typescript
    const docElement = document.documentElement; // This is the <html> tag

    switcher?.addEventListener('click', () => {
        const currentTheme = docElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        docElement.setAttribute('data-theme', newTheme);
    });
    ```
    **[Narration]:**
    "Because our CSS is set up with custom properties that react to this attribute, the theme changes instantly. This is the power of combining CSS with JavaScript event handling."

---

**[SCENE 5: Creating Elements and ES Modules]**

*   **[Visuals]:**
    *   Show the `projects.ts` file with the array of project data.
    *   Show the `app.ts` file, highlighting the `import` statement.
    *   Animate the process: the `forEach` loop runs, `document.createElement('article')` creates a new card, `innerHTML` populates it, and `appendChild` adds it to the DOM. Show the project cards appearing on the live site one by one.
*   **[Narration]:**
    "JavaScript isn't just for interacting with existing elements; we can create new ones. We'll do this to load our project cards dynamically from a data source."

    "To keep our code organized, we use **ES Modules**. We have our project data in a separate file, `projects.ts`, and we `export` it. Then, in our main `app.ts` file, we `import` that data."

    "We then loop over our projects array. For each project, we create a new `<article>` element, set its `innerHTML` with the project's data, and finally, use `appendChild` to add it to our projects container on the page."

    **[Code Snippet - Type/Display from `app.ts`]:**
    ```typescript
    import { projects } from './projects.js';

    projects.forEach(project => {
        const card = document.createElement('article');
        card.className = 'project-card';
        card.innerHTML = `<h3>${project.title}</h3> ...`;
        projectsContainer.appendChild(card);
    });
    ```

---

**[SCENE 6: Conclusion]**

*   **[Visuals]:**
    *   Show the final, fully interactive portfolio page.
    *   Recap the key concepts with text overlays: "DOM Manipulation", "Event Handling", "ES Modules".
    *   Show a title card for the next video: "Accessibility (A11y) Fundamentals".
*   **[Narration]:**
    "And with that, our portfolio is now interactive! We've learned how the browser creates the DOM, how to select and manipulate elements with JavaScript, how to listen for user events like clicks, and how to use ES Modules to keep our code clean and organized."

    "In our next video, we'll tackle a topic that is absolutely essential for any professional developer: Accessibility. We'll learn how to ensure our websites are usable by everyone."

    "Thanks for watching, and I'll see you next time!"
