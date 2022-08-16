import Todo from "../models/todo";
import React, { useState } from "react";

const tempList = [
  "delectus aut autem",
  "quis ut nam facilis et officia qui",
  "fugiat veniam minus",
  "et porro tempora",
];

type TodosContextObjType = {
  items: Todo[];
  onCompleteTodo: (id: string) => void;
  onAddTodo: (todoText: string) => void;
  onDeleteTodo: (id: string) => void;
};

const toDosList = tempList.map((item, i) => new Todo(item, i));

export const TodosContext = React.createContext<TodosContextObjType>({
  items: [],
  onCompleteTodo: () => {},
  onAddTodo: () => {},
  onDeleteTodo: (id: string) => {},
});

const TodosContextProvider: React.FC<{
  children?: JSX.Element | JSX.Element[];
}> = (props) => {
  const [todos, setTodos] = useState<Todo[]>(toDosList);

  const addTodoHandler = (todoText: string): void => {
    setTodos((old) => [...old, new Todo(todoText, old.length)]);
  };

  const completeTaskHandler = (e: any) => {
    const id = e.target.dataset.id;
    const todoItemIndex = todos.findIndex((item) => item.id === id);

    const newTodos = [...todos];

    newTodos[todoItemIndex] = {
      ...newTodos[todoItemIndex],
      completed: !newTodos[todoItemIndex].completed,
    };

    setTodos(newTodos);
  };

  const deleteTodoHandler = (e: any): void => {
    const id = e.target.dataset.id;
    setTodos((old) => old.filter((item) => item.id !== id));
  };

  const contextValue: TodosContextObjType = {
    items: todos,
    onCompleteTodo: completeTaskHandler,
    onAddTodo: addTodoHandler,
    onDeleteTodo: deleteTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
