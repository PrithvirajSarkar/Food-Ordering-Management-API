# Food Ordering Management API

A RESTful backend API for managing food orders, built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose**. The API supports creating, retrieving, updating, and deleting food orders.

## Tech Stack

- **Node.js** – JavaScript runtime
- **Express.js 5** – Web framework for building the REST API
- **MongoDB** – NoSQL database
- **Mongoose 9** – ODM for defining the order schema and interacting with MongoDB
- **dotenv** – Loads environment variables from a `.env` file
- **Postman** – Used to send requests and test API responses

## Features

- Create a food order
- Retrieve all food orders
- Retrieve a single order using its MongoDB ID
- Update an existing order
- Delete an order
- Store order creation and update timestamps automatically
- Keep database credentials and configuration in environment variables

## Project Structure

```text
Food_Management_API/
├── Controllers/
│   └── orderController.js
├── Models/
│   └── Order.js
├── Routes/
│   └── orderRoutes.js
├── node_modules/       # Installed locally; not committed to Git
├── .env                # Local environment variables; not committed to Git
├── .env.example        # Environment variable template
├── .gitignore
├── database.js
├── package-lock.json
├── package.json
├── README.md
└── server.js
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm
- A MongoDB database (local MongoDB installation or MongoDB Atlas)
- [Postman](https://www.postman.com/) or another API client for testing

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd Food_Management_API
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your own MongoDB connection string. Do not commit your `.env` file or share database credentials.

### 4. Start the server

```bash
npm start
```

The server uses the `start` script defined in `package.json`. By default, it runs at:

```text
http://localhost:3000
```

The application connects to MongoDB before starting the Express server.

## API Endpoints

Base URL:

```text
http://localhost:3000/api/orders
```

| HTTP Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/orders` | Create a new order |
| `GET` | `/api/orders` | Retrieve all orders |
| `GET` | `/api/orders/:id` | Retrieve an order by ID |
| `PUT` | `/api/orders/:id` | Update an order by ID |
| `DELETE` | `/api/orders/:id` | Delete an order by ID |

### Order data

The order schema contains these fields:

| Field | Type | Required |
|---|---|---|
| `customerName` | String | Yes |
| `foodItem` | String | Yes |
| `quantity` | Number | Yes |
| `totalPrice` | Number | Yes |

Mongoose timestamps are enabled, so documents also include `createdAt` and `updatedAt`.

### Example: Create an order

**Request**

```http
POST /api/orders
Content-Type: application/json
```

**JSON body**

```json
{
  "customerName": "Prithviraj",
  "foodItem": "Burger",
  "quantity": 2,
  "totalPrice": 300
}
```

### Example: Update an order

Use the order's MongoDB ID in the URL.

**Request**

```http
PUT /api/orders/ORDER_ID
Content-Type: application/json
```

**JSON body**

```json
{
  "quantity": 5,
  "totalPrice": 750
}
```

The API returns the updated order when the update succeeds.

## HTTP Response Codes

| Status code | Meaning in this API |
|---|---|
| `200 OK` | Request completed successfully |
| `201 Created` | Order created successfully |
| `404 Not Found` | The requested order does not exist |
| `500 Internal Server Error` | An error occurred while processing the request |

## API Testing

The endpoints were tested using Postman. Testing covered:

- Creating an order
- Retrieving all orders and an individual order
- Updating an existing order
- Deleting an order

## What I Learned

- Building REST API endpoints with Express.js
- Organizing backend code into routes, controllers, and models
- Implementing CRUD operations
- Connecting an Express application to MongoDB with Mongoose
- Defining a Mongoose schema and model
- Using environment variables with dotenv
- Sending and testing HTTP requests with Postman
- Working with JSON request bodies and HTTP response codes

---

**Note:** This project was developed as part of an academic Student Development Program (SDP).
