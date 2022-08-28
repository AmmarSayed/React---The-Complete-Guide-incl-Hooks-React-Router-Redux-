import React from "react";
import { useState } from "react";
import LoadingIndicator from "../UI/LoadingIndicator";
import Card from "../UI/Card";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const [state, setState] = useState({ title: "", amount: 0 });

  const handleChange = (e) => {
    // we must extract the title and the amount before we pass them to the setState
    const { name, value } = e.target;

    setState((old) => ({ ...old, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // ...
    props.onAddIngredient(state);
    setState({ title: "", amount: 0 });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              name="title"
              type="text"
              id="title"
              value={state.title}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              name="amount"
              type="number"
              id="amount"
              value={state.amount}
              onChange={handleChange}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
