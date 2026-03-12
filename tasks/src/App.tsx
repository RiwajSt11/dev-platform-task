import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/authentication/Login";
import { Register } from "./pages/authentication/Register";
import Landing from "./pages/Landing";
import { Home } from "./pages/Home";
import { ISA } from "./pages/ISA";
import ResourcesLanding from "./pages/ResourcesLanding";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/home/internet-software-architecture"
            element={<ISA />}
          />
          <Route path="/Resources" element={<ResourcesLanding />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
