# Expense Tracker Backend

This repository is a practical example of how to build a Node.js backend from scratch for an expense tracking application. It covers the complete flow of a backend project, including project setup, routing, authentication, database integration, middleware, and API testing.

## What This Project Demonstrates

This project shows how to build an end-to-end backend in Node.js with:

- Express.js for creating REST APIs
- MongoDB and Mongoose for database operations
- JWT authentication for secure login
- Middleware for request handling and protection
- Environment variables for configuration
- API rate limiting for basic security

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Token (JWT)
- bcrypt
- dotenv

## Project Structure

```text
backend/
  Server.js
  package.json
  src/
    Config/
    Controller/
    Middleware/
    Models/
    Routes/
    Utils/
```

## Prerequisites

Before starting, make sure you have:

- Node.js installed on your machine
- npm installed
- MongoDB running locally or access to MongoDB Atlas
- A terminal or command prompt

## Step 1: Clone the Repository

```bash
git clone <your-repo-url>
cd Expense-Tracker
```

## Step 2: Install Dependencies

Navigate to the backend folder and install packages:

```bash
cd backend
npm install
```

## Step 3: Configure Environment Variables

Create a `.env` file in the `backend` folder with the following values:

```env
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
```

Example:

```env
DB_URL=mongodb://127.0.0.1:27017/expense-tracker
JWT_SECRET=supersecretkey123
NODE_ENV=development
```

## Step 4: Start the Server

Run the application using:

```bash
npm start
```

If you want live development mode, use:

```bash
npm run dev
```

The server will run on:

```text
http://localhost:8090
```

## Step 5: Understand the Backend Flow

This project follows a simple backend architecture:

1. Client sends a request to the API
2. Express routes receive the request
3. Middleware validates the request and authentication
4. Controller handles the business logic
5. Mongoose interacts with MongoDB
6. A response is sent back to the client

## API Endpoints

Base URL:

```text
http://localhost:8090
```

### Authentication Routes

#### Signup

```bash
POST /signup
```

Request body:

```json
{
  "name": "Harish",
  "emailId": "harish@example.com",
  "password": "12345678"
}
```

#### Login

```bash
POST /login
```

Request body:

```json
{
  "emailId": "harish@example.com",
  "password": "12345678"
}
```

#### Logout

```bash
POST /logout
```

### Expense Routes

#### Add Expense

```bash
POST /addExpense
```

Request body:

```json
{
  "Date": "2026-08-04",
  "Amount": 250,
  "Description": "Groceries"
}
```

#### Get Total Expense

```bash
GET /totalexpense
```

#### Get All Expenses

```bash
GET /allexpense
```

#### Get Monthly Expense Summary

```bash
GET /monthlyexpense
```

#### Delete Expense

```bash
DELETE /delExpense/:id
```

## Testing the API

You can test the endpoints using Postman or curl.

### Example with curl

#### Signup

```bash
curl -X POST http://localhost:8090/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Harish","emailId":"harish@example.com","password":"12345678"}'
```

#### Login

```bash
curl -X POST http://localhost:8090/login \
  -H "Content-Type: application/json" \
  -d '{"emailId":"harish@example.com","password":"12345678"}'
```

## How the Project Works

- The entry point is `Server.js`
- Routes are organized in the `src/Routes` folder
- Controllers contain the logic for each feature
- Models define the database structure
- Middleware handles authentication and rate limiting
- The database connection is configured in `src/Config/db.js`

## Development Notes

- This project is ideal for learning how a backend application is structured.
- It follows a simple and beginner-friendly architecture.
- You can extend it by adding features such as categories, filters, pagination, and a frontend.

## Troubleshooting

- If the server does not start, check whether MongoDB is reachable.
- If login fails, verify that `JWT_SECRET` is correctly set.
- If the database connection fails, check your `DB_URL` format.
- If a dependency error appears, run `npm install` again.

## Next Steps

To improve this project further, you can add:

- Expense categories
- Date-based filters
- Pagination
- Catching
- \
