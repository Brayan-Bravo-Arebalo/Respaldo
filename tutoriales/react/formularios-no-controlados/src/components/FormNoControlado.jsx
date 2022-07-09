import { useRef } from "react";

const FormNoControlado = () => {
  
   const formulario =  useRef(null)

   const handleSubmit = e =>{
       e.preventDefault();
        const datos = new FormData(formulario.current)
        console.log(...datos.entries());

        const objetoDato = Object.fromEntries([...datos.entries()]);
        console.log(objetoDato);


        const {todoDescripcion,todoEstado,todoname } = objetoDato;
        if(todoDescripcion.trim() === "" || todoEstado.trim === "" || todoname === ""){
           console.log("estado vacio"); 
           return
        }

        console.log("validacion completa");
   }
  
    return (
    <>
      <h2>no controlados</h2>
      <form ref={formulario} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingrese Todo"
          name="todoName"
          className="form-control mb-2"
          defaultValue="Desctipcion tarea 1"
        />
        <textarea
          name="todoDescripcion"
          className="form-control mb-2"
          placeholder="ingrese descrpcion"
          defaultValue="Pendiente"
        ></textarea>
        <select name="todoEstado" className="form-control mb-2">
          <option value="pendiente">Pendiente</option>
          <option value="completada">Completada</option>
        </select>
        <button className="btn btn-primary">Agregar</button>
      </form>
    </>
  );
};

export default FormNoControlado;
