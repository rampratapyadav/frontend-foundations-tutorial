## Phase 2, Step 2: Integrate AI into Your Workflow

Integrating AI into your workflow is about *when* and *where* you use it to maximize your efficiency and impact. The key is to use AI for tasks it excels at, freeing you up for higher-level thinking, architecture, and problem-solving.

Think of AI as a highly capable, tireless assistant. Your job is to direct this assistant to perform specific, well-defined tasks.

---

### 1. Boilerplate Generation

*   **What AI Excels At:** Creating repetitive code structures, basic components, and file scaffolding.
*   **How to Use It:**
    *   "Generate a basic React functional component named `UserProfileCard` with props for `name` (string) and `email` (string). Include a simple `div` structure."
    *   "Create a new HTML file with a basic `head` and `body` structure, linked to `styles.css` and `app.js`."
    *   "Write the CSS for a responsive navigation bar using Flexbox, with a logo on the left and three menu items on the right."
*   **Your Role:** Review the generated code for correctness, adherence to project conventions, and semantic accuracy. Customize it to fit your specific needs.

---

### 2. Unit Test Generation

*   **What AI Excels At:** Writing test cases for functions, components, and utilities, especially for edge cases.
*   **How to Use It:**
    *   "Write Jest unit tests for the following TypeScript function that validates an email address: [paste function code]."
    *   "Generate React Testing Library tests for this `Button` component, covering click events, prop variations (primary, secondary), and accessibility attributes."
*   **Your Role:** Ensure the tests cover critical logic, edge cases you care about, and that they are actually testing what they claim to test. AI can sometimes generate "passing" tests that don't truly validate functionality.

---

### 3. Refactoring Code

*   **What AI Excels At:** Applying common refactoring patterns, improving readability, and optimizing for specific criteria.
*   **How to Use It:**
    *   "Refactor this JavaScript function to use `async/await` instead of `.then().catch()`."
    *   "Convert this class component to a functional component using React Hooks."
    *   "Make this CSS more concise by using shorthand properties where possible."
    *   "Improve the readability of this code snippet: [paste code]."
*   **Your Role:** Understand *why* the refactoring was suggested. Verify that the refactored code maintains its original functionality and doesn't introduce new bugs. Ensure it aligns with your team's coding style.

---

### 4. Debugging and Error Explanation

*   **What AI Excels At:** Explaining error messages, suggesting potential causes for bugs, and even proposing fixes.
*   **How to Use It:**
    *   "I'm getting this error in my React app: `TypeError: Cannot read properties of undefined (reading 'map')`. Here's the component code: [paste code]. What could be causing this?"
    *   "This JavaScript function isn't working as expected. It should do X, but it's doing Y. Here's the code: [paste code]. Can you help me debug it?"
*   **Your Role:** Provide clear context (error messages, relevant code, expected vs. actual behavior). Use AI's suggestions as starting points for your own investigation, not as definitive answers.

---

### 5. Documentation and Comments

*   **What AI Excels At:** Generating JSDoc comments, README files, and explanations for complex code.
*   **How to Use It:**
    *   "Write JSDoc comments for the following TypeScript function: [paste function code]."
    *   "Generate a README.md file for a simple frontend project that uses React, TypeScript, and Vite. Include sections for setup, running the app, and project structure."
    *   "Explain what this regular expression does: `/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/`."
*   **Your Role:** Review the generated documentation for accuracy, clarity, and completeness. Ensure it truly reflects the code's purpose and behavior.
