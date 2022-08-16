class Todo {
  id: string;
  title: string;
  completed: boolean;

  constructor(todoText: string, index: number) {
    this.title = todoText;
    this.id = `${new Date().toISOString()}-${index}`;
    this.completed = false;
  }
}

export default Todo;
