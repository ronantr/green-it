import logo from "./logo.svg";
import styles from "./App.module.css";
import { Routes, Route, Router } from "@solidjs/router";
import Product from "./pages/product/Product";
import AudiRS7 from "./pages/product/AudiRS7";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header className="header">
        <Navbar />
      </header>

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/product" component={Product} />
        <Route path="/audirs7" component={AudiRS7} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
