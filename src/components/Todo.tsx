import React, { useState } from "react";
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
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(props.todo.task);

  // チェックボックスの切り替え
  const toggleTodo = () => {
    const newtodos: Todos = props.todos.map((todo) => {
      if (todo.id === props.todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    props.setTodos(newtodos);
  };
  // 編集開始
  const startEditing = () => {
    setIsEditing(true);
  }
  // 入力の変更を反映
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTask(event.target.value);
  };

  // 編集を終了し、更新する
  const finishEditing = () => {
    setIsEditing(false);
    const newtodos: Todos = props.todos.map((todo) => {
      if (todo.id === props.todo.id) {
        return { ...todo, task: editedTask };
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

        {isEditing ? (
          <input
            type="text"
            className="editInput"
            value={editedTask}
            onChange={handleChange}
            onBlur={finishEditing} // フォーカスが外れたら確定
            onKeyDown={(e) => e.key === "Enter" && finishEditing()} // Enterキーで確定
            autoFocus
          />
        ) : (
          <>
            <FaPencilAlt className="editIcon" onClick={startEditing} />
            <span className="ml8">{props.todo.task}</span>
          </>
        )}

      </span>
    </div>
  </>;
};

export default Todo;
