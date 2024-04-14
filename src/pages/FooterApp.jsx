import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";


const FooterApp = () => {
  return (
    <Footer className="bg-custom-blue text-white rounded-none">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-center">

          <div className="flex flex-col items-center justify-center pt-9" style={{ justifyContent: "center" }}>
            <h2>Lucile Pelou</h2>
            <h3>IT Student</h3>
            <Footer.LinkGroup className="footer-links pt-9 pb-9 gap-4">
              <Footer.Link style={{ textDecoration: 'underline', textUnderlineOffset: '0.2em', color: "#75C4EA", fontSize: "20px" }} href="#">Home</Footer.Link>
              <Footer.Link style={{ textDecoration: 'underline', textUnderlineOffset: '0.2em', color: "#75C4EA", fontSize: "20px" }} href="#/portfolio">Portfolio</Footer.Link>
              <Footer.Link style={{ textDecoration: 'underline', textUnderlineOffset: '0.2em', color: "#75C4EA", fontSize: "20px" }} href="https://clarisse78.github.io/WebDesignPortfolio">Previous WDP</Footer.Link>
              <Footer.Link style={{ textDecoration: 'underline', textUnderlineOffset: '0.2em', color: "#75C4EA", fontSize: "20px" }} href="#/contact">Contact</Footer.Link>
            </Footer.LinkGroup>
            <Footer.LinkGroup className="footer-icons pb-9 gap-3">
              <Footer.Link style={{ color: "#7DD3FC" }} href="https://www.linkedin.com/in/lucile-pelou/" target="_blank">
                <i className="fab fa-linkedin text-3xl"></i>
              </Footer.Link>
              <Footer.Link style={{ color: "#7DD3FC" }} href="https://github.com/Clarisse78" target="_blank">
                <i className="fab fa-github-square text-3xl"></i>
              </Footer.Link>
              <Footer.Link style={{ color: "#7DD3FC" }} href="https://discord.com/users/377784448243990538" target="_blank">
                <i className="fa-brands fa-discord text-3xl"></i>
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <p className="privacy pb-11">
          <Footer.Link style={{ textDecoration: 'underline', textUnderlineOffset: '0.2em', color: "#35AADF", fontSize: "20px" }} href="privacy.html">Privacy &amp; Legal</Footer.Link>
        </p>
      </div>
    </Footer>
  );
};

export default FooterApp;