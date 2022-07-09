import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

const Login = () => {
  const { user,setUser } = useContext(UserContext);

  return (
    <div>
      Login
      <h2>{user ? "En Linea" : "Offline"}</h2>
      <button className="btn btn-dark" onClick={()=> setUser(true)}>Acceder</button>
    </div>
  );
};

export default Login;
