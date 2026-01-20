"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header dark-background d-flex flex-column">
      <div className="profile-img">
        <img
          src="/assets/img/my-profile-img.jpg"
          alt=""
          className="img-fluid rounded-circle"
        />
      </div>

      <Link
        href="/"
        className="logo d-flex align-items-center justify-content-center"
      >
        <h1 className="sitename">Dagim Abraham</h1>
      </Link>

      <div className="social-links text-center">
        <a href="https://x.com/dagim79" className="twitter">
          <i className="bi bi-twitter-x"></i>
        </a>
        <a href="https://www.facebook.com/" className="facebook">
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.instagram.com/" className="instagram">
          <i className="bi bi-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/feed/" className="linkedin">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/dagimAB" className="linkedin">
          <i className="bi bi-github"></i>
        </a>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <a href="#hero" className="active">
              <i className="bi bi-house navicon"></i>Home
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="bi bi-person navicon"></i> About
            </a>
          </li>
          <li>
            <a href="#skills">
              <i className="bi bi-code-slash navicon"></i> Skills
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <i className="bi bi-images navicon"></i> Portfolio
            </a>
          </li>
          <li>
            <a href="#services">
              <i className="bi bi-hdd-stack navicon"></i> Services
            </a>
          </li>
          <li>
            <a href="#testimonials">
              <i className="bi bi-quote navicon"></i> Testimonials{" "}
            </a>
          </li>
          <li className="dropdown">
            <a href="#">
              <i className="bi bi-menu-button navicon"></i>{" "}
              <span>Dropdown</span>{" "}
              <i className="bi bi-chevron-down toggle-dropdown"></i>
            </a>
            <ul>
              <li>
                <a href="#">Dropdown 1</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#contact">
              <i className="bi bi-envelope navicon"></i> Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
