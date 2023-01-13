import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container footer-wrap">
        <footer>
          <img src="/assets/hero-logo.png" alt="" />
          <div className="foot-links">
            <a href="/#hero">Home</a>
            <a href="/#about">About</a>
            <a href="/#collection">Collection</a>
            <a href="/#roadmap">Roadmap</a>
            <a href="/#team">Team</a>
            <a href="/#faq">FAQ</a>
          </div>
          <div className="social-footer">
            <h3 className="trajan">Join the community</h3>
            <div className="foot-social-links">
              <a href="https://discord.com/invite/F3B4sY5RtN" target={"blank"}>
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <a
                href="https://twitter.com/godsofasgardp2e?s=21&t=D4tQYm0V4VeQtorulTCF9g"
                target={"blank"}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </footer>
      </div>
      <div className="copy-div">
        <div>
          {" "}
          <p>©Gods of Asgard. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
