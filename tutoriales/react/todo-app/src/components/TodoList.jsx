import { useEffect, useState } from "react";
import Formulario from "./Formulario";
import Todo from "./Todo";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
    
  }, []);

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos]);

  const agregarTodo = (todo) => {
    setTodos((old) => [...old, todo]);
  };

  const eliminar = (id) => {
    setTodos((old) => old.filter((item) => item.id !== id));
  };

  const editarTodo = (id) => {
    const editarTodos = todos.map((item) =>
      item.id === id ? { ...item, estado: !item.estado } : item
    );

    setTodos(editarTodos);
  };

  return (
    <>
      <Formulario agregarTodo={agregarTodo} />
      <ul className="list-group list-group-numbered">
        {todos.map((item) => (
          <Todo
            key={item.id}
            todo={item}
            eliminar={eliminar}
            editarTodo={editarTodo}
          />
        ))}
      </ul>
    </>
  );
}

export default TodoList;
