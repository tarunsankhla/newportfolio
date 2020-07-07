import React, { Component } from "react";
import "../../sass/text-gradients.scss";
import "./ContactSection.scss";
import IconButton from "../items/buttons/IconButton";
import { openLink } from "../../utils/browser";
import Spacer from "../items/Spacer";
import Button from "../items/buttons/Button";
import ProjectCard from "../items/ProjectCard";
import WrittenCard from "../items/WrittenCard";
import { ReactComponent as EmailSvg } from "../../assets/email.svg";
import { ReactComponent as EmailDarkSvg } from "../../assets/email-dark.svg";
import { ReactComponent as EmailMobileSvg } from "../../assets/email-mob.svg";
import { ReactComponent as EmailMobileDarkSvg } from "../../assets/email-mob-dark.svg";
import SocialButtonsList from "../items/SocialButtonsList";
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";

class ContactSection extends Component {
  render() {
    return (
      <section className="contact-section">
        <div className="written-section">
          <h1>
            Let's <span className="contact-gradient">talk</span>
          </h1>
        </div>
        <p>
          I'd love to hear about exciting projects and great teams I can be a
          part of
          <div className="grid">
            <div className="item">
              <a
                href="https://www.linkedin.com/in/roshanrahman6399/"
                target="_blank"
              >
                <div className="card">
                  <h1>
                    <AiFillLinkedin />
                  </h1>
                  <h2>Reach out on Linkedin</h2>
                </div>
              </a>
              <div className="sub"></div>
            </div>
            <div className="item first-on-mobile">
              <a href="mailto:roshanrahman6399@gmail.com">
                <div className="card primary">
                  <h1>
                    <AiOutlineMail />
                  </h1>
                  <h2>Send me an email</h2>
                </div>
              </a>
              <div className="sub">
                or <span className="copy-text">click here to copy it</span>
              </div>
            </div>
            <div className="item">
              <a href="https://twitter.com/roshan6399">
                <div className="card">
                  <h1>
                    <AiOutlineTwitter />
                  </h1>
                  <h2>Message me on Twitter</h2>
                </div>
              </a>
              <div className="sub"></div>
            </div>
          </div>
        </p>
        {/* <p>Shoot me an email about anything at</p> */}
        {/* <p className="email-section">
          <span title="Click to copy email">
            <EmailSvg
              className="light-only"
              title="roshanrahman6399@gmail.com (Click to copy)"
            />
            <EmailDarkSvg
              className="dark-only"
              title="roshanrahman6399@gmail.com (Click to copy)"
            />
          </span>
          <p></p>
          <div className="buttons">
            <Button
              rounded
              gradient="primary"
              onPressed={() => {
                openLink("mailto:roshanrahman6399@gmail.com");
              }}
            >
              Copy Email
            </Button>
            <Button rounded outlined>
              Open Email App
            </Button>
          </div>
        </p> */}
        {/* <p className="email-section-mobile">
          <span title="Click to copy email">
            <EmailMobileSvg
              className="light-only"
              title="roshanrahman6399@gmail.com (Click to copy)"
            />
            <EmailMobileDarkSvg
              className="dark-only"
              title="roshanrahman6399@gmail.com (Click to copy)"
            />{" "}
          </span>

          <br></br>
          <div className="buttons">
            <Button
              rounded
              gradient="primary"
              onPressed={() => {
                openLink("mailto:roshanrahman6399@gmail.com");
              }}
            >
              Open Email App
            </Button>
            <Button rounded outlined>
              Copy Email
            </Button>
          </div>
        </p> */}
        {/* <SocialButtonsList size="4rem" spacing="30px" /> */}
        {/* <div className="content">
          
        </div> */}
      </section>
    );
  }
}

export default ContactSection;
