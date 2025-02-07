import React from "react";
import "../css/App.css";
import { FaPencilAlt } from "react-icons/fa";

type Props = {
  todo: {
    id: number;
    task: string;
    completed: boolean;
  }
  todos: {
    id: number;
    task: string;
    completed: boolean;
  }[]
  setTodos: (todo: {
    id: number;
    task: string;
    completed: boolean;
  }[]) => void
}

type Todos = {
  id: number;
  task: string;
  completed: boolean;
}[];

const Todo = (props: Props) => {
  const toggleTodo = () => {
    const newtodos: Todos = props.todos.map((todo) => {
      if (todo.id === props.todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    props.setTodos(newtodos);
  };

  return <>
    <div className="todo">
      <input
        className="checkTodo"
        id={String(props.todo.id)}
        type="checkbox"
        checked={props.todo.completed}
        onChange={toggleTodo}
        readOnly
      />
      <span className={props.todo.completed ? "completed" : ""}>
        <span className="ml8">
          {props.todo.id} :
        </span>
        <FaPencilAlt className="editIcon" />
        <span className="ml8">
          {props.todo.task}
        </span>
      </span>
    </div>
  </>;
};

export default Todo;
