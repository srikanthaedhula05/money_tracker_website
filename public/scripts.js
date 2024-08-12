document.addEventListener('DOMContentLoaded', function () {
    const expenseForm = document.getElementById('expense-form');
    const incomeForm = document.getElementById('income-form');
    const expenseMessage = document.getElementById('expense-message');
    const incomeMessage = document.getElementById('income-message');

    // Add event listener for expense form submission
    expenseForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        const expenseName = document.getElementById('expense-name').value;
        const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

        // Basic validation
        if (expenseName.trim() === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
            expenseMessage.textContent = 'Please enter valid expense details.';
            return;
        }

        // Reset message
        expenseMessage.textContent = '';

        // Simulate sending expense data to server (you'll replace this with AJAX request)
        setTimeout(function () {
            expenseMessage.textContent = `Expense "${expenseName}" added successfully.`;
            // Clear form fields after submission
            expenseForm.reset();
        }, 1000);
    });

    // Add event listener for income form submission
    incomeForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        const incomeName = document.getElementById('income-name').value;
        const incomeAmount = parseFloat(document.getElementById('income-amount').value);

        // Basic validation
        if (incomeName.trim() === '' || isNaN(incomeAmount) || incomeAmount <= 0) {
            incomeMessage.textContent = 'Please enter valid income details.';
            return;
        }

        // Reset message
        incomeMessage.textContent = '';

        // Simulate sending income data to server (you'll replace this with AJAX request)
        setTimeout(function () {
            incomeMessage.textContent = `Income "${incomeName}" added successfully.`;
            // Clear form fields after submission
            incomeForm.reset();
        }, 1000);
    });
});
