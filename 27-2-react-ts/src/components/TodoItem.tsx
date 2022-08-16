import React from "react";
import Todo from "../models/todo";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  item: Todo;
  onCompleteTodo: (e: any) => void;
  onDeleteTodo: (e: any) => void;
}> = (props) => {
  return (
    <li className={classes.item}>
      <span className={props.item.completed ? classes.complete : ""}>
        {props.item.title}
      </span>
      <div className={classes.actions}>
        <input
          data-id={props.item.id}
          type="checkbox"
          checked={props.item.completed ? true : false}
          onChange={props.onCompleteTodo}
        />
        <button data-id={props.item.id} onClick={props.onDeleteTodo}>
          🚮
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
