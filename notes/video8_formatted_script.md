# Video Script: Prompt Engineering for Code

**Video Title:** Prompt Engineering for Code

**Video Duration:** ~10-12 minutes

---

**[SCENE 1: Introduction]**

*   **[Visuals]:**
    *   An animation showing a developer typing a vague prompt ("make a button") into an AI chat, which results in a generic, unstyled button.
    *   The developer then types a very specific, detailed prompt, which results in a perfectly styled, accessible, and functional React component.
    *   Title card: "Prompt Engineering for Code: Getting What You Want from AI"
*   **[Narration]:**
    "Welcome back. In our last video, we saw how AI can be a powerful co-pilot. But you may have noticed that sometimes the AI gives you exactly what you want, and other times it gives you something completely useless. The difference is almost always the quality of your prompt."

    "**Prompt Engineering** is the art and science of crafting your requests to an AI to get the most accurate, relevant, and high-quality results. In this video, we'll learn the anatomy of a perfect code prompt."

---

**[SCENE 2: The Anatomy of a Perfect Prompt]**

*   **[Visuals]:**
    *   A graphic appears on screen, showing a box labeled "The Perfect Prompt" which is made up of five smaller, color-coded building blocks.
    *   Each block is highlighted as it's discussed: 1. Role & Goal, 2. Task & Action, 3. Context & Constraints, 4. Format & Structure, 5. Examples.
*   **[Narration]:**
    "A great prompt is like a detailed spec sheet for the AI. It leaves nothing to chance. It should contain five key elements."

    "First, **Role and Goal**. Start by telling the AI what its role is. For example, 'You are an expert frontend developer specializing in accessible web components.' This sets the context."

    "Second, **Task and Action**. Clearly state what you want it to do. Use action verbs like 'Write', 'Create', 'Refactor', or 'Explain'."

    "Third, and this is the most critical part, **Context and Constraints**. Tell the AI your technology stack, provide existing code or type definitions, and specify any constraints, like libraries to avoid."

    "Fourth, **Format and Structure**. Specify the output format you want. 'Return only the function code with no explanatory text,' or 'Provide the output as a single HTML file.'"

    "And fifth, the most powerful technique, **Examples**. Provide an example of the input and the desired output. This is called 'few-shot prompting' and it clarifies your intent better than any description."

---

**[SCENE 3: From Bad to Great: A Practical Example]**

*   **[Visuals]:**
    *   Show a split screen. On the left, a "Bad Prompt" is shown, and on the right, the resulting low-quality code.
    *   The scene transitions to an "Okay Prompt" with slightly better results.
    *   Finally, a "Great Prompt" is shown, incorporating all five elements, resulting in perfect, production-quality code.
*   **[Narration]:**
    "Let's make this concrete. Imagine we need a function to convert an array of objects to an object, keyed by the object's `id`."

    "A **bad prompt** would be: 'write a function that converts an array to an object'. This is too vague. The AI has to guess what you mean, and it will probably guess wrong."

    "An **okay prompt** might be: 'write a javascript function that takes an array of objects and converts it to an object, using the id property as the key.' This is better, but it still lacks crucial context."

    "Now, look at a **great prompt**."

    **[Code Snippet - Display the "Great Prompt"]**
    ```
    You are an expert TypeScript developer.

    Task: Write a function named `arrayToObject` that converts an array of objects into an object, using a specified property of the objects as the key.

    Constraints: The function must be generic, written in TypeScript, and handle empty arrays gracefully. Do not use any external libraries.

    Example:
    Input: `const users = [{ id: 'a', name: 'Alice' }];`
    Output: `{ 'a': { id: 'a', name: 'Alice' } }`

    Format: Provide only the TypeScript function, with JSDoc comments.
    ```
    **[Narration]:**
    "See the difference? We gave it a role, a clear task, specific constraints, a concrete example, and a desired format. This leaves no room for ambiguity and ensures we get high-quality, production-ready code."

---

**[SCENE 4: Conclusion]**

*   **[Visuals]:**
    *   A summary graphic showing the five elements of a perfect prompt.
    *   Show a title card for the next video: "Intro to a Core Framework (React & Vue)".
*   **[Narration]:**
    "The quality of your AI's output is a direct reflection of the quality of your input. Mastering prompt engineering is a new, essential skill for developers. Always remember to provide role, task, context, format, and examples."

    "In our next video, we'll take our foundational skills and apply them to one of the most popular frontend frameworks in the world as we get a high-level introduction to React and Vue."

    "Thanks for watching. Practice writing detailed prompts and see how much better your AI-generated code becomes."
