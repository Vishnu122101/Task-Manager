Got it. Here’s your cleaned-up README version with --no stars, no emojis, no fancy badges-- – just plain professional markdown:
MERN Task Manager App

A Task Management Application built using the MERN (MongoDB, Express, React, Node.js) stack.
The app allows users to create, manage, and organize tasks with features like secure authentication, drag-and-drop task arrangement, and a responsive UI.

Features

- User Authentication: Secure login, registration, and logout with JWT (HttpOnly cookies) and Google OAuth
- Task Management: Create, search, update, and delete tasks
- Drag-and-Drop: Organize tasks between "To Do", "In Progress", and "Done"
- Protected Routes: Authentication-based routing
- Optimistic Updates: Faster UI updates with React Query caching
- Responsive UI: Built with React Beautiful DnD and custom UI components

Tech Stack

 Frontend

- React (v18.3.1)
- Redux Toolkit (state management)
- React Router (routing)
- React Query (server caching)
- React Hook Form + Zod (validation)
- React Beautiful DnD (drag-and-drop)
- Axios (API calls)
- Flowbite-React (UI components)
- React Toastify (notifications)

Backend

- Node.js (v18.x)
- Express.js (v4.19.2)
- MongoDB + Mongoose
- JWT (authentication)
- Bcrypt.js (password hashing)
- Cookie-Parser (JWT cookies)

Live Demo

[View the deployed app](https://taskmanger-4sy5.onrender.com)

---

-- Getting Started (Local Setup)

--- Prerequisites

- Node.js (v18+)
- MongoDB (local or Atlas)

--- Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/vishnuvardhanvemula/mern-task-manager.git
   ```

2. Navigate into the project:

   ```bash
   cd mern-task-manager
   ```

---

--- Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the --backend-- directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Run the server:

```bash
npm start
```

Server runs on `http://localhost:5000`.

---

--- Frontend Setup

```bash
cd ../frontend
npm install
```

Create a `.env` file in the --frontend-- directory:

```env
REACT_APP_API_URL=http://localhost:5000
```

Run the frontend:

```bash
npm start
```

App runs on `http://localhost:3000`.

---

-- Testing Locally

Run both frontend and backend servers, then visit `http://localhost:3000`.

---

-- Scripts

- `npm start` → Start development server
- `npm build` → Build for production

---

-- Future Enhancements

- User Avatars
- Real-time Notifications
- Improved UI polish

---

-- Known Issues

- Minor alignment issues in UI
- JWT cookie bug in production (in progress)

---

-- Contributing

Contributions, issues, and pull requests are welcome.
Author
--Vishnu Vardhan Vemula-- – [GitHub](https://github.com/vishnuvardhanvemula)
Do you want me to also make a --`.env.example` file-- (frontend + backend) that matches this README so your repo looks polished?
