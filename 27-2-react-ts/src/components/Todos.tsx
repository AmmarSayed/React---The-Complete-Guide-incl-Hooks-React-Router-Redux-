import React, { useContext } from "react";

import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const todosCxt = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCxt.items.map((item) => (
        <TodoItem
          key={item.id}
          onCompleteTodo={todosCxt.onCompleteTodo}
          item={item}
          onDeleteTodo={todosCxt.onDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
