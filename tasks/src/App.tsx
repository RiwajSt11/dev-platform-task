import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/authentication/Login";
import { Register } from "./pages/authentication/Register";
import Landing from "./pages/Landing";
import { Home } from "./pages/Home";
import { ISA } from "./pages/isa/ISA";
import { ISAWeek2 } from "./pages/isa/ISAWeek2";
import { ISAWeek3 } from "./pages/isa/ISAWeek3";
import { ExtraLearning } from "./pages/ExtraLearning";
import { SubmitResource } from "./pages/SubmitResource";
import { Profile } from "./pages/Profile";
import { AuthLayout } from "./layouts/AuthLayout";
import { MainLayout } from "./layouts/MainLayout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route
              path="/home/internet-software-architecture"
              element={<ISA />}
            />
            <Route
              path="/home/internet-software-architecture/week2"
              element={<ISAWeek2 />}
            />
            <Route
              path="/home/internet-software-architecture/week3"
              element={<ISAWeek3 />}
            />
            <Route path="/extra-learning" element={<ExtraLearning />} />
            <Route path="/submit-resource" element={<SubmitResource />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
