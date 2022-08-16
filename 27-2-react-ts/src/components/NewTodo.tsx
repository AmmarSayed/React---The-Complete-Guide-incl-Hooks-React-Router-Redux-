import React, { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const userInputRef = useRef<HTMLInputElement>(null);

  const todosCxt = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = userInputRef.current!;
    todosCxt.onAddTodo(enteredText.value);
    enteredText.value = "";
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="todoInput">Todo Text</label>
      <input type="text" name="todoInput" id="todoInput" ref={userInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
