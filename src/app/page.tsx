export default function Home() {
  const html = `
    <main class="main">
      <!-- Hero Section -->
      <section id="hero" class="hero section dark-background">
        <img src="/assets/img/hero-bg.jpg" alt="" data-aos="fade-in" class="" />

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <h2>Dagim Abraham</h2>
          <p>
            I'm
            <span
              class="typed"
              data-typed-items="A Full-Stack Developer, A Mobile Application Developer,A Freelancer"
            >
            </span>
            <span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
          </p>
        </div>
      </section>

      <!-- About Section -->
      <section id="about" class="about section bg-light py-5">
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-4 col-md-5 d-flex justify-content-center mb-4 mb-md-0">
              <img src="/assets/img/my-profile-img.jpg" class="img-fluid rounded-circle shadow-lg" alt="Dagim Abraham" style="width: 250px; height: 250px; object-fit: cover; border: 6px solid #fff;"/>
            </div>

            <div class="col-lg-8 col-md-7">
              <div class="p-4 rounded-3 h-100 custom-about-bg" style="--bs-bg-opacity: 0.75; background: linear-gradient(to right, #e0e0e0, #f8f8f8);">
                <h2 class="section-title text-md-start mb-3">About Me</h2>

                <p class="lead text-md-start mb-4">I'm Dagim Abraham, a 22-year-old Full-Stack Engineer with a passion for building modern, scalable web and mobile applications. As a current UV Student, I am actively seeking opportunities to apply my technical skills to real-world challenges.</p>
                <p class="lead text-md-start mb-4">I primarily work with the MERN stack(MongoDB, Express, React, Node.js) for robust backends and dynamic front-ends, and I specialize in cross-platform mobile development using Flutter. I focus on writing clean, optimized and readable code.</p>

                <div class="d-flex justify-content-start flex-wrap gap-3">
                  <a href="/assets/docs/your-cv.pdf" class="btn btn-outline-dark btn-lg shadow-sm" download>
                    <i class="bi bi-download me-2"></i> Download CV
                  </a>
                  <a href="#contact" class="btn btn-primary btn-lg custom-hire-btn shadow-sm">
                    <i class="bi bi-send-fill me-2"></i> Hire Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Portfolio Section -->
      <section id="portfolio" class="portfolio section light-background p-5 custom-shadow-elevate">
        <div class="container section-title text-center mb-5" data-aos="fade-up">
          <h2>Portfolio</h2>
          <p class="lead text-muted">Selected projects — live links included.</p>
        </div>
        <div class="container">
          <div class="row gy-4 justify-content-center">
            <div class="col-lg-4 col-md-6 portfolio-item">
              <div class="portfolio-content h-100">
                <img src="/assets/img/portfolio/app-1.jpg" class="img-fluid" alt="Todo List" />
                <div class="portfolio-info">
                  <h4>Todo List</h4>
                  <p>React / Netlify</p>
                  <a href="https://dagim-abraham-todo-list.netlify.app/" target="_blank" rel="noopener noreferrer" class="details-link">Visit</a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item">
              <div class="portfolio-content h-100">
                <img src="/assets/img/portfolio/product-1.jpg" class="img-fluid" alt="Apple Home Clone" />
                <div class="portfolio-info">
                  <h4>Apple Home Page Clone</h4>
                  <p>React / Netlify</p>
                  <a href="https://dagimabraham-react-api.netlify.app/" target="_blank" rel="noopener noreferrer" class="details-link">Visit</a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item">
              <div class="portfolio-content h-100">
                <img src="/assets/img/portfolio/app-2.jpg" class="img-fluid" alt="Amazon Clone" />
                <div class="portfolio-info">
                  <h4>Amazon Clone (Front-end)</h4>
                  <p>Next.js / Netlify</p>
                  <a href="https://dagim-abraham-nextjs.netlify.app/" target="_blank" rel="noopener noreferrer" class="details-link">Visit</a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item">
              <div class="portfolio-content h-100">
                <img src="/assets/img/portfolio/product-2.jpg" class="img-fluid" alt="Netflix Clone" />
                <div class="portfolio-info">
                  <h4>Netflix Clone</h4>
                  <p>React / Netlify</p>
                  <a href="https://dagimabraham-react-netfliks-clone.netlify.app/" target="_blank" rel="noopener noreferrer" class="details-link">Visit</a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item">
              <div class="portfolio-content h-100">
                <img src="/assets/img/portfolio/product-3.jpg" class="img-fluid" alt="EzyCart" />
                <div class="portfolio-info">
                  <h4>EzyCart</h4>
                  <p>E-commerce / Netlify</p>
                  <a href="https://dagimabraham-ezycart.netlify.app/" target="_blank" rel="noopener noreferrer" class="details-link">Visit</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section id="contact" class="contact section py-5">
        <div class="container section-title text-center mb-5" data-aos="fade-up">
          <h2 class="display-5 fw-bold text-dark">Contact</h2>
          <p class="text-secondary lead">Let's connect and build something great together.</p>
        </div>

        <div class="container" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4">
            <div class="col-lg-5">
              <div class="info-wrap">
                <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                  <i class="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Address</h3>
                    <p>Addis Ababa Science & Technology University (AASTU), Kilinto, Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                  <i class="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>+251 979 282 367</p>
                  </div>
                </div>

                <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                  <i class="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>dagimabraham79@gmail.com</p>
                  </div>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.3409151590214!2d38.79093409999999!3d8.8741131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85ab11a51163%3A0x8670c538a7c20c03!2sAddis%20Ababa%20Science%20and%20Technology%20University%20(AASTU)!5e0!3m2!1sen!2set!4v1700000000000!5m2!1sen!2set" frameborder="0" style="border: 0; width: 100%; flex-grow: 1; min-height: 270px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

              </div>
            </div>

            <div class="col-lg-7">
              <form action="/api/contact" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="200">
                <div class="row gy-4">
                  <div class="col-md-6">
                    <label for="name-field" class="pb-2">Your Name</label>
                    <input type="text" name="name" id="name-field" class="form-control" placeholder="Enter your name" required />
                  </div>

                  <div class="col-md-6">
                    <label for="email-field" class="pb-2">Your Email</label>
                    <input type="email" class="form-control" name="email" id="email-field" placeholder="Enter your email" required />
                  </div>

                  <div class="col-md-12">
                    <label for="subject-field" class="pb-2">Subject</label>
                    <input type="text" class="form-control" name="subject" id="subject-field" placeholder="Project Inquiry, Internship, etc." required />
                  </div>

                  <div class="col-md-12">
                    <label for="message-field" class="pb-2">Message</label>
                    <textarea class="form-control" name="message" rows="8" id="message-field" placeholder="Write your detailed message here..." required></textarea>
                  </div>

                  <div class="col-md-12 text-center">
                    <div class="loading">Sending...</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent successfully! Thank you!</div>

                    <button type="submit" class="btn btn-primary"><i class="bi bi-arrow-right-circle-fill me-2"></i> Send Message</button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

    </main>
  `;

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
