import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";


const FooterApp = () => {
  // return (
  //   <Footer container>
  //     <div className="w-full">
  //       <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
  //         <div>
  //           <Footer.Brand
  //             href="https://flowbite.com"
  //             src="https://flowbite.com/docs/images/logo.svg"
  //             alt="Flowbite Logo"
  //             name="Flowbite"
  //           />
  //         </div>
  //         <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
  //           <div>
  //             <Footer.Title title="about" />
  //             <Footer.LinkGroup col>
  //               <Footer.Link href="#">Flowbite</Footer.Link>
  //               <Footer.Link href="#">Tailwind CSS</Footer.Link>
  //             </Footer.LinkGroup>
  //           </div>
  //           <div>
  //             <Footer.Title title="Follow us" />
  //             <Footer.LinkGroup col>
  //               <Footer.Link href="#">Github</Footer.Link>
  //               <Footer.Link href="#">Discord</Footer.Link>
  //             </Footer.LinkGroup>
  //           </div>
  //           <div>
  //             <Footer.Title title="Legal" />
  //             <Footer.LinkGroup col>
  //               <Footer.Link href="#">Privacy Policy</Footer.Link>
  //               <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
  //             </Footer.LinkGroup>
  //           </div>
  //         </div>
  //       </div>
  //       <Footer.Divider />
  //       <div className="w-full sm:flex sm:items-center sm:justify-between">
  //         <Footer.Copyright href="#" by="Flowbite™" year={2022} />
  //         <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
  //           <Footer.Icon href="#" icon={BsFacebook} />
  //           <Footer.Icon href="#" icon={BsInstagram} />
  //           <Footer.Icon href="#" icon={BsTwitter} />
  //           <Footer.Icon href="#" icon={BsGithub} />
  //           <Footer.Icon href="#" icon={BsDribbble} />
  //         </div>
  //       </div>
  //     </div>
  //   </Footer>
  // );

  return (
    <Footer className="bg-custom-blue text-white rounded-none">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-center">

          <div className="flex flex-col items-center justify-center pt-9" style={{ justifyContent: "center" }}>
            <h2>Lucile Pelou</h2>
            <h3>IT Student</h3>
            <Footer.LinkGroup className="footer-links pt-9 pb-9 gap-4">
              <Footer.Link style={{ textDecoration: 'underline', textUnderlineOffset: '0.2em', color: "#75C4EA", fontSize: "20px" }} href="#">Home</Footer.Link>
              <Footer.Link style={{ textDecoration: 'underline', textUnderlineOffset: '0.2em', color: "#75C4EA", fontSize: "20px" }} href="portfolio/index.html">Portfolio</Footer.Link>
              <Footer.Link style={{ textDecoration: 'underline', textUnderlineOffset: '0.2em', color: "#75C4EA", fontSize: "20px" }} href="store/index.html">Store</Footer.Link>
              <Footer.Link style={{ textDecoration: 'underline', textUnderlineOffset: '0.2em', color: "#75C4EA", fontSize: "20px" }} href="contact/index.html">Contact</Footer.Link>
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