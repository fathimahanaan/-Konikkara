import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import "./App.css";
import About from "./components/About";
import Services from "./components/Services";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import GoldRate from "./components/GoldRate";
import LoadingSpinner from "./components/LoadingSpinner";
import WhatsappButton from "./components/WhatsappButton";

const App = () => {
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
};

export default App;
