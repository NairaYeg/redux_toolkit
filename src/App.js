import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useState } from "react";
import React from "react";
import { selectedCount } from "./features/counterSlicer";
import { increment, decrement } from "./features/counterSlicer";
import { selectedTodos } from "./features/todoSlicer";
import { addTodo } from "./features/todoSlicer";
import "./App.css";

const todoTemplate = {
  item: "",
  id: null,
};

function App() {
  const [todo, setTodo] = useState(todoTemplate);
  const value = useSelector(selectedCount);
  const todoList = useSelector(selectedTodos);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(10));
  };
  const handleDecriment = () => {
    dispatch(decrement());
  };

  const handleAddTodo = () => {
    dispatch(addTodo(todo));
    setTodo(todoTemplate);
    console.log(todoList);
  };

  return (
    <div className="container">
      <div>
        <div className="counterWrapper">
          <p>Count is {value}</p>
          <button onClick={handleIncrement}>+</button>
          <button onClick={handleDecriment}>-</button>
        </div>
        <div className="todoWrapper">
          <h2>ToDo App</h2>
          <input
            value={todo.item}
            type="text"
            onChange={(e) =>
              setTodo({
                item: e.target.value,
                id: Date.now(),
              })
            }
          />
          <button onClick={handleAddTodo}>Add</button>
          <div>
            {todoList.map(({ item, id }) => {
              return <p key={id}>{item}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
