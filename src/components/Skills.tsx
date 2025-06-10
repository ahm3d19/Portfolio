import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Next JS",
    "React JS",
    "React Native",
    "TypeScript / JavaScript",
    "HTML5, CSS3, SASS",
    "Vercel",
    "Tailwind / NativeWind",
    "Material UI",
    "Expo (EAS, OTA Updates)",
    "Redux / Redux-Thunk",
    "React Hooks",
    "AWS (Cognito, S3, DynamoDB)",
    "Firebase (Auth, Firestore)",
    "RESTful & GraphQL APIs",
    "Figma",
    "MongoDB",
    "Express.js",
    "Node.js", 
    "Postman",
    "Xcode  / Android Studio / VS Code",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "EAS Build",
    "AWS",
    "Azure",
    "Azure DevOps",
    "Microsoft App Center",
];

function Skills() {
    return (
    <div className="container" id="skills">
        <div className="skills-container">
            <h1>Skills Set</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full-Stack Software Developer</h3>
                    <p>I build high-performance mobile apps for iOS and Android using React Native, Expo, and AWS. My end-to-end expertise includes crafting responsive UIs (JavaScript, Redux), implementing scalable backends (AWS Cognito, DynamoDB), and streamlining deployments via CI/CD (Azure, GitHub Actions). I specialize in optimizing app performance while maintaining clean, reusable code across platforms.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I build automated CI/CD pipelines for React Native apps using Azure App Center and GitHub Actions, streamlining testing, builds, and deployments. My solutions include Fastlane for store submissions, Expo OTA updates, and AWS infrastructure management—cutting release cycles by 40% while ensuring production reliability.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Skills;