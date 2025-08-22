
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGlobe } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
  
        <div className="footer-col">
          <h6>Useful Links</h6>
          <ul className="footer-links">
            <li>Blog</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>FAQs</li>
            <li>Security</li>
          </ul>
        </div>

        <div className="footer-col">
          <h6>Categories</h6>
          <ul className="footer-links">
            <li>Vegetables & Fruits</li>
            <li>Cold Drinks & Juices</li>
            <li>Bakery & Biscuits</li>
            <li>Dry Fruits, Masala & Oil</li>
            <li>Pharma & Wellness</li>
          </ul>
        </div>

        <div className="footer-col">
          <h6>Popular</h6>
          <ul className="footer-links">
            <li>Dairy & Breakfast</li>
            <li>Instant & Frozen Food</li>
            <li>Sauces & Spreads</li>
            <li>Organic & Premium</li>
            <li>Munchies</li>
          </ul>
        </div>

        <div className="footer-col">
          <h6>Top Brands</h6>
          <ul className="footer-links">
            <li>Amul</li>
            <li>Nestle</li>
            <li>Britannia</li>
            <li>Patanjali</li>
            <li>Tata</li>
          </ul>
        </div>

        <div className="footer-col">
          <h6>Support</h6>
          <ul className="footer-links">
            <li>Contact Us</li>
            <li>Partner with us</li>
            <li>Franchise</li>
            <li>Seller</li>
            <li>Warehouse</li>
          </ul>
        </div>

        <div className="footer-col">
          <h6>More</h6>
          <ul className="footer-links">
            <li>Resources</li>
            <li>Recipes</li>
            <li>Bistro</li>
            <li>Careers</li>
            <li>Gift Cards</li>
          </ul>
        </div>
      </div>

 
      <div className="footer-bottom">
        <p>© Blink Commerce Private Limited, 2016-2025</p>

        <div className="download-app">
          <span>Download App</span>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
              alt="App Store"
              className="store-badge"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="store-badge"
            />
          </div>
        </div>

        <div className="social-icons">
          <FaFacebookF />
          <FaXTwitter />
          <FaInstagram />
          <FaLinkedinIn />
          <FaGlobe />
        </div>
      </div>

      <div className="footer-note">
        <p>
          “Blinkit” is owned & managed by "Blink Commerce Private Limited" and
          is not related, linked or interconnected in whatsoever manner or
          nature, to “GROFFR.COM” which is a real estate services business
          operated by “Redstone Consultancy Services Private Limited”.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
