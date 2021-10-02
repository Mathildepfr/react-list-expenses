import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Computer',
    amount: 2200,
    date: new Date(2021, 6, 10),
  },
  {
    id: 'e6',
    title: 'Bike',
    amount: 230,
    date: new Date(2020, 5, 12),
  },
  {
    id: 'e7',
    title: 'Food',
    amount: 35,
    date: new Date(2020, 7, 2),
  },
  {
    id: 'e8',
    title: 'Laundry',
    amount: 8,
    date: new Date(2021, 4, 3),
  },
  {
    id: 'e9',
    title: 'TV',
    amount: 180,
    date: new Date(2021, 8, 26),
  },
  {
    id: 'e10',
    title: 'Sport',
    amount: 26,
    date: new Date(2020, 11, 2),
  },
  {
    id: 'e11',
    title: 'Games',
    amount: 68,
    date: new Date(2021, 7, 21),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}



export default App;
