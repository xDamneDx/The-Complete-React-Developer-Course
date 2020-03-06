export default (expenses) => expenses.map((expense) => expense.amount).reduce((sum, current) => sum + current, 0);
