📌 Project Title

Reminder Counter Application using ReactJS

🎯 Objective

The objective of this project is to build a ReactJS application that:

Displays a counter

Increments automatically at a fixed time interval

Shows a reminder message when a specific count is reached

Demonstrates timers and state management in React

📝 Project Description

The Reminder Counter is a ReactJS application that automatically increases a counter value using a timer (setInterval).

When the counter reaches a predefined limit, a reminder message is displayed to notify the user. After reaching the limit, the counter stops automatically.

This project helps understand:

React Hooks (useState, useEffect)

Timers in JavaScript

Conditional rendering

Cleanup of side effects

🛠 Technologies Used

Frontend: ReactJS

Build Tool: Vite / Create React App

Language: JavaScript (ES6+)

Styling: CSS

⚙ Functional Requirements

Display counter value

Automatically increment counter every second

Display reminder message when counter reaches limit

Stop counter after reminder triggers

📋 Non-Functional Requirements

Smooth UI updates

Clean and readable code

Proper timer cleanup

Responsive layout

📁 Project Folder Structure
reminder-counter/
│
├── src/
│   ├── components/
│   │   └── Counter.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
└── package.json

🚀 How to Run the Project
1️⃣ Create Project (Using Vite)
npm create vite@latest reminder-counter
cd counter
npm install
npm run dev

2️⃣ Replace Files

Replace the default files with the project source code.

🔄 How It Works

Counter starts from 0

setInterval() increases counter every second

When counter reaches the predefined limit (e.g., 10)

Reminder message is displayed

Timer stops automatically using clearInterval()

📸 Features

<img width="1895" height="909" alt="Screenshot 2026-02-14 114032" src="https://github.com/user-attachments/assets/245c3635-0d3b-4699-bee2-67974f9f99ac" />


✔ Automatic Counter
✔ Reminder Notification
✔ Timer Cleanup
✔ React Hooks Usage
✔ Clean UI


👩‍💻 Developed By

Dhara Parekh
