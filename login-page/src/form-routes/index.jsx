// Importando funções do Router
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

// Importando components
import FirstPage from "../first-page";
import SecondPage from "../second-page";
import ThirdPage from "../third-page";
import { Global } from "../global-settings/global";

function FormRoutes() {
  return (
    <>
      <Global />
      <Router>
        <Routes>
          <Route exact path="/" element={<FirstPage />} />
          <Route exact path="/SecondPage" element={<SecondPage />} />
          <Route exact path="/ThirdPage" element={<ThirdPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default FormRoutes