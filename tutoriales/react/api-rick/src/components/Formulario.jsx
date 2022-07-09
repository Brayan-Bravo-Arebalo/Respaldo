import Swal from "sweetalert2";
import { useFormulario } from "../hooks/useFormulario";

const Formulario = ({ setNombrePersonaje }) => {
  const [inputs, handleChange, reset] = useFormulario({
    nombre: "",
  });

  

  const { nombre } = inputs;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nombre);
    if (!nombre.trim()) {
      return Swal.fire({
        title: "Error!",
        text: "Ingrese Nombre",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }

    setNombrePersonaje(nombre.trim().toLowerCase());
    reset();
  };

  return (
    <form>
      <input
        name="nombre"
        type="text"
        placeholder="Ingrese personaje"
        className="form-control mb-2"
        value={nombre}
        onChange={handleChange}
      />
      <button className="btn btn-danger" type="submit" onClick={handleSubmit}>
        buscar
      </button>
    </form>
  );
};

export default Formulario;
