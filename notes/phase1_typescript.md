
# TypeScript Conversion: Revision Guide

This guide summarizes the key steps and concepts for converting a JavaScript project to TypeScript. This is a fundamental skill for building robust, scalable web applications.

---

### 1. Why Use TypeScript?

TypeScript is a **superset of JavaScript** that adds a **static type system**. This means we define the "type" of our variables, functions, and data structures.

**Core Benefits:**

*   **Catch Errors Early:** TypeScript flags type-related errors during development (in your editor) and at compile time, *before* the code ever runs in a browser.
*   **Improved Code Quality & Readability:** Types act as documentation, making it easier to understand what kind of data a function expects or returns.
*   **Better Autocomplete & Refactoring:** Your code editor can provide more intelligent suggestions and safely rename variables or functions across your project.

---

### 2. The TypeScript Workflow

The process is different from vanilla JavaScript. Instead of writing code that runs directly in the browser, you follow a **compile step**.

1.  **Write Code:** You write your code in `.ts` files located in a `src` (source) directory.
2.  **Compile Code:** You run a compiler (`tsc`) that reads your `.ts` files, checks for type errors, and converts them into standard `.js` files.
3.  **Run Code:** The browser runs the compiled `.js` files, which are typically placed in a `dist` (distribution) directory.

```
[Your .ts files in /src]  ->  (Run `npm run build`)  ->  [Browser-ready .js files in /dist]
```

---

### 3. Project Setup: The Key Files

To add TypeScript to a project, you need three key things:

#### a. `package.json`

*   **Purpose:** Manages your project's metadata and dependencies.
*   **Setup:** Run `npm init -y` to create it.
*   **Key Addition (Build Script):** We add a script to make compiling easy.

    ```json
    "scripts": {
      "build": "tsc"
    }
    ```
    Now you can simply run `npm run build` to compile.

#### b. TypeScript Dependency

*   **Purpose:** This is the actual TypeScript compiler.
*   **Setup:** Run `npm install --save-dev typescript`. It's a `dev` dependency because you only need it for development, not for the final running application.

#### c. `tsconfig.json`

*   **Purpose:** The most important file. It's the "rulebook" that tells the TypeScript compiler how to behave.
*   **Setup:** Create this file in the root of your project.
*   **Key Options to Memorize:**
    *   `"target": "ES2020"`: The version of JavaScript the compiler should output (ES2020 is a modern, safe choice).
    *   `"module": "ES2020"`: Specifies the module system for the output code (matches the target).
    *   `"strict": true`: Enables all strict type-checking options. **Always use this.** It's the main reason for using TypeScript.
    *   `"rootDir": "./src"`: Tells the compiler where to find your source `.ts` files.
    *   `"outDir": "./dist"`: Tells the compiler where to put the compiled `.js` files.
    *   `"include": ["src/**/*"]`: A pattern that specifies which files to compile.

---

### 4. Basic TypeScript Syntax

#### a. Defining Custom Types with `interface`

An `interface` is a contract that defines the shape of an object.

```typescript
// Defines the structure for a Project object
export interface Project {
    title: string;
    description: string;
    link: string;
}
```

#### b. Typing Variables and Arrays

Use a colon (`:`) after a variable name to assign it a type. Use `[]` to denote an array of that type.

```typescript
// This variable MUST be an array of Project objects
const projects: Project[] = [ /* ... */ ];
```

#### c. Typing DOM Elements with Type Assertion

TypeScript doesn't always know the specific type of an HTML element you select. We can tell it using the `as` keyword. This gives us better autocomplete and error checking.

```typescript
// We are asserting that this element is specifically an HTMLButtonElement
const themeSwitcher = document.getElementById('theme-switcher') as HTMLButtonElement;

// This element is a generic container
const projectsContainer = document.getElementById('projects-container') as HTMLDivElement;
```

---

### 5. Final HTML Update

Remember to update your `<script>` tag in `index.html` to point to the **compiled JavaScript file** in the `dist` directory, not your original TypeScript file.

```html
<!-- WRONG -->
<!-- <script type="module" src="src/app.ts"></script> -->

<!-- RIGHT -->
<script type="module" src="dist/app.js"></script>
```
