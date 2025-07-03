# Phase 2, Step 1: Mastering a Core Framework - React

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components.”

This guide covers the foundational concepts of React, assuming you have a solid grasp of HTML, CSS, and modern JavaScript.

---

### 1. Core Concepts of React

#### a. Component-Based Architecture

Everything in React is a component. A component is a self-contained, reusable piece of UI. You can think of them like custom HTML tags. For example, you could have `<Navbar>`, `<UserProfile>`, and `<Button>` components.

We will focus on **Functional Components**, which are the modern standard.

#### b. JSX (JavaScript XML)

JSX is a syntax extension for JavaScript that looks very similar to HTML. It allows you to write what your components should look like in a descriptive and intuitive way. The browser doesn't understand JSX, so it gets compiled into regular JavaScript by tools like Vite or Create React App.

**Example:**

```jsx
// This is JSX
const element = <h1>Hello, world!</h1>;

// It gets compiled to this JavaScript
const element = React.createElement('h1', null, 'Hello, world!');
```

#### c. Props (Properties)

Props are how you pass data from a parent component to a child component. They are read-only, meaning a component can never modify its own props.

**Example:**

```jsx
// Parent Component
function App() {
  return <Greeting name="Alice" />;
}

// Child Component
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

#### d. State and the `useState` Hook

State is data that a component manages internally. Unlike props, state can change over time, typically in response to user actions. When a component's state changes, React automatically re-renders the component to reflect the new state.

The `useState` hook is the primary way to add state to a functional component.

**Example:**

```jsx
import React, { useState } from 'react';

function Counter() {
  // `count` is the state variable, `setCount` is the function to update it.
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

### 2. Setting Up a React Project

The easiest way to start a new React project is with a tool like **Vite**.

**Command to create a new React project with TypeScript:**

```bash
npm create vite@latest my-react-app -- --template react-ts
```

This command will scaffold a new project in the `my-react-app` directory with all the necessary files and configurations to get started immediately.

**To run the development server:**

```bash
cd my-react-app
npm install
npm run dev
```

---

### 3. Building a Simple React Component

Let's combine these concepts into a practical example. Here is a simple `ProjectCard` component.

**File: `src/components/ProjectCard.tsx`**

```tsx
import React from 'react';

// Define the shape of the props using a TypeScript interface
interface ProjectCardProps {
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description }) => {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <a href="#">View Project</a>
    </div>
  );
};

export default ProjectCard;
```

**How to use it in `src/App.tsx`:**

```tsx
import React from 'react';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <div className="app">
      <h1>My Projects</h1>
      <ProjectCard 
        title="My First Project"
        description="This is a cool project I built with React."
      />
      <ProjectCard 
        title="Another Project"
        description="This one was even more fun to make."
      />
    </div>
  );
}

export default App;
```
