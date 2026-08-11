import {
  FaUtensils,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row">

          {/* Left Section */}
          <div className="col-md-4 mb-4">
            <h2 className="footer-logo">
              <FaUtensils className="me-2" />
              FoodExpress
            </h2>

            <p className="footer-text">
              Delicious food delivered to your doorstep.
              <br />
              Fast, Fresh and Affordable.
            </p>
          </div>

          {/* Center Section */}
          <div className="col-md-4 mb-4 text-center">

            <h3>Contact Us</h3>

            <p>
              <FaMapMarkerAlt className="icon" />
              Chennai, Tamil Nadu, India
            </p>

            <p>
              <FaPhone className="icon" />
              +91 98765 43210
            </p>

            <p>
              <FaEnvelope className="icon" />
              support@foodexpress.com
            </p>

          </div>

          {/* Right Section */}
          <div className="col-md-4 mb-4 text-center">

            <h3>Follow Us</h3>

            <div className="social-icons">

              <FaFacebook />

              <FaInstagram />

              <FaTwitter />

            </div>

          </div>

        </div>

        <hr />

        <p className="copyright">
          © 2026 FoodExpress. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;