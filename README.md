# 📝 Fullstack To-Do App (MERN CRUD Project)

A clean and responsive full-stack To-Do application built using MongoDB, Express.js, React.js, and Node.js (MERN Stack).  
This project demonstrates full CRUD operations with a modern UI and REST API integration.

---

## 🚀 Features

- ➕ Add new tasks  
- 📋 View all tasks  
- ✏️ Edit/update existing tasks  
- ❌ Delete tasks  
- ⚡ Real-time UI updates  
- 🎨 Clean and modern user interface  

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- Axios  
- CSS3  

### Backend
- Node.js  
- Express.js  
- MongoDB  
- Mongoose  

---

## 📁 Project Structure

Fullstack-To-Do/
│
├── client/        # React frontend  
├── server/        # Node + Express backend  
├── README.md  

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

git clone https://github.com/MODUGULA007/Fullstack-To-Do.git  
cd Fullstack-To-Do  

---

### 2️⃣ Backend Setup

cd server  
npm install  

Create `.env` file inside server folder:

MONGO_URI=your_mongodb_connection_string  

Run backend:

node index.js  

Backend runs at:
http://localhost:5000  

---

### 3️⃣ Frontend Setup

cd client  
npm install  
npm start  

Frontend runs at:
http://localhost:3000  

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/todos | Get all tasks |
| POST   | /api/todos | Create new task |
| PUT    | /api/todos/:id | Update task |
| DELETE | /api/todos/:id | Delete task |

---

## 👨‍💻 Author

Name: ANILKUMAR MODUGULA
GitHub: https://github.com/MODUGULA007  

---

## ⭐ Future Improvements

- Authentication (Login/Register)  
- Task categories  
- Drag & drop tasks  
- Dark mode  
- Deployment (Vercel + Render)  

---

## 📌 Note

This project is built for learning full-stack development and demonstrating CRUD operations using MERN stack.
