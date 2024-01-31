import { BrowserRouter, Route, Routes } from "react-router-dom";
import Test from "./components/Test";
import Redireccion from "./components/Redireccion";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Test />} />
        <Route path="/redireccionar" element={<Redireccion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
