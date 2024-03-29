export default function Tarjeta({ titulo, descripcion, onSend }) {
  return (
    <div>
      <h1>Titulo: {titulo}</h1>
      <h2>Descripcion: {descripcion}</h2>
      <button onClick={onSend}>Enviar</button>
    </div>
  );
}
