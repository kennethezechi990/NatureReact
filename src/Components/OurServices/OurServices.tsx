import React from "react";
import "./OurServices.css";
import webpicsImg01 from "../../assets/web pics1-1.jpg";
import webpicsImg02 from "../../assets/web pics-2.jpg";
import webpicsImg03 from "../../assets/web pics-3.jpg";
import { FaCar } from "react-icons/fa";

const OurServices = () => {
  return (
    <div>
      <section className="web-page-pix">
        <p className="p-sec">Our Services</p>
        <div className="line-one"></div>

        <div className="pix-chart">
          <div>
            <div className="pics-div">
              <img src={webpicsImg01} />
            </div>
            <div>
              <h2>Web design</h2>
              <p>
                Focus on how you can help and benefit your user. Use simple
                words so that you don't confuse people
              </p>
            </div>
          </div>

          <div>
            <div className="pics-div">
              <img src={webpicsImg02} />
            </div>
            <div className="diver-one">
              <h2>Web design</h2>
              <p>
                Focus on how you can help and benefit your user. Use simple
                words so that you don't confuse people
              </p>
            </div>
          </div>

          <div>
            <div className="pics-div">
              <img src={webpicsImg03} />
            </div>
            <div className="diver-one">
              <h2>Web design</h2>
              <p>
                Focus on how you can help and benefit your user. Use simple
                words so that you don't confuse people
              </p>
            </div>
          </div>
        </div>
        <div>
          <FaCar className="far-car" />
        </div>
      </section>
    </div>
  );
};

export default OurServices;
