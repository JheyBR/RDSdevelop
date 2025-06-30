import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero/index";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Who from "@/components/Who";
import Video from "@/components/Who";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "RDS - Reliable Develoment Software",
  description: "Diseño y Desarrollo de Softawer y paginass WEB, SaaS",
  // other metadata
};

export default function Home() {
  return (
    <>
     
      <Hero />
      <Who/>
      {/*<Features />*/}
      {/*<AboutSectionOne />*/}
      {/*<AboutSectionTwo />*/}
      {/*<Blog />*/}
      {/*<Testimonials />*/}
      {/*<Pricing />
      <Contact />*/}
    </>
  );
}
