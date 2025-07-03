# Phase 2, Step 2: Learn Prompt Engineering for Code

Prompt engineering is the art and science of crafting effective inputs (prompts) to get the desired output from an AI model. When it comes to coding, a well-structured prompt can save you hours of work, while a vague one will lead to frustration and unusable code.

The goal is to move from being a simple "code generator" to a "code director." You provide the vision and constraints; the AI provides the implementation.

---

### Core Principles of Effective Prompting

#### 1. Be Specific and Detailed

Vague prompts lead to vague results. The more context and detail you provide, the better the AI can understand your intent.

*   **Bad Prompt:** "Make a JavaScript function to sort an array."
*   **Good Prompt:** "Write a TypeScript function named `sortUsersByAge` that takes an array of `User` objects (where `User` has `id: number`, `name: string`, `age: number`). The function should sort the array in ascending order by age and return the sorted array. Do not mutate the original array."

#### 2. Define the Persona or Role

Tell the AI to act as an expert in a specific field. This primes the model to use the appropriate terminology, patterns, and best practices.

*   **Example:** "Act as a senior frontend developer specializing in accessibility. I need you to review this React component and identify any potential accessibility issues. Suggest improvements using ARIA attributes and semantic HTML."

#### 3. Provide Context and Constraints

Give the AI the surrounding code, data structures, or rules it needs to follow.

*   **Example:** "Given the following TypeScript interface for `Product`:
    ```typescript
    interface Product {
      id: string;
      name: string;
      price: number;
      inStock: boolean;
    }
    ```
    Generate a React component called `ProductCard` that displays the product's name and price. If `inStock` is false, the component should have a 'Sold Out' badge and the 'Add to Cart' button should be disabled."

#### 4. Use Examples (Few-Shot Prompting)

Show the AI exactly what you want by providing one or more examples of the input and desired output. This is one of the most powerful techniques.

*   **Example:** "I need to convert user profile objects from our API to a client-side format.
    *   **Input:** `{ "user_id": 123, "fullName": "John Doe", "emailAddress": "john.doe@example.com" }`
    *   **Output:** `{ "id": 123, "name": "John Doe", "email": "john.doe@example.com" }`

    Now, convert the following object in the same way:
    *   **Input:** `{ "user_id": 456, "fullName": "Jane Smith", "emailAddress": "jane.smith@example.com" }`"

#### 5. Iterate and Refine

Your first prompt might not be perfect. Think of it as a conversation. If the AI's output isn't quite right, provide feedback and ask for refinements.

*   **Initial Prompt:** "Create a CSS class for a primary button."
*   **Follow-up:** "That's a good start. Can you add a hover and focus state? The hover state should slightly darken the background color, and the focus state should have a 2px solid blue outline."

---

### Practical Application: The "Recipe" for a Great Code Prompt

Combine the principles above into a repeatable recipe:

1.  **Role:** "Act as a senior software engineer..."
2.  **Task:** "...write a function that..."
3.  **Context:** "...takes these arguments `(arg1: type, arg2: type)`..."
4.  **Constraints:** "...it must not use external libraries..."
5.  **Format:** "...the output should be a single TypeScript function with JSDoc comments."
6.  **Example (Optional but Recommended):** "For example, if the input is `X`, the output should be `Y`."

By following this structured approach, you can direct AI to generate code that is more accurate, reliable, and aligned with your project's requirements from the very first attempt.
