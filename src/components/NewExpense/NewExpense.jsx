import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = props => {
  const [showForm, setShowform] = useState(false);

  const saveExpenseData = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setShowform(false);
  };

  const showFormHander = () => {
    setShowform(true);
  };

  const hideFormHander = () => {
    setShowform(false);
  };

  return (
    <div className='new-expense'>
      {!showForm && <button onClick={showFormHander}>Add New Expense!</button>}

      {showForm && <ExpenseForm onSaveExpenseData={saveExpenseData} onHideForm={hideFormHander} />}
    </div>
  );
};

export default NewExpense;
