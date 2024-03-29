import { Link } from "react-router-dom";
import Tarjeta from "./Tarjeta";

export default function Test() {
  const enviarAlgo = () => {
    console.log("Enviado...");
  };
  return (
    <>
      {/* <h1>Redireccionar con Link Aqui</h1>

      <Link to="/redireccionar">Redireccionar</Link>
       */}

      <Tarjeta titulo="Tarjeta 1" descripcion="Desc. 1" onSend={enviarAlgo} />
    </>
  );
}
