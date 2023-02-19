import React, { useEffect, useState } from "react";
import { TodoCounter } from "./components/TodoCounter.js";
import { TodoSearch } from "./components/TodoSearch.js";
import { TodoList } from "./components/TodoList.js";
import { TodoElement } from "./components/TodoElement.js";
import { CreateTodoButton } from "./components/CreateTodoButton.js";
import "./App.css";
const defaultTodos = [
  { text: "ver shark tank mexico", completed: false },
  { text: "jugar catan con los padres", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "LALALALAA", completed: false },
  { text: "llamarlo al diego", completed: false },
  { text: "decirle al quique feliz cumpleanios", completed: false },
  { text: "santi esucha el famous last words", completed: false },
  { text: "oh que la cancion", completed: false },
];
function App() {
  const [searchParam, setSearchParam] = useState("");
  const [todoAllElements, setTodoAllElements] = useState(defaultTodos);
  const [totalTodos, setTotalTodos] = useState(todoAllElements.length);
  const [todosCompleted, setTodosCompleted] = useState(
    todoAllElements.filter((item) => !!item.completed).length
  );
  useEffect(() => {
    setTodosCompleted(
      todoAllElements.filter((todoItem) => !!todoItem.completed).length
    );
    setTotalTodos(todoAllElements.length);
  }, [todoAllElements]);

  const completeTodos = (textToFind) => {
    let updatedAllElements = [...todoAllElements];
    const indexToUpdate = todoAllElements.findIndex(item => item.text === textToFind);
    updatedAllElements[indexToUpdate].completed = true;
    setTodoAllElements(updatedAllElements);
  };
  const eliminateTodos = (textToFind) => {
    let updatedAllElements = [...todoAllElements];
    const indexToUpdate = todoAllElements.findIndex(item => item.text === textToFind);
    updatedAllElements.splice(indexToUpdate,1);
    setTodoAllElements(updatedAllElements);
  };
  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} done={todosCompleted} />
      <TodoSearch searchParam={searchParam} setSearchParam={setSearchParam} />
      <TodoList>
        {todoAllElements
          .filter((item) =>
            item.text.toLowerCase().includes(searchParam.toLowerCase())
          )
          .map(function (todoItem) {
            return (
              <TodoElement
                key={todoItem.text}
                text={todoItem.text}
                completado={todoItem.completed}
                onComplete = { ()=>{completeTodos(todoItem.text)}}
                onEliminate = { ()=>{eliminateTodos(todoItem.text)}}
              />
            );
          })}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
