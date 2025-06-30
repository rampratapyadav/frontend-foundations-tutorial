## Accessibility (A11y) Revision Guide

Accessibility (A11y) ensures that your websites are usable by everyone, regardless of their abilities or the tools they use (e.g., screen readers, keyboard-only navigation).

---

### 1. Understanding Accessibility (A11y) Principles

The Web Content Accessibility Guidelines (WCAG) are the international standard for web accessibility, built on four main principles (POUR):

*   **Perceivable:** Information and user interface components must be presentable to users in ways they can perceive.
*   **Operable:** User interface components and navigation must be operable.
*   **Understandable:** Information and the operation of user interface must be understandable.
*   **Robust:** Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.

---

### 2. Semantic HTML for A11y

Using semantic HTML tags is the foundational step for accessibility. They provide meaning and structure to your content for assistive technologies.

*   `<html lang="en">`: Specifies the primary language of the document for correct pronunciation by screen readers.
*   `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`: Provide a clear document outline, allowing screen reader users to jump between major sections.
*   `<h1>` - `<h6>`: Proper heading structure is vital for navigation, as screen reader users often navigate by headings.

---

### 3. Keyboard Navigation and Focus Management

Many users rely solely on the keyboard for navigation. Ensure your site is fully navigable without a mouse.

*   **Focus Indicators:** Always ensure a clear visual indicator (outline) is present around the currently focused element when tabbing through the site. Avoid `outline: none;` in CSS unless a clear alternative is provided.
*   **Logical Tab Order:** Elements should be reachable in a logical order (typically left-to-right, top-to-bottom).

---

### 4. ARIA Attributes for Enhanced Accessibility

ARIA (Accessible Rich Internet Applications) attributes provide additional semantics to elements where native HTML is insufficient, especially for dynamic content or custom widgets.

*   **`aria-live="polite"`:** Used on a region of content that is updated dynamically. When the content within this region changes, screen readers will politely announce the change to the user without interrupting their current task.
    *   **Example:** Used for our theme status updates.

*   **`aria-label`:** Provides an accessible name for an element when its visual text content is not sufficient or is missing. It's read by screen readers instead of the visual text.
    *   **Example:** Used on our theme switcher button to clearly describe its purpose.

*   **`aria-hidden="true"`:** Hides an element and its children from the accessibility tree, meaning screen readers will ignore it. Useful for purely decorative elements or redundant text.
    *   **Example:** Used on the visible text of our theme switcher button, as the `aria-label` provides the full context.

*   **`visually-hidden` CSS class:** A common pattern to hide content visually while keeping it accessible to screen readers. This is achieved by positioning the element off-screen or making it tiny.

    ```css
    .visually-hidden {
        position: absolute;
        width: 1px;
        height: 1px;
        margin: -1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        border: 0;
    }
    ```

---

### 5. Testing Accessibility

Testing is crucial to ensure your accessibility efforts are effective.

*   **Manual Testing (Keyboard Navigation):** Navigate your entire site using only the `Tab` key (and `Shift + Tab` to go backward). Ensure all interactive elements are reachable and the focus indicator is visible.
*   **Automated Testing Tools:**
    *   **Lighthouse (Chrome DevTools):** Built-in tool that provides an accessibility score and suggestions.
    *   **axe DevTools (Browser Extension):** A powerful extension for finding common accessibility violations.
*   **Screen Reader Testing:** Use a screen reader (e.g., VoiceOver on macOS, NVDA on Windows) to experience your site as a visually impaired user would. Listen to how content is announced and if interactions are clear.
