import Header from "./ui/header";
// import Seccion from "./ui/seccion";

import { useState } from "react";

import {
  FeaturesSection,
  DemoSection,
  CallToActionSection,
  HeroSection,
  ImageCarousel,
  FullscreenCarousel,
} from "./ui/seccion2";

import AppInfoModal from "./ui/AppInfoModal";
import DemoRequestForm from "./ui/DemoRequestForm";
import EarlyAccessForm from "./ui/EarlyAccessForm";
import { Alertas } from "./ui/Alertas";


export default () => {
  const [modal, setModal] = useState("");

  return (
    <div className="overflow-scroll no-scrollbar h-[100%] w-[100%] bg-gray-200">
      <Header />
      <Alertas/>
      <HeroSection setModal={setModal} />
      {/* <ImageCarousel /> */}

      <FeaturesSection setModal={setModal} />
      <DemoSection setModal={setModal}/>
      <CallToActionSection setModal={setModal}/>

      {modal === "info" && <AppInfoModal onClose={() => setModal("")} />}
      {modal === "demo" && <DemoRequestForm onClose={() => setModal("")} />}
      {modal === "early" && <EarlyAccessForm onClose={() => setModal("")} />}      
    </div>
  );
};
