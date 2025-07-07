import React, { useState } from "react";

import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import Plantea from "../assets/images/Plantea-Project.png";
import ReelBrain from "../assets/images/ReelBrain.png";
import HCP from "../assets/images/HCP.png";
import commingsoon from "../assets/images/commingsoon.jpg";
import "../assets/styles/Project.scss";

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Plantea (Next JS)",
      image: Plantea,
      youtubeId: "YOUR_YOUTUBE_ID_1", // Replace with actual YouTube ID
      description:
        "A high-performance Ecommerce web app built with Next JS / AWS, and Redux, optimized for all devices with a lean size. It features server-side rendering (SSR) for improved SEO and performance.",
      techStack: "Next JS, AWS, Redux, Tailwind CSS, TypeScript, and more.",
      liveUrl: "https://plantea-next.vercel.app",
      githubUrl: "",
    },
    {
      id: 11,
      title: "Global Health Network (Next JS)",
      image: HCP,
      youtubeId: "YOUR_YOUTUBE_ID_1", // Replace with actual YouTube ID
      description:
        "This Ecommerce web application leverages Next.js for server-side rendering, enabling superior SEO and fast initial page loads. State management is handled via Redux, while AWS services ensure scalable backend infrastructure. The frontend is styled using Tailwind CSS, and TypeScript provides a strong type system for robustness. The app is optimized for both performance and responsiveness, with a minimal bundle size and smooth UX across devices.",
      techStack: "Next JS, AWS, Redux, Tailwind CSS, TypeScript, and more.",
      liveUrl: "https://healthcare-network-graph-ebon.vercel.app",
      githubUrl: "",
    },

    {
      id: 22,
      title: "Reel Brain (Expo)",
      image: ReelBrain,
      youtubeId: "1C_Dw5bY68k", // Replace with actual YouTube ID
      // https://youtube.com/shorts/1C_Dw5bY68k?feature=share
      description:
        "A high-performance Social Media mobile app built with React Native / Expo, AWS, and Redux, optimized for all devices with a lean size (75MB). It features server-side rendering (SSR) for improved SEO and performance.",
      techStack:
        "React Native, Expo, AWS, Redux, Tailwind CSS, TypeScript, and more.",
      liveUrl: "",
      // githubUrl: "https://github.com/ahm3d19/ClickNBuy_Expo",
      githubUrl: "",
    },
    {
      id: 2,
      title: "Click N Buy (Expo)",
      image: mock10,
      youtubeId: "t0t1doAM76Y", // Replace with actual YouTube ID
      description:
        "A high-performance Ecommerce mobile app built with React Native / Expo, AWS, and Redux, optimized for all devices with a lean size (75MB). It features server-side rendering (SSR) for improved SEO and performance.",
      techStack:
        "React Native, Expo, AWS, Redux, Tailwind CSS, TypeScript, and more.",
      liveUrl: "",
      // githubUrl: "https://github.com/ahm3d19/ClickNBuy_Expo",
      githubUrl: "",
    },

    {
      id: 4,
      title: "StanBik Banking App (Expo)",
      image: mock09,
      youtubeId: "33Tg3NLE0dw", // Replace with actual YouTube ID
      description:
        "A high-performance mobile banking app built with React Native, AWS, and Redux, optimized for all devices with a lean size (100MB). It features a sleek design and smooth user experience, ensuring fast load times and responsiveness across all devices.",
      techStack:
        "React Native, Expo, AWS, Redux, Tailwind CSS, TypeScript, and more.",
      liveUrl: "",
      // githubUrl: "https://github.com/ahm3d19/STANBIK",
      githubUrl: "",
    },
    {
      id: 5,
      title: "Coffee (Expo)",
      image: mock08,
      youtubeId: "X972KUAF8GI?feature=share", // Replace with actual YouTube ID
      description:
        "Coffee is a high-performance coffee ordering app built with React Redux, optimized to maintain a constant 60 FPS on both the JS and UI threads. It features a lean size of 50MB, ensuring fast load times and smooth user experience across all devices.",
      techStack:
        "React Native, Expo, Redux, Tailwind CSS, TypeScript, and more.",
      liveUrl: "",
      // githubUrl: "https://github.com/ahm3d19/Coffee",
      githubUrl: "",
    },
    {
      id: 6,
      title: "Coming soon...",
      image: commingsoon,
      youtubeId: "", // Replace with actual YouTube ID
      description: "",
      techStack:
        "React Native, Expo, Redux, Tailwind CSS, TypeScript, and more.",
      liveUrl: "",
      // githubUrl: "https://github.com/ahm3d19/Coffee",
      githubUrl: "",
    },
  ];

  const openVideoModal = (project) => {
    setSelectedProject(project);
  };

  const closeVideoModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div
              className="project-image-container"
              onClick={() => openVideoModal(project)}
            >
              <img
                src={project.image}
                className="zoom"
                alt="thumbnail"
                width="100%"
              />
              <div className="play-button">
                <svg viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" fill="white" />
                </svg>
              </div>
            </div>
            <h2
              onClick={() => openVideoModal(project)}
              style={{ cursor: "pointer" }}
            >
              {project.title}
            </h2>
            <p>{project.description}</p>
            <p>
              <strong>Tech Stack:</strong> {project.techStack}
            </p>
            <div className="project-links">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* YouTube Video Modal */}
      {selectedProject && (
        <div className="video-modal" onClick={closeVideoModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeVideoModal}>
              &times;
            </button>
            <div className="video-container">
              <iframe
                width="100%"
                height="500"
                src={`https://www.youtube.com/embed/${selectedProject.youtubeId}?autoplay=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={selectedProject.title}
              ></iframe>
            </div>
            <div className="video-description">
              <h3>{selectedProject.title}</h3>
              <p>{selectedProject.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;
