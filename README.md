 ## ServFinder - Service Review System

A full-stack service review web application where users can add services, write reviews, explore services by others, and manage their interactions. Built as part of Assignment-11 (Category-12).

##  Live Site


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

---


