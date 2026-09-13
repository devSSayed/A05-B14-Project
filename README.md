# 🚀 Assignment 05 - B14 - DevStack React Project

## 📌 Description

DevStack is web app built to help developers browse, filter, and organize their tech stacks in one place. You can easily check out different tools, filter through categories, and build your own custom stack list in real time.

---

## 🛠️ Technology that I use

1. ⚛️ React
2. 📘 TypeScript
3. 🎨 Tailwind CSS
4. 🌐 Html

---

## ✨ 3 Features About My Project

### 📌 1. Sticky Navigation Bar

The header stays pinned to the top with a cool backdrop blur effect as you scroll.

### 📱 2. Fully Responsive Design

Adapts smoothly across all screen sizes. It might not be 100% professional yet, but since this is my first time building a responsive app, I'm super proud of how it turned out!

### 🧩 3. Dynamic Stack Builder

Real-time stack management where you can add or remove technologies on the fly.

---

# ⚛️ Answering The React Questions

### 1️⃣ What is JSX, and why is it used in React?

JSX is a syntax extension for JavaScript, JSX stands for JavaScript XML. JSX used primarily in React. It allows to write HTML elements directly inside your JavaScript/TypeScript code. SX is used in React because it lets you write UI components faster, cleaner, and with fewer bugs by keeping your HTML like structure directly alongside your JavaScript logic.

---

### 2️⃣ What is the difference between props and state?

The difference between Props and State is Props pass data down from a parent component, while State manages data inside the component that can change over time.

---

### 3️⃣ What does the useState hook do, and where did you use it in this project?

useState manages data inside the component that can change over time and I used useState in the main technology cards section so users can dynamically add or delete technologies from their stack.

---

### 4️⃣ What does the useEffect hook do, and why did you need it to load the JSON data?

useEffect is a React Hook that lets your component run side effects, code that interacts with the outside world beyond just rendering HTML on the screen. I needed useEffect to load the JSON data because reading external files or making data requests takes time, and React needs a way to fetch that data after the component first shows up on the screen without causing infinite loops.

---

### 5️⃣ Why does every item in a .map() list need a unique key prop?

React requires a unique key prop for items rendered in a .map() list so it can track each item's identity across re-renders.

---

### 6️⃣ What is conditional rendering? Show one place you used it (example: the empty stack message)

Conditional rendering is showing or hiding specific UI components based on user interaction, like updating what displays when a button is clicked. For example, I used conditional rendering on the main technology card buttons to dynamically change their action and appearance when selected.

---

### 7️⃣ How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

The parent passes data down to the child using props and A child cannot directly send data up to a parent. Instead, the parent passes a callback function (AKA lifting state up) down as a prop. When the child triggers that function (like on a button click), it passes the data back as an argument to the parent.
