import logo from './logo.svg';
import styles from './App.module.css';
import { Routes, Route, Router } from "@solidjs/router";
import Product from './pages/Product';
import Home from './pages/home/Home';
import Navbar from './components/Navbar';

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
    </Routes>
    </>
  );
}

export default App;
