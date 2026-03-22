# Technical Portfolio Website

A high-precision, craftsman-grade personal portfolio website built with a focus on technical excellence and minimal, robust design. This project bridges the gap between physical engineering aesthetics and modern web standards.

## Technical Stack

- **Structure**: Semantic HTML5
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Custom CDN Configuration)
- **Logic**: Vanilla JavaScript (ES6+)
- **Typography**: [Google Fonts](https://fonts.google.com/) (Newsreader, Space Grotesk)
- **Iconography**: [Google Material Symbols](https://fonts.google.com/icons)

## Core Features

### Dynamic Theme Engine

A class-based dark/light mode system that persists across sessions. The transition is governed by CSS variables, ensuring smooth color shifts for every UI element.

### Bento-Style Portfolio

A responsive grid-based layout for showcasing projects with varying dimensions and importance, optimized for all viewport sizes.

### Technical Cursor

A custom JavaScript-driven cursor element that provides precise visual feedback during interactions, reinforcing the technical theme of the site.

### Responsive Architecture

Built with a mobile-first approach using Tailwind's flexible grid and flexbox utilities. Includes a custom-animated mobile navigation system.

## Architecture & Implementation

### Custom Tailwind Configuration

The project utilizes a deeply customized Tailwind configuration defined in-line, featuring:

- **Custom Color Tokens**: Mapped to CSS variables for dynamic theme support.
- **Specialized Typography**: Headline, body, and label fonts with specific tracking and leading.
- **Glassmorphism**: Extensive use of `backdrop-blur` and semi-transparent surface containers.

### Static Performance

Designed as a high-performance static site, the architecture is optimized for zero-overhead deployment on platforms like GitHub Pages.

## Local Development

To view the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/JJohnJones/PortfolioWebsite.git
   ```
2. **Open `index.html`**:
   Simply open the file in your preferred browser, or use a local development server like VS Code's "Live Server" for the best experience.

## Project Structure

```text
├── index.html      # Main landing page & design system
├── contact.html    # Specialized contact interface
├── style.css       # Core design tokens and custom animations
├── script.js       # Interaction logic (theme, cursor, menu)
├── images/         # Project & profile assets
└── media/          # Downloadable documents (PDFs)
```
