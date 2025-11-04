# To-Do Application

Hi, I’m **Vinayak Gupta**, a self-taught web developer. This To-Do Application is a polished, mobile-responsive project built with **vanilla HTML, CSS, and JavaScript** as proof of hands‑on learning, problem solving, and UI thinking. It’s designed to be lightweight, fast, and demo‑ready for recruiters.

## Live Demo
Add a GitHub Pages link here after deploying.

## Highlights
- **100% Vanilla JavaScript** — no frameworks, no libraries.
- **Core features**: add, edit, complete, delete tasks; persistent storage using localStorage; responsive UI; keyboard accessibility.
- **Polished UI**: custom animations, accessible colors, task counters and filters (All / Active / Completed).
- **Testable and deployable**: simple CI for linting and GitHub Pages deployment.

## Quick Stats Example
> Replace the example numbers with real values from your repo (lines, commits, hours) for authenticity.

| Metric | Value |
|---|---|
| Files | 3 (index.html, style.css, app.js) |
| Approx Lines of Code | 420 |
| Commits | 34 |
| Time Invested | 25 hours |
| Features Implemented | 12 |
| Bugs Fixed | 18 |

## Tech Stack
- **HTML5**, **CSS3**, **JavaScript (ES6)**
- Optional: GitHub Pages for hosting

## Install and Run Locally
1. Clone repository  
   git clone https://github.com/MrVinayakGupta/To-Do-application.git
2. Open index.html in browser or serve with a static server  
   npx http-server ./To-Do-application -p 8080

## Screenshots and GIF
Add a screenshot and a short GIF (3–8s) showing: add task, mark complete, delete, and localStorage persistence. GIFs increase recruiter engagement dramatically.

---

### Concrete Improvements to Make It Stand Out

1. Visual polish
   - Add subtle hover and focus states, micro-animations for adding/removing tasks, and an animated empty-state illustration.
   - Use CSS variables for a theme and provide a Dark Mode toggle.

2. Persistence and real UX
   - Use localStorage for persistence and show a “Saved” toast when tasks change.
   - Autosave edits and debounce user input.

3. Accessibility
   - Add ARIA attributes for task list and buttons.
   - Ensure keyboard navigation: Enter to add, Esc to cancel, Arrow keys to move focus.

4. Task metadata
   - Add *created date*, *due date*, *priority tags* and show counts: overdue, due today, completed.
   - Allow sorting and filtering (priority, due date).

5. Analytics and Metrics
   - Track simple metrics in localStorage: total tasks created, tasks completed, average completion time.
   - Display these metrics on a dashboard card in README as real numbers.

6. Deploy and CI
   - Deploy via GitHub Pages for a live demo.
   - Add a GitHub Action for linting (ESLint) and a workflow that deploys to Pages on push to main.

7. README upgrades
   - Add badges: build status, GitHub Pages, lines of code, license, contributors.
   - Include a short 6–8 second GIF and 3 focal screenshots (desktop, mobile, feature).

8. Code quality
   - Modularize JS: separate DOM helpers, storage helpers, and UI rendering.
   - Add comments and a small unit test for core logic (e.g., task filtering) using a simple test runner.

---

### Ready Snippets You Can Drop In

#### localStorage helper
```javascript
const STORAGE_KEY = 'vinayak-todo-v1';
function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
function loadTasks() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
  catch { return []; }
}
```

#### Format duration metric example
```javascript
function formatPercent(part, total) {
  return total === 0 ? '0%' : Math.round((part/total)*100) + '%';
}
```

#### Dark mode toggle CSS quick
```css
:root { --bg: #fff; --text: #111; --accent: #4f46e5; }
[data-theme='dark'] { --bg: #0b1221; --text: #e6eef8; --accent: #7c3aed; }
body { background: var(--bg); color: var(--text); }
```

#### GitHub Pages deploy step (README instruction)
1. In repo Settings → Pages select branch `main` and folder `/ (root)` to publish.
2. Add link in README once live.

#### GitHub Action example for linting and deploy
- Add a workflow that runs ESLint on push and optionally builds (if you add bundling). (Search for “GitHub Action ESLint template” and paste it into .github/workflows/lint.yml)

---

### Badges and Copy for README Top
- Shields examples to paste (replace URL parts):
  - Build: https://img.shields.io/badge/build-passing-brightgreen
  - Pages: https://img.shields.io/badge/demo-GitHub%20Pages-blue
  - Language: https://img.shields.io/github/languages/top/MrVinayakGupta/To-Do-application
  - Stars: https://img.shields.io/github/stars/MrVinayakGupta/To-Do-application?style=social

Markdown example:
```markdown
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Demo](https://img.shields.io/badge/demo-GitHub%20Pages-blue)
![Top Lang](https://img.shields.io/github/languages/top/MrVinayakGupta/To-Do-application)
```

---

### Visual and Presentation Tips Recruiters Love
- Hero GIF at top (3–6s) showing add, complete, delete, and persistence.
- Short bullet list of impact: “Reduced daily task clutter by 30% for test users” — only include numbers you can justify or replace with “example metric”.
- A one-minute video walkthrough pinned in README or as a repo Release.

---
