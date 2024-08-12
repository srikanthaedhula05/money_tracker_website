
const Expense = require('../models/Expense');

const expenseController = {
  getAllExpenses: async (req, res) => {
    try {
      const expenses = await Expense.find();
      res.json(expenses);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Method to create expense
  createExpense: async (req, res) => {
    try {
      const { description, amount, category } = req.body;
      const newExpense = new Expense({ description, amount, category });
      await newExpense.save();
      res.status(201).json(newExpense);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Method to calculate total expenses
  calculateTotalExpenses: async (req, res) => {
    try {
      const expenses = await Expense.find();
      const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
      res.json({ totalExpenses });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = expenseController;


