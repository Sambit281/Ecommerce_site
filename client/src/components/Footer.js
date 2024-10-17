import React from "react";
// import './Footer.css'; // Assuming you create this CSS file for styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Company</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Health Article</li>
                        <li>All Medicines</li>
                        <li>Need Help</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Social</h4>
                    <div className="social-icons">
                        <a href="#"><img src="/path/to/facebook-icon.png" alt="Facebook" /></a>
                        <a href="#"><img src="/path/to/youtube-icon.png" alt="YouTube" /></a>
                        <a href="#"><img src="/path/to/linkedin-icon.png" alt="LinkedIn" /></a>
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Legal</h4>
                    <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Editorial Policy</li>
                        <li>Returns & Cancellations</li>
                    </ul>
                </div>
                <div className="footer-section subscribe">
                    <h4>Subscribe</h4>
                    <p>Claim your complimentary health and fitness tips subscription and stay updated on our newest promotions.</p>
                    <div className="subscribe-box">
                        <input type="email" placeholder="Enter your email ID" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="footer-section">
                    <h4>Download Truemeds</h4>
                    <p>Manage your health with ease Download Truemeds today!</p>
                    <p>Get easy access to medicine refills, health information, and more. With our app, you'll never have to wait in line again. Download now and start taking control of your health.</p>
                    {/* <a href="#"><img src="/path/to/google-play-icon.png" alt="Google Play" /></a> */}
                </div>
                <div className="footer-section contact">
                    <h4>Contact Us</h4>
                    <p>Our customer representative team is available 7 days a week from 9 am - 9 pm.</p>
                    <p>Email: support@truemeds.in</p>
                    <p>Phone: 09240250346</p>
                    <p>Version: v3.4.2</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
