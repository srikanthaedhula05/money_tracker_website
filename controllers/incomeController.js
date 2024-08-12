
const Income = require('../models/Income');

const incomeController = {
  getAllIncomes: async (req, res) => {
    try {
      const incomes = await Income.find();
      res.json(incomes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Method to calculate total income
  calculateTotalIncome: async (req, res) => {
    try {
      const incomes = await Income.find();
      const totalIncome = incomes.reduce((total, income) => total + income.amount, 0);
      res.json({ totalIncome });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

   // Method to create income
   createIncome: async (req, res) => {
    try {
      const { description, amount, source } = req.body;
      const newIncome = new Income({ description, amount, source });
      await newIncome.save();
      res.status(201).json(newIncome);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

};

module.exports = incomeController;
