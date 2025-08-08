 ## ServFinder - Service Review System

A full-stack service review web application where users can add services, write reviews, explore services by others, and manage their interactions. 

##  Live Site
https://assignment-11-80e0c.web.app

![ServFinder Screenshot](https://i.ibb.co.com/d0csv9YF/service-finder.png)

##  Project Purpose

The purpose of this project is to allow users to:
- Add their own services
- Post and manage reviews
- Explore services added by others




##  Key Features

###  Authentication:
- Register and Login via email/password
- Google OAuth integration
- JWT-based route protection
- Password validation 

###  Services Management:
- Add new services (with image, title, price, etc.)
- View all services
- Update and delete own services 

###  Reviews:
- Add, edit, delete reviews for any service
- Show review count and star rating
- “My Reviews” page for personal review history

###  Dashboard & Navigation:
- Dynamic Navbar (login/logout states)
- Private Routes (Add Service, My Services, My Reviews)
- 404 Page and Spinner
- Dynamic Page Titles (via react-helmet)

###  Home Page Sections:
- Animated Banner (carousel)
- Featured Services (limit 6 from MongoDB)
- Meet Our Partners section
- Extra Sections: Stats with CountUp and Newsletter CTA

###  Additional Functionalities:
-  Search and Category Filter (server-side)
-  CountUp showing Users, Reviews, Services
-  JWT Token stored in HTTP-only cookies
-  SweetAlert for all notifications and errors

---

##  Technologies Used

###  Frontend:
- React.js
- React Router DOM
- TailwindCSS + DaisyUI
- Axios
- React CountUp
- React Rating
- React Helmet
- Lottie React
- SweetAlert2

###  Authentication:
- Firebase Auth
- Google Sign In
- JWT (JSON Web Tokens)

###  Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose)
- CORS
- dotenv


{
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-router": "^7.6.0",
  "firebase": "^11.8.0",
  "tailwindcss": "^4.1.7",
  "daisyui": "^5.0.35",
  "sweetalert2": "^11.6.13",
  "react-icons": "^5.5.0",
  "react-simple-typewriter": "^5.0.1",
  "react-tooltip": "^5.28.1",
  "@tailwindcss/vite": "^4.1.7",
  "vite": "^6.3.5",
  "express": "^5.1.0",
  "mongodb": "^6.16.0",
  "cors": "^2.8.5",
  "dotenv": "^16.5.0"
}


## Installation and Running Locally
Clone the repository from GitHub to your local machine.

Navigate to the frontend directory.

1. Install all frontend dependencies.

2. Start the frontend development server.

3. Open your browser and visit http://localhost:5173 (default Vite port).

4. Open a new terminal window or tab, then navigate to the backend directory named assignment-10-server.

5. Install all backend dependencies.

6. Create a .env file in the backend directory and add your environment variables, for example:

MONGODB_URI=your_mongodb_connection_string

7. Start the backend server.



---


