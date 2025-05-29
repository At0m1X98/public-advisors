import About from "../components/Client/About";
import Contact from "../components/Client/Contact";
import ContactForm from "../components/Client/ContactForm";
import Hero from "../components/Client/Hero";
import Offer from '../components/Client/Offer';

const Client = () => {
  return (
    <main className="flex flex-col">
      <Hero/>
      <About/>
      <Offer/>
      <Contact/>
    </main>
  );
}

export default Client;