import React, { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import Partner from "../components/common/Partner";
import About from "../components/Home2/About";
import Testimonial from "../components/Home2/Testimonial";
import WhyChooseSection from "../components/Home2/Choose";
import VideoArea from "../components/Home2/VideoArea";
import PeopleSection from "../components/Home2/PeopleSection";
import Contact from "../components/Home2/Contact";

const AboutPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleText = () => {
    setIsExpanded((prevExpanded) => !prevExpanded);
  };
  return (
    <MainLayout>
      {/* <Partner gap="mb-130" /> */}
      <br />
      <br />
      <br />
      <About />
      <br />
      <br />
      <br />
      <div className="mission-section mb-130 mt-130">
        <div className="container-fluid one pl--95">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-4">
              <div className="mission-img">
                <img
                  src="assets/img/newest_team/missionandvision.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-8 pl--95">
              <div className="mission-content-wrap">
                <div className="mission-content-top">
                  <div className="section-title1 w-890">
                    <h2>
                      Our Vision
                    </h2>
                  </div>
                  <p>
                    Welcome to Indenta Solutions, a premier Direct Sales Agency in the UAE dedicated to delivering top-notch financial solutions. We specialize in a wide array of services including credit card sales, SME loans, account opening, corporate banking, and mortgage finance. Our commitment is to provide personalized, innovative, and effective financial solutions to meet the unique needs of our clients
                  </p>
                  {/* <h5>
                    Mr. Daniel Scoot, <span>Company CEO</span>
                  </h5> */}
                </div>
                <div className="mission-content-bottom">
                  <h3>Our Mission</h3>
                  <p>
                    To empower organizations to thrive and achieve their full
                    potential by providing strategic insights, innovative
                    solutions, and expert guidance. We partner with our clients
                    to enhance efficiency, competitiveness, and sustainability
                    in an ever-evolving business landscape.
                  </p>
                  <p
                    className="moretext"
                    style={{ display: isExpanded ? "block" : "none" }}
                  >
                    To empower organizations to thrive and achieve their full
                    potential by providing strategic insights, innovative
                    solutions, and expert guidance. We partner with our clients
                    to enhance efficiency, competitiveness, and sustainability
                    in an ever-evolving business landscape.
                  </p>
                  {/* <a className="moreless-button">Read More</a> */}
                  <a
                    className={`moreless-button bi ${isExpanded ? "bi-chevron-up" : "bi-chevron-down"
                      }`}
                    onClick={toggleText}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Testimonial /> */}
      {/* <WhyChooseSection /> */}
      <VideoArea />
      {/* <PeopleSection /> */}
      {/* <Contact /> */}
    </MainLayout>
  );
};

export default AboutPage;
