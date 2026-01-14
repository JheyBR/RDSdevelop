
import AboutSectionTwo from "@/components/Mindset/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Construction from "@/components/Construction";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero/index";
import Pricing from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Who from "@/components/Who";
import Video from "@/components/Who";
import { Metadata } from "next";
import MindsetSection from "@/components/Mindset/MindsetSection";
import Services from "@/components/Services/Services";
import Team from "@/components/Team";

export const metadata: Metadata = {
  title: "RDS - Reliable Develoment Software",
  description: "Diseño y Desarrollo de Softawer y paginass WEB, SaaS",
  // other metadata
};

export default function Home() {
  return (
    <>
     
      <Hero />
      <Who />   
      <MindsetSection />
      <Features />
      <Services />
      <Testimonials />
      <Team />
      {/*<Construction />
      {/*<Blog />
      <Contact />*/}
    </>
  );
}
