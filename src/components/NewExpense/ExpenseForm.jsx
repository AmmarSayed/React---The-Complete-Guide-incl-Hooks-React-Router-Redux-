import React from 'react';
import { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = props => {
  const initialState = { title: '', amount: 0, date: '' };

  const [formData, setFormData] = useState(initialState);

  const formInputHandler = e => {
    const { name, value } = e.target;

    setFormData(oldData => ({ ...oldData, [name]: value }));
  };

  const formSubmitHander = e => {
    e.preventDefault();

    const expenseData = {
      ...formData,
      amount: +formData.amount,
      date: new Date(formData.date),
    };

    props.onSaveExpenseData(expenseData);
    setFormData({ title: '', amount: 0, date: '' });
  };

  return (
    <form onSubmit={formSubmitHander}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>title</label>
          <input name='title' value={formData.title} type='text' onChange={formInputHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            name='amount'
            value={formData.amount}
            type='number'
            min='0.01'
            step='0.01'
            onChange={formInputHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            name='date'
            value={formData.date}
            type='date'
            min='2019-01-01'
            max='2050-12-31'
            onChange={formInputHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onHideForm}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
