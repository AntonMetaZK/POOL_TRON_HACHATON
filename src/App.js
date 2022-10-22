import './App.css';
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Pool from "./pages/Pools";
import {Box} from "@mui/material";


function App() {
  return (
      <Box>
          <Header />
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/main" element={<Layout />} />
              <Route exact path="/pools" element={<Pool />} />
          </Routes>
      </Box>


  );
}

export default App;
