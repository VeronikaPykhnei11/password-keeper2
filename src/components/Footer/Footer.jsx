import "./Footer.scss";
import GoogleIcon from "../../assets/images/GoogleIcon.png";
import LinkedInIcon from "../../assets/images/LinkedInIcon.png";
import FacebookIcon from "../../assets/images/FacebookIcon.png";
import InstagramIcon from "../../assets/images/InstagramIcon.png";
import socialIcon from "../../assets/images/social-icon.png";
import FooterInfo from "./FooterInfo";
import FooterIcon from "./FooterIcon";

export default function Footer() {
  const icons = [GoogleIcon, LinkedInIcon, FacebookIcon, InstagramIcon];
  const footerInfo = [
    {
      header: "Get Started",
      items: ["Features", "Pricing", "Contact", "Talk to Sales"],
    },
    {
      header: "Our Company",
      items: ["Our Team", "Blog", "FAQ", "Press"],
    },
    {
      header: "Resources",
      items: ["Help Center", "Integrations", "Terms of Service", "Changelog"],
    },
  ];
  return (
    <div className="container-fluid footer-wrapper mt-5 px-0 row d-flex justify-content-between">
      <div className="col-lg-2 d-flex justify-content-start image-wrapper">
        <img src={socialIcon} className="img-fluid" />
      </div>
      <FooterInfo footerInfo={footerInfo} />
      <div className="col-lg-4 mt-5 d-flex align-items-center flex-column">
        <h4>Join us. You will like it.</h4>
        <FooterIcon icons={icons} />
        <div className="mt-4 d-flex flex-column align-items-center">
          <p>&copy; Copyright Crack_It. All Rights Reserved. </p>
          <p>Powered by Create Ecommerce</p>
        </div>
      </div>
    </div>
  );
}
