WhatRu? 🌟

A simple, modern social feed for sharing what you're doing — right now.

🖼️ Overview

whatRu? is a sleek and minimal social feed app built with React and Tailwind CSS.
It's inspired by the idea of capturing the present moment — whether you're reading, listening, working on something, or just doing life.

This project is part of my journey to learn React and Tailwind CSS.
I'm building whatRu? to strengthen my understanding of component-based design, state management, and responsive UI styling while creating something fun and real.

📅 Development Progress

Day 1 ✅ COMPLETED
- Set up project structure with Vite + React + Tailwind CSS
- Created header with app name and "Share" button
- Built CreatePost modal component with form inputs
- Created README and initialized GitHub repository

Day 2 ✅ COMPLETED
- Designed filter buttons for categories (All, Reading, Listening, Working on, Doing)
- Added filter state management and conditional styling
- Created mockPosts.json with sample data
- Built PostCard component to display individual posts
- Implemented filtering functionality - posts filter by category
- Fixed import issues and made the app fully functional

Day 3 ✅ COMPLETED
- Made CreatePost form functional (add new posts to feed)
- Fixed modal closing (no page reload, smooth transitions)
- Added username capture and display
- Posts now display with username, title, content, category, and timestamp
- New posts appear at the top of the feed

**What I Learned Today:**
- Controlled input components (value + onChange)
- Lifting state up between parent and child components
- Passing functions as props
- Form submission with preventDefault()
- Updating arrays in state (adding items to beginning with spread operator)

 Day 4 - Dark Mode Implementation ✅ COMPLETED
- Theme toggle component with sun/moon icons
- Full dark mode support across entire application
- Smooth transitions between light and dark themes
- Dark mode styling for all components:
  - CurrentlyBoard (main layout, header, filters)
  - PostCard (individual post cards)
  - CreatePost (modal form)
  - ThemeToggle (toggle button itself)

**What I Learned:**
* Tailwind CSS dark mode configuration (`darkMode: 'class'`)
* Lifting state up to App level for global theme control
* Passing props down through component hierarchy
* Using conditional classes for theme switching
* Applying `dark:` variants to style elements differently in dark mode
* Managing theme state with useState
* Props destructuring in React components

---

### Day 5 (Tomorrow) - Interactive Features
**Planned Features:**
* Add like/unlike functionality to posts ❤️
* Add comments section (display and add comments)
* Sort posts by newest first

**What I'll Learn Tomorrow:**
* Updating nested state structures
* Finding and modifying specific items in arrays
* Rendering dynamic lists with nested data
* Building more complex component interactions
* State management with multiple levels of data

## 🎨 Color Palette

**Light Mode:**
* Background: Slate gradients (50-200)
* Cards: White with subtle shadows
* Primary: Red-800
* Text: Gray-900, Gray-700, Gray-500

**Dark Mode:**
* Background: Gray gradients (900-800)
* Cards: Gray-800 with darker shadows
* Primary: Red-400
* Text: White, Gray-300, Gray-400

---

🧩 Tech Stack
Technology | Purpose
--- | ---
React | UI & component architecture
Tailwind CSS | Styling and responsive layout
lucide-react | Icons
React Hooks | State management (useState)
Vite | Build tool and dev server

🪄 Design Overview
- Header: Sticky top bar with the app name "WhatRU", tagline, and share button
- Filter Pills: Interactive buttons to filter posts by category
- Feed: Scrollable grid of posts displayed as white cards with soft shadows
- Modal: Clean form to share a new post with inputs for username, category, title, and content
- Post Card: Displays username, timestamp, content, category icon, and like/comment buttons


## ✨ Current Features

* **Live Feed**: View posts from people sharing what they're currently doing
* **Create Posts**: Add your own "currently" moment via a clean modal form with your name, category, title, and description
* **Filter by Category**: Choose between Reading, Listening, Working On, or Doing
* **Dark Mode**: Toggle between light and dark themes with smooth transitions
* **Beautiful UI**: Soft gradients, smooth transitions, and a clean modern look
* **Responsive Design**: Optimized for both mobile and desktop layouts

---

## 🚀 Future Features

### Near Term
* Like/unlike functionality
* Comments section
* Edit post functionality
* User profiles (click on username to see all their posts)
* Search functionality to find posts
* Share/copy post link

### Mid Term
* Delete post functionality
* Relative timestamp formatting (e.g., "5m ago")
* Post validation (prevent empty posts)
* Empty state when no posts match filter
* Smooth animations and transitions
* Improved mobile responsiveness
* Keyboard shortcuts
* Post reactions (beyond just likes)

### Long Term
* Follow users
* Notification system for likes/comments
* Drafts (save posts before publishing)
* User authentication (Supabase or Firebase)
* Backend integration for persistent posts
* Image or link attachments in posts

---

🎯 Learning Goals
This project helps me practice:
- Building reusable React components
- Managing state using useState
- Lifting state up between components
- Designing clean layouts with Tailwind CSS
- Working with icons using lucide-react
- Creating responsive and mobile-friendly designs
- Adding interactivity (modals, filters, forms)
- Controlled input components
- Passing functions as props
- Structuring React projects in a maintainable way
- Building UI that feels smooth and engaging

---


👩‍💻 Author

Sussana Teye

Frontend & AI Engineer in progress

Currently learning React and Tailwind CSS through hands-on projects.

GitHub
LinkedIn

🚀 Getting Started
1. Clone the repository
```
git clone https://github.com/Sussana7/whatRu.git
cd whatRu
npm install
npm run dev
```

📜 License
This project is open-source and available under the MIT License.
