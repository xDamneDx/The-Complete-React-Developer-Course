import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('Should correctly render summary for 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={356} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should correctly render summary for multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={5} expensesTotal={48655072} />);
    expect(wrapper).toMatchSnapshot();
});
