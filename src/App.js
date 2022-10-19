import './App.css';
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="main" element={<Layout />} />
      </Routes>
  );
}

export default App;
