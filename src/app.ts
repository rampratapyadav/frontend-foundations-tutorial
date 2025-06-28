
// Import project data
import { projects, Project } from './projects.js';

// DOM Elements
const themeSwitcher = document.getElementById('theme-switcher') as HTMLButtonElement;
const projectsContainer = document.getElementById('projects-container') as HTMLDivElement;

// --- Theme Switcher ---
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
});

themeSwitcher.addEventListener('click', () => {
    let currentTheme = document.documentElement.getAttribute('data-theme');
    let newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

// --- Load Projects ---
function loadProjects() {
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        const title = document.createElement('h3');
        title.textContent = project.title;

        const description = document.createElement('p');
        description.textContent = project.description;

        const link = document.createElement('a');
        link.href = project.link;
        link.textContent = 'View Project';
        link.target = '_blank'; // Open in new tab

        projectCard.appendChild(title);
        projectCard.appendChild(description);
        projectCard.appendChild(link);

        projectsContainer.appendChild(projectCard);
    });
}

// Initial Load
loadProjects();
