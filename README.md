# Employee Management System (EMS)

A simple **Employee Management System** built with **React.js + Vite** and styled using **Tailwind CSS**.  
This project allows an **Admin** to create and assign tasks to employees, and each employee can view and track their tasks.

---

## 🚀 Features
- 🔑 **Login System** (Admin & Employees)
- 👨‍💼 **Admin Dashboard**:
  - Create new tasks and assign to employees
  - View all employees and their task progress
- 👩‍💻 **Employee Dashboard**:
  - View assigned tasks
  - Track status (New, Active, Completed, Failed)
- 📊 **Task Statistics Table** for employees
- 🌙 Dark Theme UI

---

## 🛠️ Tech Stack
- ⚛️ React.js (Vite)
- 🎨 Tailwind CSS
- 📦 LocalStorage (for saving users & tasks)

---

## 📂 Project Structure
src/
┣ components/
┃ ┣ Auth/ (Login)
┃ ┣ Dashboard/ (Admin & Employee dashboards)
┃ ┣ other/ (Task UI components)
┣ context/ (AuthProvider)
┣ utils/ (LocalStorage helpers)
┣ App.jsx
┣ index.css
┣ main.jsx




---

## ⚙️ Installation & Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/ems.git


2. Go to the project folder:

     cd ems


3. Install dependencies:

npm install


4. Run the development server:

npm run dev



🔑 Login Credentials
Admin

Email: admin@me.com

Password: 123

Employees (examples)

Email: e@e.com / employee2@example.com

Password: 123