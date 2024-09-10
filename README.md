# Task Module Assignment

Welcome to the Task Module Assignment repository! This project is designed to demonstrate proficiency in both **Node.js** backend development and **React.js** frontend development. It covers essential full-stack skills such as server-side scripting, RESTful API design, data management, state management, and UI/UX design.

## Table of Contents
1. [Node.js Backend](#nodejs-backend)
    - [Server-side Scripting](#server-side-scripting)
    - [Web Application Architecture](#web-application-architecture)
    - [Data Management](#data-management)
2. [React.js Frontend](#reactjs-frontend)
    - [Component-based Development](#component-based-development)
    - [State Management](#state-management)
    - [Routing and Navigation](#routing-and-navigation)
    - [UI/UX and Responsive Design](#uiux-and-responsive-design)
3. [Full-stack Integration](#full-stack-integration)
    - [API Integration](#api-integration)
    - [State Synchronization](#state-synchronization)
4. [Getting Started](#getting-started)

## Node.js Backend

The backend is built using **Node.js** and demonstrates the following capabilities:

### Server-side Scripting
- Proficiency in Node.js core modules such as `http`, `fs`, `path`, `buffer`, and `express`.
- Implementation of a basic HTTP server with routing and middleware.
- Handling of asynchronous operations using callbacks, Promises, or `async/await`.

### Web Application Architecture
- Design of a RESTful API with appropriate HTTP methods and endpoints.
- Implementation of CRUD (Create, Read, Update, Delete) operations for a resource.
- Demonstration of middleware, routing, and error handling techniques.

### Data Management
- Direct interaction with a SQL database (without ORM) to showcase SQL query proficiency.
- Implementation of data validation and data access control mechanisms.
- Writing SQL queries to retrieve, update, and delete data.

## React.js Frontend

The frontend is developed using **React.js** and demonstrates the following capabilities:

### Component-based Development
- Creation of reusable and modular components.
- Management of component state and lifecycle methods.
- Implementation of component composition and data flow using `props`, `state`, and `context`.

### State Management
- Use of state management solutions such as React's built-in state or external libraries (Redux, MobX).
- Handling of asynchronous actions and data fetching.
- Management of global application state and local component state.

### Routing and Navigation
- Setup of client-side routing using React Router.
- Implementation of dynamic routing and navigation between different views.
- Handling of route parameters and query strings.

### UI/UX and Responsive Design
- Utilization of CSS frameworks or libraries (e.g., Tailwind CSS, Bootstrap) to create a responsive and visually appealing user interface.
- Writing of clean, maintainable, and semantic HTML and CSS.
- Implementation of accessibility features and best practices.

## Full-stack Integration

This section integrates the backend and frontend to create a cohesive full-stack application.

### API Integration
- Consumption of the RESTful API developed in the Node.js backend.
- Handling of HTTP requests and responses between the frontend and backend.
- Implementation of error handling and data validation on the client-side.

### State Synchronization
- Management of data flow between the frontend and backend to ensure consistency.
- Use of appropriate state management techniques to handle real-time updates and push notifications (optional).

## Getting Started

### Prerequisites
- **Node.js** and **npm** installed.
- **MySQL** database set up on cPanel or any other hosting platform.
- Basic understanding of JavaScript, Node.js, React.js, SQL, and web development.

### Installation

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/task-list.git
   cd task-list
   ```

2. **Set up the backend:**
   ```
   cd backend
   npm install
   cp .env.example .env
   # Edit .env file with your database credentials
   npm start
   ```

3. **Set up the frontend:**
   ```
   cd ../frontend
   npm install
   cp .env.example .env
   # Edit .env file with your backend API URL
   npm start
   ```

4. **Configure the database:**
   - Create a new MySQL database on your local system.
   - Update the `.env` file in the `backend` directory with your database credentials.

5. **Run the application:**
   - Start the backend server: `cd backend && npm start`
   - In a new terminal, start the frontend development server: `cd frontend && npm start`

6. **Access the application:**
   Open your web browser and navigate to `http://localhost:5173` to view the Task Module application.

### Running Tests
- Backend tests: `cd backend && npm test`
- Frontend tests: `cd frontend && npm test`
