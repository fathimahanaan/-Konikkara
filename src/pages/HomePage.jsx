import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Collection from "../components/Collection";
import GoldRate from "../components/GoldRate";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import WhatsappButton from "../components/WhatsappButton";
import Services from "../components/Services";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Collection />
      <GoldRate />
      <ContactForm />
      <Footer />
      <WhatsappButton />
    </div>
  );
}
