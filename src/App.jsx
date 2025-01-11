import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import Home from "./components/Home Page/Home";
import LandingPage from "./components/Landing Page/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="product/:brand/:id" element={<LandingPage />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
