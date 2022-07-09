import Contador from "./components/contador";
import Frutas from "./components/frutas";

const App = () => {
  const saludo = "saludo desde constante";
  const clasesObjetos = {
    primary: "text-primary",
    danger: "text-danger",
  };

  const user = true;

  const SaludoBienvenida = () => {
    return <h2 className="text-success">Bienvenido </h2>;
  };
  const SaludoDespedida = () => {
    return <h2 className="text-danger">Adioos </h2>;
  };

  const darclick = (nombre) => {
    console.log(`click ${nombre}`);
  };

  const frutas = ["manzana", "frutilla", "platano"];

  return (
    <div className="container">
      <Contador />

      <p className={clasesObjetos.primary}>{saludo}</p>
      {user ? <SaludoBienvenida /> : <SaludoDespedida />}

      <Frutas frutas={frutas} />

      <button className="btn btn-primary" onClick={() => darclick("brayan")}>
        btn
      </button>
    </div>
  );
};

export default App;
