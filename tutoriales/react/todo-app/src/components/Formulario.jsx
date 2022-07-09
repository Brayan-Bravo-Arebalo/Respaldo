import Swal from "sweetalert2";
import { useFormulario } from "../hooks/useFormulario";

function Formulario({agregarTodo}) {
  const inicialState = {
    nombre: "todo 1",
    descripcion: "descripcion1",
    estado: "pendiente",
    prioridad: false,
  };

  const [inputs, handlerChange, reset] = useFormulario(inicialState)

  const { nombre, descripcion, estado, prioridad } = inputs;
  
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!nombre.trim()) {
      e.target[0].focus();
      Swal.fire({
        title: "Error!",
        text: "nombre en blanco",
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    }
    if (!descripcion.trim()) {
      e.target[1].focus();
      Swal.fire({
        title: "Error!",
        text: "Descripcion en blanco",
        icon: "error",
      });
      return;
    }

    Swal.fire({
      title: "Exito!",
      text: "Tarea agregada",
      icon: "success",
    });

    agregarTodo({
      nombre: nombre,
      descripcion: descripcion,
      estado: estado == 'pendiente' ? false : true,
      prioridad: prioridad,
      id: Date.now(),
    })

    reset();
  };
  return (
    <>
      <h3>Agregar TODO</h3>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          name="nombre"
          placeholder="ingrese todo"
          value={nombre}
          onChange={handlerChange}
        />
        <textarea
          name="descripcion"
          className="form-control mb-2"
          placeholder="ingrese descripcion"
          value={descripcion}
          onChange={handlerChange}
        />
        <select
          name="estado"
          className="form-control mb-2"
          value={estado}
          onChange={handlerChange}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <div className="form-check">
          <input
            type="checkbox"
            name="prioridad"
            className="form-check-input"
            checked={prioridad}
            onChange={handlerChange}
          />
          <label htmlFor="flexcheckDefault" className="form-check-label">
            Prioritario
          </label>
        </div>
        <button className="btn btn-primary" type="submit">
          Agregar
        </button>
      </form>
    </>
  );
}

export default Formulario;
