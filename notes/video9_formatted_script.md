# Video Script: Intro to a Core Framework (React & Vue)

**Video Title:** Intro to a Core Framework (React & Vue)

**Video Duration:** ~12-15 minutes

---

**[SCENE 1: Introduction]**

*   **[Visuals]:**
    *   An animation shows our portfolio project's code. The code then morphs and refactors into component-based structures, with React and Vue logos appearing.
    *   Title card: "Intro to a Core Framework: Building with React & Vue"
*   **[Narration]:**
    "Welcome back. We have mastered the fundamental building blocks of the web: HTML, CSS, and JavaScript. Now, it's time to scale our development. As applications grow, managing everything with vanilla JavaScript can become complex. This is where frameworks come in."

    "Frameworks provide structure, patterns, and tools that help us build large, maintainable applications more efficiently. In this video, we'll get a high-level introduction to the two most popular frontend frameworks in the world: **React** and **Vue**."

---

**[SCENE 2: The Core Idea: Component-Based Architecture]**

*   **[Visuals]:**
    *   Show our portfolio page being broken down into highlighted, reusable pieces: a `<Header>`, a `<ProjectCard>`, a `<ThemeSwitcherButton>`.
    *   A diagram shows these components forming a tree structure.
*   **[Narration]:**
    "Both React and Vue are built around the same core concept: **Component-Based Architecture**. The idea is to break down your user interface into small, reusable, self-contained pieces called components."

    "Instead of one giant HTML file, you build a tree of components. You might have a `Header` component, a `ProjectList` component, and inside that, multiple `ProjectCard` components. This makes your code more organized, reusable, and easier to test."

---

**[SCENE 3: Introduction to React]**

*   **[Visuals]:**
    *   Show a simple React component written as a JavaScript function.
    *   Highlight the JSX syntax, showing how it looks like HTML inside JavaScript.
    *   Show the concepts of `props` being passed down to a component and `state` being managed within a component using the `useState` hook.
*   **[Narration]:**
    "Let's start with **React**. React is a JavaScript library developed by Facebook. Its components are typically written as JavaScript functions that return what looks like HTML. This syntax is called **JSX**."

    "Data is passed *down* to components via **props**, which are read-only. For a component to have its own, internal, changeable data, it uses **state**. The `useState` hook is how we add state to a component. When state changes, React automatically re-renders the component to reflect the new data."

    **[Code Snippet - Display a simple React Counter]:**
    ```jsx
    import React, { useState } from 'react';

    function Counter() {
      const [count, setCount] = useState(0);

      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
            Click me
          </button>
        </div>
      );
    }
    ```

---

**[SCENE 4: Introduction to Vue.js]**

*   **[Visuals]:**
    *   Show a Vue Single-File Component (`.vue` file).
    *   Highlight the three sections: `<template>`, `<script>`, and `<style>`.
    *   Show the template syntax with `{{ message }}` and directives like `v-on:click` (or `@click`).
    *   Show the `data` function in the script section.
*   **[Narration]:**
    "Now let's look at **Vue.js**. Vue is a progressive framework known for its gentle learning curve. Vue components are often defined in Single-File Components that neatly separate the template, logic, and styles."

    "The `<template>` section contains HTML-like syntax. Vue uses special attributes called **directives**, which start with `v-`, to add interactivity. For example, `v-on:click` handles a click event."

    "The component's state is managed in the `data` function within the `<script>` section. Vue's **reactivity** system automatically tracks changes to this data and updates the template whenever the data changes."

    **[Code Snippet - Display a simple Vue Counter]:**
    ```html
    <template>
      <div>
        <p>You clicked {{ count }} times</p>
        <button @click="increment">Click me</button>
      </div>
    </template>

    <script>
    export default {
      data() {
        return { count: 0 };
      },
      methods: {
        increment() {
          this.count++;
        }
      }
    }
    </script>
    ```

---

**[SCENE 5: Conclusion]**

*   **[Visuals]:**
    *   A split screen showing the React and Vue counter components side-by-side, highlighting their different approaches to syntax and state management.
    *   Show a title card for the next video: "Frontend Architecture & System Design".
*   **[Narration]:**
    "As you can see, both React and Vue solve the same problem—building component-based UIs—but with different philosophies. React is 'just JavaScript' with JSX, while Vue extends HTML with a more template-centric approach. Neither is universally 'better'; they are different tools for different tastes and projects."

    "Now that we understand the basics of components, we're ready to zoom out. In our next video, we'll enter Phase 3 and discuss higher-level concepts like Frontend Architecture and System Design, exploring how to manage state in large applications."

    "Thanks for watching. I encourage you to try building a simple component in both React and Vue to see which one you prefer."
