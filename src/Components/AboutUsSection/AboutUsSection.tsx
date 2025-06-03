import React from "react";
import "./AboutUsSection.css";
import leafImg from "../../assets/leaf.jpg";

const AboutUsSection = () => {
  return (
    <div>
      <section className="about-us-section">
        <div>
          <h3>ABOUT US</h3>
          <h4>
            Tell website visitors who you are and why they should choose your
            business.
          </h4>
          <p>
            Because when a visitor first lands on your website, you’re a
            stranger to them. They have to get to know you in order to want to
            read your blog posts, subscribe to your email newsletter, or buy
            what you’re selling.
          </p>
          <button>Find Out More</button>
        </div>
        <div>
          <img src={leafImg} />
        </div>
      </section>
    </div>
  );
};

export default AboutUsSection;
