import React from "react";
import "./CustomerNeedSection.css";
import quoteImg from "../../assets/quote image.png";
import avartaImg from "../../assets/avatar_on_home (1).png";

const CustomerNeedSection = () => {
  return (
    <div>
      <section className="customer-section">
        <div className="quote-img-div">
          <img src={quoteImg} />
        </div>
        <h2>
          “Original and with an innate understanding of their customer’s needs,
          the team at Love Nature are always a pleasure to work with.”
        </h2>
        <div className="avarta-div">
          <img src={avartaImg} />
        </div>
        <p>Jane Miller</p>
      </section>
    </div>
  );
};

export default CustomerNeedSection;
