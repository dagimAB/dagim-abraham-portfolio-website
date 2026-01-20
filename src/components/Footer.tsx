export default function Footer() {
  return (
    <footer id="footer" className="footer position-relative py-5">
      <div className="container footer-top">
        <div className="row gy-4 mb-5 about-social-contact-wrapper">
          <div className="col-lg-5 col-md-12 footer-about">
            <a href="/" className="logo d-flex align-items-center">
              <span className="sitename">Dagim.Dev</span>
            </a>
            <p className="mission-statement">
              I am a Full-Stack Developer creating beautiful, functional
              websites and applications that help businesses grow and succeed in
              the digital world.
            </p>
            <div className="social-links d-flex mt-4">
              <a href="https://x.com/dagim79" className="icon-link me-2">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://www.facebook.com/" className="icon-link me-2">
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                className="icon-link me-2"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com/dagimAB" className="icon-link me-2">
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 offset-lg-1 footer-contact">
            <h4 className="footer-heading">Contact</h4>
            <p>
              <i className="bi bi-envelope me-2"></i> Email:
              dagimabraham79@gmail.com
            </p>
            <p>
              <i className="bi bi-phone me-2"></i> Phone: +251 979 282 367
            </p>
            <p>
              <i className="bi bi-geo-alt me-2"></i> Location: Addis Ababa,
              Ethiopia
            </p>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li>
                <a href="#hero">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container copyright text-center py-4 mt-5">
          <div className="row justify-content-between">
            <div className="col-md-6 text-md-start">
              &copy; 2025 Dagim Abraham. All rights reserved.
            </div>
            <div className="col-md-6 text-md-end footer-policy-links">
              <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
