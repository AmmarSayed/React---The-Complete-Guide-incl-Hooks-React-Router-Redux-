import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0) {
    return <h2>No expenses found !</h2>;
  }

  return (
    <ul className='expenses-list'>
      {filteredExpenses.map(item => {
        return <ExpenseItem key={item.id} expense={item} />;
      })}
    </ul>
  );
};

export default ExpensesList;
