# 🔐 Bcrypt Hash Generator & Checker

A modern full-stack web app that allows you to **generate secure bcrypt hashes** and **verify plaintext strings** against them — useful for developers, educators, and security learners.

---

## 🌍 Live Demo

👉 [https://bcrypt-node-react-hash-checker.netlify.app](https://bcrypt-node-react-hash-checker.netlify.app)

---

## ⚙️ Tech Stack

### 💻 Frontend
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Axios](https://axios-http.com/)

### 🛠 Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [CORS](https://www.npmjs.com/package/cors)

### ☁️ Hosting & Deployment
- **Frontend:** [Netlify](https://netlify.com)
- **Backend:** [Render](https://render.com)
---

## ✨ Features

- 🔑 Bcrypt encryption with 12 salt rounds
- 🔍 Instant match check between hash and string
- 📱 Responsive, modern UI with animations and icons
- ☁️ Fully deployed and free to use
- 🔒 No data stored or tracked — 100% client-initiated requests

---

## 📸 Preview

![image](https://github.com/user-attachments/assets/2f3bf63f-993d-4dfc-b212-f135feaa42dd)


---

## 🚀 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/bhavik786/bcrypt-password-checker.git
cd bcrypt-password-checker
```

### 2. Start the Backend
```
cd backend
npm install
npm run start
```

➡️ Runs at ```http://localhost:5000```

### 3. Start the Frontend
```
cd ../frontend
npm install
```
Create a .env file in frontend/:
```
REACT_APP_BACKEND_URL=http://localhost:5000
```
Then run:

```
npm start
```
➡️ Opens at ```http://localhost:3000```

## 🧠 Use Cases
- 🔐 Learn how bcrypt hashing works

- 🛠️ Test password hashes during development

- 🧪 Educate others about encryption & authentication

## 🤝 Credits
Developed by Bhavik Gevariya
