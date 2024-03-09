import Books from "./pages/Books";
import AddUser from "./components/addUser/AddUser";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import SearhUser from "./components/SearhUser";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/adduser" element={<AddUser />} />
        <Route path="/" element={<Books />} />
        <Route path="/searchuser" element={<SearhUser />} />
      </Routes>
    </BrowserRouter>
  );
}
