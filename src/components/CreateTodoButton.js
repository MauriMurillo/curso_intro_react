import React from "react";
import "./styles_component/TodoAdd.css";

function CreateTodoButton(totalTodos) {
  const onClickButton = () => {
    alert("Add new todo element");
  };
  return (
    <div className="buttonContainer">
      <button className="buttonAdd" onClick={onClickButton}>
        +
      </button>
    </div>
  );
}
export { CreateTodoButton };
