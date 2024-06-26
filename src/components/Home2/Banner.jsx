import React, { useMemo } from "react";
import { useScroll } from './ScrollContext';
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
SwiperCore.use([Pagination, Autoplay, EffectFade, Navigation]);

const Banner = () => {
  const { scrollToAboutUs } = useScroll();
  const slideSetting = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 25,
      // loop: true,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 2500, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
    };
  }, []);
  return (
    <div className="banner2-section mb-100">
      <Swiper {...slideSetting} className="swiper banner2-slider">
        <div className="swiper-wrapper">
          <SwiperSlide className="swiper-slide">
            <div
              className="banner-wrapper"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(assets/img/home2/business-people-office.jpg)",
              }}
            >
              <div className="container-fluid one pl--95">
                <div className="row g-lg-4 gy-5">
                  <div className="col-lg-7">
                    <div className="banner-left-content">
                      {/* <span>Real Estate</span> */}
                      <h1>
                        Your Strategic Advantage
                      </h1>
                      {/* <Link legacyBehavior href="" onClick={scrollToAboutUs} > */}
                        <a className="primary-btn1 btn-hover" onClick={scrollToAboutUs}>
                          Explore More
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
                            ></path>
                          </svg>
                        </a>
                      {/* </Link> */}
                    </div>
                  </div>
                  {/* <div className="col-lg-5 d-flex align-items-end">
                    <div className="banner-right-content pl--95">
                      <h5>
                        The primary goal of business consulting is to help
                        organizations improve their performance, solve specific
                        problems, and achieve their strategic objectives.
                      </h5>
                      <ul className="btn-group">
                        <li className="success-rate">
                          Success Rate <span>90%</span>
                        </li>
                        <li>
                          <a href="#">Determine Problem</a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="banner-wrapper"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(assets/img/home2/General-2.jpg)",
              }}
            >
              <div className="container-fluid one pl--95">
                <div className="row g-lg-4 gy-5">
                  <div className="col-lg-7">
                    <div className="banner-left-content">
                      {/* <span>Real Estate</span> */}
                      <h1>
                        Your Strategic Advantage
                      </h1>
                      {/* <Link legacyBehavior href="" onClick={scrollToAboutUs} > */}
                        <a className="primary-btn1 btn-hover" onClick={scrollToAboutUs}>
                          Explore More
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
                            ></path>
                          </svg>
                        </a>
                      {/* </Link> */}
                    </div>
                  </div>
                  {/* <div className="col-lg-5 d-flex align-items-end">
                    <div className="banner-right-content pl--95">
                      <h5>
                        The primary goal of business consulting is to help
                        organizations improve their performance, solve specific
                        problems, and achieve their strategic objectives.
                      </h5>
                      <ul className="btn-group">
                        <li className="success-rate">
                          Success Rate <span>90%</span>
                        </li>
                        <li>
                          <a href="#">Determine Problem</a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="banner-wrapper"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(assets/img/home2/shutterstock_1025018239.jpg)",
              }}
            >
              <div className="container-fluid one pl--95">
                <div className="row g-lg-4 gy-5">
                  <div className="col-lg-7">
                    <div className="banner-left-content">
                      {/* <span>Real Estate</span> */}
                      <h1>
                        Your Strategic Advantage
                      </h1>
                      {/* <Link legacyBehavior href="" onClick={scrollToAboutUs} > */}
                        <a className="primary-btn1 btn-hover" onClick={scrollToAboutUs}>
                          Explore More
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
                            ></path>
                          </svg>
                        </a>
                      {/* </Link> */}
                    </div>
                  </div>
                  {/* <div className="col-lg-5 d-flex align-items-end">
                    <div className="banner-right-content pl--95">
                      <h5>
                        The primary goal of business consulting is to help
                        organizations improve their performance, solve specific
                        problems, and achieve their strategic objectives.
                      </h5>
                      <ul className="btn-group">
                        <li className="success-rate">
                          Success Rate <span>90%</span>
                        </li>
                        <li>
                          <a href="#">Determine Problem</a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div
              className="banner-wrapper"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url(assets/img/home2/hand-shake.jpg)",
              }}
            >
              <div className="container-fluid one pl--95">
                <div className="row g-lg-4 gy-5">
                  <div className="col-lg-7">
                    <div className="banner-left-content">
                      {/* <span>Real Estate</span> */}
                      <h1>
                        Your Strategic Advantage
                      </h1>
                      {/* <Link legacyBehavior href="" onClick={scrollToAboutUs} > */}
                        <a className="primary-btn1 btn-hover" onClick={scrollToAboutUs}>
                          Explore More
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
                            ></path>
                          </svg>
                        </a>
                      {/* </Link> */}
                    </div>
                  </div>
                  {/* <div className="col-lg-5 d-flex align-items-end">
                    <div className="banner-right-content pl--95">
                      <h5>
                        The primary goal of business consulting is to help
                        organizations improve their performance, solve specific
                        problems, and achieve their strategic objectives.
                      </h5>
                      <ul className="btn-group">
                        <li className="success-rate">
                          Success Rate <span>90%</span>
                        </li>
                        <li>
                          <a href="#">Determine Problem</a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
