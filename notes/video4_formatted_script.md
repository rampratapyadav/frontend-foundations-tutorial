# Video Script: Accessibility (A11y) Fundamentals

**Video Title:** Accessibility (A11y) Fundamentals

**Video Duration:** ~10-12 minutes

---

**[SCENE 1: Introduction]**

*   **[Visuals]:**
    *   Start with a montage of diverse users interacting with the web: someone using a screen reader, an older person with low vision zooming in, a person using a keyboard to navigate, someone on a mobile device in bright sunlight.
    *   Title card: "Accessibility (A11y) Fundamentals: Building for Everyone"
*   **[Narration]:**
    "Welcome back. We've built a functional, beautiful, and interactive website. But is it usable by everyone? This is where **Accessibility**, often abbreviated as A11y, comes in."

    "Accessibility is the practice of making our websites usable by as many people as possible, regardless of their abilities. This includes people with visual, motor, auditory, or cognitive impairments. It's not a feature or an add-on; it's a fundamental part of building a professional and ethical web."

---

**[SCENE 2: The POUR Principles]**

*   **[Visuals]:**
    *   An animated graphic appears with four main quadrants, each one lighting up as it's discussed.
    *   Each quadrant has an icon and the principle name: **P**erceivable, **O**perable, **U**nderstandable, **R**obust.
*   **[Narration]:**
    "The international standard for web accessibility, WCAG, is built on four core principles, remembered by the acronym **POUR**."

    "First, **Perceivable**. Users must be able to perceive the information being presented. For example, providing `alt` text for images allows a screen reader to describe the image to a visually impaired user."

    "Second, **Operable**. Users must be able to operate the interface. This means ensuring all functionality is available from a keyboard, not just a mouse."

    "Third, **Understandable**. The information and the operation of the interface must be clear and predictable. This means using simple language and consistent navigation."

    "And finally, **Robust**. Your content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies. This starts with writing valid, semantic HTML."

---

**[SCENE 3: Practical A11y in Our Project]**

*   **[Visuals]:**
    *   Switch to the code editor and the live portfolio site.
    *   **Semantic HTML:** Highlight the `<header>`, `<main>`, `<nav>` tags in the code.
    *   **Keyboard Navigation:** Show a user tabbing through the site. The focus indicator (`outline`) is clearly visible on the links and the theme switcher button.
    *   **ARIA:** Focus on the theme switcher button in the HTML.
*   **[Narration]:**
    "Let's see how we've already applied some of these principles in our project."

    "First, we used **Semantic HTML**. As we learned in video one, this is the foundation. Using `<nav>` for navigation and `<main>` for the main content gives assistive technologies immediate context."

    "Next, **Keyboard Navigation**. Notice how I can navigate the entire site using only the Tab key. Every interactive element, like links and buttons, receives a clear visual focus state. Never remove the default focus outline without providing a better alternative."

    "Finally, let's look at our theme switcher. We've used a few **ARIA** attributes to enhance its accessibility."

    **[Code Snippet - Type/Display]:**
    ```html
    <button id="theme-switcher" aria-label="Toggle dark mode">
      <span aria-hidden="true">Switch Theme</span>
    </button>
    <span id="theme-status" class="visually-hidden" aria-live="polite"></span>
    ```
    **[Narration]:**
    "`aria-label` gives the button a clear, descriptive name for screen readers, even if the visible text is short. We also have a visually hidden `span` with `aria-live="polite"`. When we change the theme, we'll use JavaScript to add text here, like 'Theme changed to dark'. The `aria-live` attribute tells a screen reader to announce this change to the user without interrupting them."

---

**[SCENE 4: Color Contrast]**

*   **[Visuals]:**
    *   Show the portfolio in both light and dark themes.
    *   Open the browser's developer tools and use the color picker to show the contrast ratio between the text and background colors.
    *   Display a "Pass" checkmark from the contrast tool.
    *   Show a "Fail" example with light grey text on a white background.
*   **[Narration]:**
    "Another critical aspect of accessibility is **Color Contrast**. Text must have sufficient contrast against its background to be readable, especially for users with low vision."

    "The WCAG guidelines recommend a contrast ratio of at least 4.5 to 1 for normal text. We can easily check this right in the browser's developer tools."

    "You can see that our primary text and background colors pass the test in both our light and dark themes. Failing to meet this standard can make your site completely unreadable for a large portion of users."

---

**[SCENE 5: Conclusion]**

*   **[Visuals]:**
    *   Show the portfolio page being used by a diverse set of animated user personas.
    *   Recap the key concepts with text overlays: "Semantic HTML", "Keyboard Navigation", "ARIA", "Color Contrast".
    *   Show a title card for the next video: "Git & GitHub for Beginners".
*   **[Narration]:**
    "Building accessible websites is our responsibility as developers. It ensures that the web remains an open and inclusive space for everyone. Always think about semantics, keyboard navigation, ARIA when needed, and color contrast."

    "In our next video, we'll switch gears and learn about an essential tool for collaboration and version control that every developer needs to know: Git and GitHub."

    "Thanks for watching. Let's commit to building a more accessible web together."
