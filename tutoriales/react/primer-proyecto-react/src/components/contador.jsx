import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  const aumentar = () => {
    setContador(contador + 1)
    console.log(contador);
  };
  const disminuir = () =>{
      setContador(contador -1)
  }

  return (
    <>
      <h2>contador</h2>
      <h3>{contador}</h3>
      <button className="btn btn-danger" onClick={aumentar}>
        Aumentar
      </button>
      
      <button className="btn btn-dark" onClick={disminuir}>Disminuir</button>
    </>
  );
};

export default Contador;
