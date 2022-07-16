import './ExpensesFilter.css';

const ExpensesFilter = props => {
  const optionChangeHandler = e => {
    props.onYearChange(e.target.value);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={optionChangeHandler} defaultValue={props.selected}>
          <option value=''>Filter by year</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
