import Hero from "./layouts/Hero";
import Adoption from "./layouts/Adoption";
import Tile from "./layouts/Tile";
import LoveVideo from "./layouts/LoveVideo";
// import WhoWeAre from "./layouts/WhoWeAre";
import Scene from "./layouts/Scene";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import BibleVerse from "./layouts/BibleVerse";
import Support from "./layouts/Support";

import ScrollDirectionProxy from "./components/ScrollDirectionProxy/ScrollDirectionProxy";
import ModalController from "./components/Modal/ModalController";
import WhatsApp from "./layouts/WhatsApp";

export default function App() {
  return (
    <main>
      <ModalController />
      <ScrollDirectionProxy />
      <Header />
      <Scene />
      <Tile />
      <WhatsApp/>
      <Hero />
      <Adoption />
      <LoveVideo />
      <Support />
      <BibleVerse />
      {/* <WhoWeAre /> */}
      <Footer />
    </main>
  )
}


