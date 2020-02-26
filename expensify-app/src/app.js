import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
store.dispatch(addExpense({ description: 'Water bill', amount: 1500 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 200, createdAt: 2001 }));
store.dispatch(addExpense({ description: 'Rent', amount: 10200 }));

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
