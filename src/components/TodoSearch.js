import React from "react";
import "./styles_component/TodoSearch.css";
function TodoSearch({searchParam, setSearchParam}) {
  const filterTodo = (event) => {
    console.log("update search param");
    console.log(event.target.value);
    setSearchParam(event.target.value);
  };
  return (
    <div className="inputContainer">
      <input
        type="text"
        placeholder="search todo"
        className="searchBar"
        value={searchParam}
        onChange={filterTodo}
      ></input>
    </div>
  );
}
export { TodoSearch };
