# 🎓 Student Complaint Management System (Backend)

A backend system that allows students to register complaints and enables admins to manage, track, and resolve them efficiently.

This project is built using Java backend with MongoDB database and follows REST API architecture.

---

## 🚀 Tech Stack
- Java
- Servlets
- MongoDB
- JDBC / Mongo Driver
- Apache Tomcat
- REST APIs
- Postman (API Testing)

---

## ✨ Features
- Student Registration & Login
- Role-based Authentication (Admin / Student)
- Submit new complaints
- Track complaint status
- Admin dashboard for complaint management
- Secure session handling
- CRUD operations

---

## 🗄 Database (MongoDB Collections)

Collections:
- users
- complaints
- admins

Document-based NoSQL design for flexible and scalable data storage.

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | /register | Register user |
| POST | /login | Login user |
| POST | /complaints | Submit complaint |
| GET | /complaints | Fetch all complaints |
| PUT | /complaints/:id | Update status |
| DELETE | /complaints/:id | Delete complaint |

---

## ⚙️ How to Run Locally

1. Clone the repository

2. Start MongoDB locally
3. Configure `.env` file
4. Run Tomcat server
5. Test APIs using Postman

---

## 🧪 Testing
All APIs tested using Postman.

---

## 📁 Project Structure
src/
┣ controllers
┣ routes
┣ models
┣ config
┣ database

---

## 📌 Author
Ravi Ranjan Kumar  
Backend Developer | Java | Node.js | MongoDB | REST APIs
