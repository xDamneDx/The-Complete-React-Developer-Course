import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
    const result = selectExpensesTotal([]);
    expect(result).toBe(0);
});

test('Should correctly add up a single expense', () => {
    const result = selectExpensesTotal([expenses[1]]);
    expect(result).toBe(109500);
});

test('Should correctly add up multiple expenses', () => {
    const result = selectExpensesTotal(expenses);
    expect(result).toBe(114195);
});
