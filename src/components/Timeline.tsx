import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="Experience">
      <div className="items-container">
        <h1>Industry Experience</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Nov 2022 - Dec 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Software Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">InvoZone</h4>
            <p>
              <li className="timeline-item">
                Developed and maintained mobile applications using React Native,
                ensuring High Performance & Responsiveness with AWS services
              </li>
              <li className="timeline-item">
                Built 20+ Apps with React Native & Expo, reducing build times by
                30% using EAS
              </li>
              <li className="timeline-item">
                Automated CI / CD with Azure App Centre, cutting deployment time
                by 40%
              </li>
              <li className="timeline-item">
                Understanding of the entire development process SDLC (Design,
                Development & Deployment)
              </li>
              <li className="timeline-item">
                Utilized GitHub for Version Control, Branching, & Merging,
                ensuring organized and collaborative development workflows.
              </li>
              <li className="timeline-item">
                Collaborating with senior team members in creating secure and
                reliable software solutions & built long-term relationships with
                clients
              </li>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2022 - Oct 2022"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              React Native Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              NETSOL Technologies{" "}
            </h4>
            <p>
              <li className="timeline-item">
                Efficiently deploy and integrated 10+ Projects using Expo,
                migrated legacy codebases to Expo for faster iterations.
              </li>
              <li className="timeline-item">
                Ability to work independently as well as collaboratively in a
                team environment
              </li>
              <li className="timeline-item">
                Developed React Native Applications for both (iOS + Android)
                platforms with (React Native) framework
              </li>
              <li className="timeline-item">
                Experience with many IDE’s such as (Vs-Code, Xcode, Android
                Studio)
              </li>
              <li className="timeline-item">
                Collaborated with designers and stakeholders to translate
                requirements into functional and user-friendly mobile
                applications
              </li>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2021 - Aug 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              React Native Developer (Intern)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              GeneTech Solutions
            </h4>
            <p>
              <li className="timeline-item">
                Developed front-end user interface using React Native & Expo for
                (iOS + Android) mobile applications.
              </li>
              <li className="timeline-item">
                Collaborated with designers on UI/UX design decisions and
                created mock-ups as needed
              </li>
              <li className="timeline-item">
                Conducted code reviews, performed Debugging, and Implemented
                Performance Optimizations to enhance app functionality
              </li>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
