import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src={require("../assets/images/me.JPG")}
            alt="Profile picture of Usama Ahmed"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/ahm3d19"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/usama-ahmed-989303264"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:ahmed.ua368@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon />
            </a>
          </div>
          <h1>Usama Ahmed</h1>
<<<<<<< HEAD
          <p>
            4+ Year Commercial Experience | Full-Stack React Native Developer |
            Mobile Apps for iOS & Android
          </p>
=======
          <p>Full-Stack React Native Developer | 4+ Year Commercial Experience | Cross-Platform Mobile Apps for iOS & Android</p>
>>>>>>> ce85395904bed1ed7af411fea4a6bd04a64ae569

          <div className="mobile_social_icons">
            <a
              href="https://github.com/ahm3d19"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/usama-ahmed-989303264"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="mailto:ahmed.ua368@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <EmailIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
