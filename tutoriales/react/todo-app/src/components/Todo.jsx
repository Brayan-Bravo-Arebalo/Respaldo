const Todo = ({ todo, eliminar, editarTodo }) => {
  return (
    <>
      {" "}
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            {todo.nombre} {todo.estado ? "(Finalizado)" : "(Pendiente)"}
          </div>
          {todo.descripcion}
          <div>
              <button className="btn btn-danger me-2" onClick={()=>eliminar(todo.id)}>eliminar</button>
              <button className="btn btn-warning" onClick={()=>editarTodo(todo.id)}>Editar</button>
          </div>
        </div>
        <span className="badge bg-primary rounded-pill">
          {todo.prioridad && "Prioritario"}
        </span>
      </li>
    </>
  );
};

export default Todo;
