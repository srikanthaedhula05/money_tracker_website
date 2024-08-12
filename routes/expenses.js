const express = require('express');
const router = express.Router();
const expenseController = require('../controllers/expenseController');

// Routes for expenses
router.get('/', expenseController.getAllExpenses);
router.post('/', expenseController.createExpense);
router.get('/:id', expenseController.getExpenseById);
router.put('/:id', expenseController.updateExpense);
router.delete('/:id', expenseController.deleteExpense);

// Route to calculate total expenses
router.get('/total', expenseController.calculateTotalExpenses);

module.exports = router;
