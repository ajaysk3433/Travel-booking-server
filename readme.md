# 🌟 Booklt: Experiences & Slots

## 🧭 Project Overview

**Booklt** is a full-stack web application that allows users to explore travel experiences, view real-time slot availability, and complete bookings seamlessly.
It was developed as a **full-stack intern assignment** to showcase proficiency in React, Node.js, TypeScript, MongoDB, and modern development workflows while adhering closely to the given Figma design.

🎨 **Figma Design:** [Booking UI](https://www.figma.com/design/8X6E1Ev8YdtZ3erV0lifvb/HD-booking?node-id=0-1&p=f&t=K4scwnxflHmfbb2a-0)

🌐 **Live Demo:** https://highway-delite-9n63.onrender.com

💻 **Frontend Repository:** https://github.com/ajaysk3433/Travel-booking-front.git

---

## ✨ Core Features

* **Full Booking Flow:** Complete user journey — *Home → Details → Checkout → Result*
* **Data Persistence:** Stores experiences, slots, and booking details in **MongoDB**
* **Double Booking Prevention:** Ensures unique slot booking with backend validation
* **Promo Code Validation:** Validates discount codes like `SAVE100` or `SAVE200`
* **Design Fidelity:** Matches provided Figma design for both desktop and mobile
* **Clear Feedback System:** Handles loading, success, failure, and sold-out states

---

## 🛠️ Tech Stack

### 🖥️ Frontend (Client)

| Category         | Technology                                           |
| ---------------- | ---------------------------------------------------- |
| Framework        | React + TypeScript                                   |
| Bundler          | Vite                                                 |
| Styling          | Tailwind CSS                                         |
| API Client       | Fetch API                                            |
| State Management | React Hooks (`useState`, `useEffect`) + LocalStorage |

### ⚙️ Backend (Server)

| Category  | Technology        |
| --------- | ----------------- |
| Framework | Node.js + Express |
| Database  | MongoDB           |

---

## 🔌 API Endpoints

| Method   | Endpoint           | Description                                                 |
| -------- | ------------------ | ----------------------------------------------------------- |
| **GET**  | `/experiences`     | Fetch all travel experiences                                |
| **GET**  | `/experiences/:id` | Get details and slot availability for a specific experience |
| **POST** | `/bookings`        | Create a new booking and store it in the database           |
| **POST** | `/promo/validate`  | Validate promo codes                                        |
|**GET**   | `api/slot/:id` | Fetch available slots

---

## 🚀 Setup and Installation

### 1️⃣ Clone the Repository

```bash
git clonehttps://github.com/ajaysk3433/Travel-booking-server.git
cd travel-booking-server
```

### 2️⃣ Install Dependencies

```bash
cd travel-booking-server
npm install

```

### 3️⃣ Environment Variables

Create a `.env` file in the `travel-booking-server` directory and add:

```
PORT
DB_NAME
DB_USER_NAME
DB_PASSWORD
```

### 4️⃣ Run the Application

Start the backend server:

```bash
cd travel-booking-server
npm run dev
```

The app will be available at **[http://localhost:4000](http://localhost:4000)**

---

---

## 🧠 Learning Highlights

* Implemented TypeScript across frontend & backend for type safety
* Designed modular APIs for seamless client-server integration
* Managed real-time slot synchronization to prevent booking conflicts
* Practiced design-to-code accuracy using Figma layouts

---

## 💬 Author

**Ajay Singh**
📧 *[ajaysk3433@gmail.com](mailto:ajaysk3433@gmail.com)*
🌐  [GitHub](#)

---

