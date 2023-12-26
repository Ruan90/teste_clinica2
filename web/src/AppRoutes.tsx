import { BrowserRouter, Route, Routes } from "react-router-dom";
import Paciente from "./pages/pacientes";
import AdicionarPaciente from "./pages/pacientes/AdicionarPaciente";

function AppRoutes() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path = "/paciente" element={<Paciente />} />
            <Route index element={<Paciente />} />
            <Route path = "/paciente/adicionar" element = {<AdicionarPaciente />} />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;