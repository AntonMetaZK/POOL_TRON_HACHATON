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
              <Route exact path="/" element={<Home />} />
              <Route exact path="/main" element={<Layout />} />
              <Route exact path="/pools" element={<Pool />} />
              <Route exact path="/pools/:id" element={<DepositWindowPage />} />
          </Routes>
      </>

  );
}

export default App;
