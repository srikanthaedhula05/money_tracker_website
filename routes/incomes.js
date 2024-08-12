
const express = require('express');
const router = express.Router();
const incomeController = require('../controllers/incomeController');

// Routes for incomes
router.get('/', incomeController.getAllIncomes);
router.post('/', incomeController.createIncome);
router.get('/:id', incomeController.getIncomeById);
router.put('/:id', incomeController.updateIncome);
router.delete('/:id', incomeController.deleteIncome);

// Route to calculate total income
router.get('/total', incomeController.calculateTotalIncome);

module.exports = router;
