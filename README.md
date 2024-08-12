# Money Tracker App

## Overview

Money Tracker App is a simple web application that helps you track your income and expenses. It allows users to add, update, delete, and view their financial records. This project is built using Node.js, Express, and MongoDB, with Mongoose as the ODM.

## Features

- Add, update, delete, and view income records
- Add, update, delete, and view expense records
- Calculate total income and expenses
- Simple and intuitive user interface

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- HTML, CSS, and JavaScript for the frontend

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Sweety-Vigneshg/money-tracker-app.git
    cd money-tracker-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up MongoDB:**

    Make sure you have MongoDB installed and running on your local machine or have access to a remote MongoDB instance.

4. **Configure MongoDB connection:**

    In `index.js`, update the MongoDB connection string if necessary:

    ```javascript
    mongoose.connect('mongodb://localhost:27017/money_tracker', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    ```

5. **Run the application:**

    ```bash
    npm start
    ```

    The server should now be running on `http://localhost:3000`.

## Project Structure

- **index.js**: Main entry point of the application.
- **routes/**: Contains the route definitions for expenses and incomes.
- **models/**: Contains the Mongoose models for Expense and Income.
- **controllers/**: Contains the controller logic for handling requests related to expenses and incomes.

## API Endpoints

### Expenses

- `GET /expenses`: Get all expenses.
- `POST /expenses`: Create a new expense.
- `GET /expenses/:id`: Get a specific expense by ID.
- `PUT /expenses/:id`: Update a specific expense by ID.
- `DELETE /expenses/:id`: Delete a specific expense by ID.
- `GET /expenses/total`: Get the total amount of expenses.

### Incomes

- `GET /incomes`: Get all incomes.
- `POST /incomes`: Create a new income.
- `GET /incomes/:id`: Get a specific income by ID.
- `PUT /incomes/:id`: Update a specific income by ID.
- `DELETE /incomes/:id`: Delete a specific income by ID.
- `GET /incomes/total`: Get the total amount of incomes.

## Frontend

A simple HTML page `public/expenses.html` is provided to showcase the expenses. You can extend this with more pages and styles as needed.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.

