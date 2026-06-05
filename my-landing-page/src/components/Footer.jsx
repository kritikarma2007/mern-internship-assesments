import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">TechNova</h2>
          <p className="footer-desc">
            Building next-generation digital products for startups and enterprises.
          </p>
          <div className="socials">
            <a href="#" className="social-link" title="GitHub">
              <FaGithub />
            </a>
            <a href="#" className="social-link" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" className="social-link" title="Instagram">
              <FaInstagram />
            </a>
            <a href="#" className="social-link" title="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">API Docs</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li><a href="mailto:support@technova.com">support@technova.com</a></li>
            <li><a href="tel:+919876543210">+91 98765 43210</a></li>
            <li>New Delhi, India</li>
          </ul>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p className="copyright">© 2026 TechNova. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <span>•</span>
          <a href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;