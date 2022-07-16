import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses = ({ expenses }) => {
  const [selectedYear, setSelectedYear] = useState('');

  const changeYearHandler = year => setSelectedYear(year);

  const filteredExpenses = expenses.filter(exp => exp.date.getFullYear().toString() === selectedYear);

  return (
    <Card className='expenses'>
      <ExpensesFilter onYearChange={changeYearHandler} selected={selectedYear} />

      <ExpensesChart expenses={filteredExpenses} />

      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
