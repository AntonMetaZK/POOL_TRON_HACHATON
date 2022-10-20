import './App.css';
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Header from "./components/Header";
import Pool from "./pages/Pools";
import DepositWindow from "./components/DepositeWindow";
import DepositWindowPage from "./pages/DepositeWindow";

function App() {
  return (
      <>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="main" element={<Layout />} />
              <Route path="pools" element={<Pool />} />
              <Route path="pools/:id" element={<DepositWindowPage />} />
          </Routes>
      </>

  );
}

export default App;
