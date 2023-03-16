import logo from './logo.svg';
import styles from './App.module.css';
import { Routes, Route, Router } from "@solidjs/router";
import Product from './pages/Product';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/product" component={Product} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
