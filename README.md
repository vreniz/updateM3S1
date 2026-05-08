# 💻 ★⋆｡ °⋆     Interactive System  

> [!NOTE]
> Single-page user registration system featuring real-time age validation and local dynamic record management **Interactive Systems** Built with plain HTML, CSS, and vanilla JavaScript—no frameworks, build tools, or dependencies.

Live at: https://vreniz.github.io/updateM3S1/ </br>
vercel: https://update-m3-s1.vercel.app/

---
## Table of Contents
1. [Overview](#overview)
2. [Technologies Used](#technologies-used)
3. [Demo](#demo)
4. [Project Structure](#project-structure)
5. [Key Features](#key-features)
6. [Color Reference](#color-reference)
7. [How to Run](#-how-to-run)
---

## Overview

This interactive web-based user registration system, built with HTML, CSS, and JavaScript, functions as a single-page application (SPA) featuring modern dark-mode aesthetics with neon accents driven by CSS custom properties declared once in `:root` and referenced throughout the CSS styles. It enables users to input, validate, and manage user records via a dynamic table, implementing CRUD operations (Create, Read, Delete) and real-time DOM manipulation to update user counts and display status.

---

## 🛠️ Technologies Used

<img src="./assets/icons/html.svg" alt="HTML5 Icon" height="48"> &nbsp;
<img src="./assets/icons/css.svg" alt="CSS3 Icon" height="48"> &nbsp;
<img src="./assets/icons/javascript.svg" alt="JavaScript Icon" height="48">

- **HTML5** — Semantic structure.
- **CSS3** — Custom properties, Flex, CSS transitions, responsive design.
- **JavaScript ES6+** — Vanilla, no frameworks or libraries
- 🔤 [Google Fonts](https://fonts.google.com/) 

---

## DEMO

![Interactive System GIF Demo](assets/img/img.GIF)

---

## 📁 Project Structure

```bash
M3S1/
│
├── index.html          # 🏠 Main Interactive System page
├── interactive_sis.js  # ⚙️ JavaScript — Age validator, Temporary storage handling & CRUD dynamics
│
├── css/
│   └── styles.css      # 🎨 Main stylesheet 
│
├── assets/
│   ├── img/            # 🖼️  Project Demo
│   └── icons/          # 🔷 SVG tech stack
│
└── README.md           # 📖 You are here!
```

---

## Key Features 🚀


### 🧩 Interactive Data Entry via `prompt()`
Users input their **name** and **age** through native browser dialogs, keeping the interaction lightweight and dependency-free. Variables are declared with `const` and `let` — no `var` in sight.

```js
const userName = prompt("Welcome! What is your name?");
const userAge  = Number(prompt(`Hi!! ${userName} How old are you?`));
```

### ✅ Age Validation & Error Handling
The system checks that the age entered is a **valid positive integer** using `isNaN()`, `Number.isInteger()`, and a greater-than-zero guard. Invalid input triggers `console.error()` for developer feedback and a visible **toast notification** on screen — no silent failures.

```js
if (isNaN(userAge) || userAge <= 0 || !Number.isInteger(userAge)) {
  console.error("Error: Please enter a valid age in numbers.");
  showToast();
  return;
}
```

### 💬 Dynamic Conditional Messaging
After validation, an `if / else` block delivers a **personalized message** based on age:
- **Under 18** → encouraging message for young coders via `alert()` + `console.log()`
- **18 and over** → motivational message for adult users

```js
if (userAge < 18) {
  const mensajeMenor = `Hi ${userName}, you are a minor. Keep learning and enjoying coding!`;
  alert(mensajeMenor);
  console.log(mensajeMenor);
} else {
  const mensajeMayor = `Hi ${userName}, get ready for great opportunities in the world of programming!`;
  alert(mensajeMayor);
  console.log(mensajeMayor);
}
```

### 📋 Real-Time Table Management (CRUD)
Every registered user is stored in a **local `users` array** and rendered as a table row with auto-incremental ID, age category badge, status badge, and a delete button.

### 🗑️ Animated Row Deletion
Clicking **✕ Delete** triggers a CSS exit animation (`removing` class), then removes the row from the DOM and splices it from the `users` array after `300ms`.


### 🔢 Live User Counter
The header count updates automatically on every **add** and **delete** action, always reflecting the current number of registered users.


## Color Reference
All colors are defined once in `:root` as CSS custom properties and reused throughout — making the neon-on-dark theme consistent and easy to maintain.


| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| bg | ![#0a0a0f](https://dummyimage.com/15/0a0a0f/white?text=+) #0a0a0f |
| surface | ![#12121a](https://dummyimage.com/15/12121a/fff&text=+) #12121a |
| border | ![#2a2a3a](https://dummyimage.com/15/2a2a3a/white?text=+) #2a2a3a |
| accent | ![#7c3aed](https://dummyimage.com/15/7c3aed/white?text=+) #7c3aed |
| accent2 | ![#06b6d4](https://dummyimage.com/15/06b6d4/white?text=+) #06b6d4 |
| success | ![#10b981](https://dummyimage.com/15/10b981/white?text=+) #10b981 |
| error | ![#ef4444](https://dummyimage.com/15/ef4444/white?text=+) #ef4444 |
| text | ![#e2e8f0](https://dummyimage.com/15/e2e8f0/white?text=+) #e2e8f0 |
| muted | ![#64748b](https://dummyimage.com/15/64748b/white?text=+) #64748b |

---

## 🚀 How to Run

### Option 1 — Open directly in the browser

1. Clone or download the repository:

```bash
git clone https://github.com/vreniz/updateM3S1.git
```

2. Open the project folder and locate `index.html`.
3. Double-click the file or right-click → **"Open with browser"**.

### Option 2 — Live Server in VS Code ⚡ (Recommended)

1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension.
2. Open the project folder in VS Code.
3. Right-click `index.html` → **"Open with Live Server"**.

> The page reloads automatically on every file change. Best option for development.

> **Browser support:** All modern browsers (Chrome, Firefox, Safari, Edge). The CSS-only burger menu relies on the `:checked` sibling selector, which has full support across all current browsers.

---

## 👩🏻‍💻 Author

**Vanessa Fontalvo Reniz** <br>
**Systems & Computing Engineer** | Frontend Developer




