import React from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import Plantea from "../assets/images/Plantea-Project.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://plantea-next.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Plantea}
              className="zoom"
              alt="thumbnail"
              height="auto"
              width="100%"
            />
          </a>
          <a
            href="https://plantea-next.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Plantea (Next JS)</h2>
          </a>
          <p>
            A high-performance Ecommerce web app built with Next JS / AWS, and
            Redux, optimized for all devices with a lean size. It features
            server-side rendering (SSR) for improved SEO and performance.
            <br />
            <br />
            <strong>Tech Stack:</strong> Next JS, AWS, Redux, Tailwind CSS,
            TypeScript, and more.
          </p>
        </div>
        {/* Click N Buy */}
        <div className="project">
          <a
            href="https://github.com/ahm3d19/ClickNBuy_Expo"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock10} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/ahm3d19/ClickNBuy_Expo"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Click N Buy (Expo)</h2>
          </a>
          <p>
            A high-performance Ecommerce mobile app built with React Native /
            Expo, AWS, and Redux, optimized for all devices with a lean size
            (75MB).
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/ahm3d19/STANBIK"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock09} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/ahm3d19/STANBIK"
            target="_blank"
            rel="noreferrer"
          >
            <h2>StanBik Banking App (Expo)</h2>
          </a>
          <p>
            A high-performance mobile banking app built with React Native, AWS,
            and Redux, optimized for all devices with a lean size (100MB).
          </p>
        </div>
        <div className="project">
          <a
            href="https://github.com/ahm3d19/Coffee"
            target="_blank"
            rel="noreferrer"
          >
            <img src={mock08} className="zoom" alt="thumbnail" width="100%" />
          </a>
          <a
            href="https://github.com/ahm3d19/Coffee"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Coffee (Expo)</h2>
          </a>
          <p>
            Coffee is a high-performance coffee ordering app built with React
            Redux, optimized to maintain a constant 60 FPS on both the JS and UI
            threads.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
