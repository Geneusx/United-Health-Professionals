import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const go = () => setOpen(false);
  return (
    <header>
      <div className="wrap nav">
        <a className="brand" href="#top">
          <span className="bn">
            <img
              src="logo.png"
              alt="United Health Professionals"
              width="200"
              height="50"
            />
          </span>
        </a>
        <button
          className="menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
        <nav className={"links" + (open ? " open" : "")} aria-label="Main">
          <a className="on" href="#top" onClick={go}>
            Home
          </a>
          <a href="#about" onClick={go}>
            About Us
          </a>
          <a href="#supports" onClick={go}>
            Services
          </a>
          <a href="#how" onClick={go}>
            How it works
          </a>
          <a href="#contact" onClick={go}>
            Contact
          </a>
          <a className="btn sun" href="#contact" onClick={go}>
            Book Appointment
          </a>
        </nav>
      </div>
    </header>
  );
}
