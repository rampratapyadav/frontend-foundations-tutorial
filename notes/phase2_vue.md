# Phase 2, Step 1: Mastering a Core Framework - Vue.js

Vue.js is a progressive and approachable JavaScript framework for building user interfaces. It's known for its gentle learning curve and excellent documentation. Vue is designed to be incrementally adoptable, allowing you to use it for small parts of a project or for a full-scale single-page application.

This guide covers the foundational concepts of Vue using the modern **Composition API**.

---

### 1. Core Concepts of Vue

#### a. Single-File Components (SFCs)

Vue projects are organized into Single-File Components (SFCs) with a `.vue` extension. Each file cleanly separates the component's template, logic, and styling.

*   `<template>`: The HTML structure.
*   `<script setup>`: The component's logic (JavaScript/TypeScript).
*   `<style scoped>`: The component's CSS, which is automatically scoped to the component.

#### b. Template Syntax & Reactivity

Vue uses an HTML-based template syntax. You can use the `ref` function to create a reactive variable. When the variable's `.value` changes in the script, the HTML automatically updates.

**Example:**

```vue
// In <script setup>
import { ref } from 'vue'
const count = ref(0)

// In <template>
<button>You clicked {{ count }} times</button>
```

#### c. Props (Properties)

Props are used to pass data from a parent component to a child. The child component declares the props it expects to receive using `defineProps`.

**Example:**

```vue
// Child component (Greeting.vue)
<script setup>
  defineProps({ name: String })
</script>

<template>
  <p>Hello, {{ name }}!</p>
</template>

// Parent component (App.vue)
<template>
  <Greeting name="Vue" />
</template>
```

#### d. Event Handling

Use the `v-on` directive, or its shorthand `@`, to listen for DOM events.

**Example:**

```vue
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="count++">
    Count is: {{ count }}
  </button>
</template>
```

---

### 2. Setting Up a Vue Project

The recommended way to start a new Vue project is with **Vite**.

**Command to create a new Vue project with TypeScript:**

```bash
npm create vue@latest my-vue-app -- --ts
```

This command will guide you through a few options and create a new project in the `my-vue-app` directory.

**To run the development server:**

```bash
cd my-vue-app
npm install
npm run dev
```

---

### 3. Building a Simple Vue Component

Let's combine these concepts into a `ProjectCard.vue` component.

**File: `src/components/ProjectCard.vue`**

```vue
<script setup lang="ts">
defineProps({
  title: String,
  description: String
})
</script>

<template>
  <div class="project-card">
    <h2>{{ title }}</h2>
    <p>{{ description }}</p>
    <a href="#">View Project</a>
  </div>
</template>

<style scoped>
.project-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem 0;
}
</style>
```

**How to use it in `src/App.vue`:**

```vue
<script setup lang="ts">
import ProjectCard from './components/ProjectCard.vue'
</script>

<template>
  <div id="app">
    <h1>My Projects</h1>
    <ProjectCard 
      title="My First Vue Project"
      description="This is a cool project I built with Vue."
    />
    <ProjectCard 
      title="Another Vue Project"
      description="This one was even more fun to make."
    />
  </div>
</template>
```
