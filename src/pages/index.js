// import Banner from "../components/home1/Banner";
// import CoverArea from "../components/home1/CoverArea";
// import Header from "../components/header/Header";
// import About from "../components/home1/About";
// import GraphtWithImg from "../components/home1/GraphtWithImg";
// import FeatureCard from "../components/home1/FeatureCard";
// import HorizontalScrolling from "../components/home1/HorizontalScrolling";
// import PeopleSection from "../components/home1/PeopleSection";
// import Testimonial from "../components/home1/Testimonial";
// import Blog from "../components/home1/Blog";
// import OurPartner from "../components/home1/OurPartner";
// import IndustrialSection from "../components/home1/IndustrialSection";
// import ContactSection from "../components/home1/ContactSection";
// import Footer from "../components/footer/Footer";

import React from "react";
import Header2 from "../components/header/Header3";
import Banner from "../components/Home2/Banner";
import SolutionSection from "../components/Home2/SolutionSection";
import Aboutus from "../components/Home2/Aboutus";
import Commitment from "../components/Home2/Commitment1";
import Testimonial from "../components/Home2/Testimonial1";
import OurServices from "../components/Home2/OurServices";
import EventAndConfarance from "../components/Home2/EventAndConfarance-main";
import ProjectSection from "../components/Home2/ProjectSection";
import WhyChooseSection from "../components/Home2/WhyChooseSection1";
import VideoArea from "../components/Home2/VideoArea";
import Usps from "../components/Home2/Usps";
import ClientSection from "../components/Home2/ClientSection";
import Blog from "../components/Home2/Blog";
import Contact from "../components/Home2/Contact";
import Footer2 from "../components/footer/Footer2";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <Header />
      <Banner/>
      <CoverArea/>
      <About/>
      <GraphtWithImg/>
      <FeatureCard/>
      <HorizontalScrolling/>
      <PeopleSection/>
      <Testimonial/>
      <Blog/>
      <OurPartner/>
      <IndustrialSection/>
      <ContactSection/>
      <Footer/> */}
      <Header2/>
      <Banner/>
      <Aboutus/>
      <SolutionSection/>
      <Commitment/>
      <OurServices/>
      <EventAndConfarance/>
      {/* <ProjectSection/> */}
      <WhyChooseSection/>
      <VideoArea/>
      {/* <Usps/> */}
      {/* <ClientSection/> */}
      {/* <Blog/> */}
      <Testimonial/>
      {/* <Contact/> */}
      <Footer2/>
    </>
  );
}
