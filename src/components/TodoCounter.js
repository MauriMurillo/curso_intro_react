import React from "react";
import './styles_component/TodoCounter.css'
function TodoCounter({total, done}){
  return(
    <h1 className="mainHeading"> Has completado {done} de {total} ToDos </h1>
  );
}
export { TodoCounter };