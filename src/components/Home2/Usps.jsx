import Link from "next/link";
import React from "react";

const PeopleSection = () => {
  return (
    <div className="people-section2 mb-130">
      <div className="container-fluid one">
        <div className="row">
          <div className="col-lg-12 pl--95 gap-lg-5 gap-4 d-flex flex-lg-nowrap flex-wrap align-items-end justify-content-between mb-60">
            <div className="section-title1 two">
              {/* <span>Our People</span> */}
              <h2>UNIQUE SELLING PROPOSITIONS (USPs)</h2>
            </div>
            {/* <Link legacyBehavior href="/our-people1">
              <a className="primary-btn1 btn-hover">
                Explore People
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={12}
                  height={12}
                  viewBox="0 0 12 12"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                  />
                </svg>
              </a>
            </Link> */}
          </div>
          <div className="col-lg-12">
            <div className="row g-4">
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="people-card2 magnetic-item">
                  <div className="people-img">
                    <img src="assets/img/pics/tailor.png" alt="" />
                  </div>
                  <div className="people-content">
                    <div className="name-deg">
                      <h5>
                        <span legacyBehavior>
                          <a>Tailored Solutions</a>
                        </span>
                      </h5>
                      <span>We offer customized financial solutions tailored to the specific needs and goals of our clients</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="people-card2 magnetic-item">
                  <div className="people-img">
                    <img src="assets/img/pics/record.jpeg" alt="" />
                  </div>
                  <div className="people-content">
                    <div className="name-deg">
                      <h5>
                        <span legacyBehavior>
                          <a>Proven Track Record</a>
                        </span>
                      </h5>
                      <span>Our team has a proven track record of success in the financial services industry.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="people-card2 magnetic-item">
                  <div className="people-img">
                    <img src="assets/img/pics/24-7.png" alt="" />
                  </div>
                  <div className="people-content">
                    <div className="name-deg">
                      <h5>
                        <span>
                          <a>24/7 Support</a>
                        </span>
                      </h5>
                      <span>We provide round-the-clock support to ensure our clients have access to assistance whenever they need it.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="people-card2 magnetic-item">
                  <div className="people-img">
                    <img src="assets/img/pics/competitive-rates.png" alt="" />
                  </div>
                  <div className="people-content">
                    <div className="name-deg">
                      <h5>
                        <span>
                          <a>Competitive Rates</a>
                        </span>
                      </h5>
                      <span>We negotiate the best possible rates for our clients, ensuring they get the most value from our services.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeopleSection;
