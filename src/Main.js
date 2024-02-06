import React from "react";
import image from "./images/Rectangle 90.png";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Main() {
  return (
    <main>
      <img src={image} style={{ width: "330px" }} alt="" />
      <container>
        <div className="heading">
          <h1 className="heading--laura">Laura Smith</h1>
          <h6 className="heading--career">Frontend Developer</h6>
          <p className="heading--web">Laurasmith.website</p>
        </div>

        <div>
          <button className="left">
            <AiOutlineMail className="email" />
            Email
          </button>
          <button className="right">
            <FaLinkedin className="linkedIn" />
            LinkedIn
          </button>
        </div>

        <section>
          <div>
            <h3>About</h3>
            <p className="content">
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </div>
          <div>
            <h3>Interests</h3>
            <p className="content">
              Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
              Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
            </p>
          </div>
        </section>
      </container>
    </main>
  );
}
