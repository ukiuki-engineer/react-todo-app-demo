import React, { useState, useMemo } from "react";
import "./css/App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import DeleteTodo from "./components/DeleteTodo";

type Todo = {
  id: number;
  task: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const unCompletedCount = useMemo(() => {
    return todos.filter((todo) => !todo.completed).length;
  }, [todos]);
  return (
    <div className="App">
      <h1>- Todoアプリ -</h1>
      {/* NOTE: コンポーンント間のデータの受け渡しについてメモ
        親コンポーネントでuseStateしているデータと、そのsetState関数を子コンポーネントにprops経由で渡す。
        子コンポーネントからpropsで渡されたsetStateを実行して、親コンポーネントのuseStateのデータを更新する。
      */}
      <AddTodo todos={todos} setTodos={setTodos} />
      <TodoList todos=
        {todos} setTodos={setTodos} />
      <p>残り{unCompletedCount}/{todos.length}</p>
      <DeleteTodo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
