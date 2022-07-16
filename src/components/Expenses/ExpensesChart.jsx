import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = ({ expenses }) => {
  console.log(expenses);
  const chartDatapoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  // update the value of the selected datapoint
  expenses.forEach(exp => {
    const expMonth = exp.date.getMonth(); //string 0 - 11
    chartDatapoints[expMonth].value += exp.amount;
  });

  return <Chart dataPoints={chartDatapoints} />;
};

export default ExpensesChart;
