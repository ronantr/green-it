import { A } from "@solidjs/router";

export default function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="#">
              <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Audi" />
            </a>
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-end">
              <A className="navbar-item" href="/">Home</A>
              <A className="navbar-item" href="/product">Product</A>
              <A className="navbar-item" href="/services">Services</A>
              <A className="navbar-item" href="/contact">Contact Us</A>
            </div>
          </div>
        </nav>
  )
}