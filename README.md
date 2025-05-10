# Meiti UI

[![npm](https://img.shields.io/npm/v/meiti-ui.svg)](https://www.npmjs.com/package/meiti-ui)
[![GitHub](https://img.shields.io/github/stars/yourname/meiti-ui?style=social)](https://github.com/yourname/meiti-ui)

> ✨ Reusable React components built with Tailwind CSS and Toastify – lightweight, stylish, and easy to plug into any project.

---

## 🚀 Installation

```bash
npm install meiti-ui
```

Also install peer dependencies if you haven’t:

```bash
npm install react react-dom react-toastify
```

---

## 📦 Usage

```tsx
import React from 'react';
import { ReusableButton } from 'meiti-ui';
import 'meiti-ui/dist/styles.css'; // include Tailwind styles

function App() {
  return <ReusableButton title="Click Me" />;
}
```

---

## 🧩 Components

- ✅ `ReusableButton`: A styled button with integrated toast notification

---

## 🔧 Development Setup

```bash
git clone https://github.com/yourname/meiti-ui.git
cd meiti-ui
npm install
```

### Build the package

```bash
npm run build
```

### Link locally to another project (for testing)

```bash
npm link
# in your test project
npm link meiti-ui
```

---

## 🚢 Publish to NPM

1. Update the version in `package.json`
2. Run:

```bash
npm run build
npm publish --access public
```

---

## 📁 Project Structure

```
meiti-ui/
├── src/
│   ├── components/
│   │   └── ReusableButton.tsx
│   ├── styles/
│   │   └── tailwind.css
│   └── index.ts
├── dist/
├── tsconfig.json
├── tailwind.config.js
├── rollup.config.js
└── package.json
```

---

## 🧰 Tech Stack

- 🛠️ **React 18/19**
- 💨 **Tailwind CSS**
- 🔔 **React Toastify**
- 📦 **Rollup**
- 🧠 **TypeScript**

---

## 📄 License

MIT © [Meiti](https://github.com/yourname/meiti-ui)
