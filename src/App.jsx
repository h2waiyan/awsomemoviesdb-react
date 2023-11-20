import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar/navbar";
import Home from "./home/home";
import { DetailsPage } from "./details/details";

function App() {
  return (
    <Router>
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
