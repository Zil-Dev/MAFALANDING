// import React from "react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import image_1 from "../../assets/stock_2.avif";
import Screanshot1 from "../../assets/Screanshot1.png";
import Screanshot2 from "../../assets/Screanshot2.png";
import Screanshot3 from "../../assets/Screanshot3.png";
import Screanshot4 from "../../assets/Screanshot4.png";
import {
  FaCashRegister,
  FaUsersCog,
  FaCogs,
  FaPlayCircle,
} from "react-icons/fa";

const images = [
    Screanshot1,
    Screanshot2,
    Screanshot3,
    Screanshot4
];

export const ImageCarousel = ({setModal}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[35rem] h-[15rem] sm:h-[25rem] mx-auto overflow-hidden rounded-xl shadow-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out w-[100%] h-[100%]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-[100%] flex-shrink-0 relative h-[100%]">
            <Image
              src={src}
              alt={`slide-${index}`}
              fill
              className="object-cover"
              sizes="(max-width: 1000px) 100vw, 1000px"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export const FullscreenCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    // Avanza automáticamente cada 5 segundos
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    const goToIndex = (index) => setCurrentIndex(index);
  
    return (
      <div className="relative w-screen h-screen overflow-hidden">
        {/* Carrusel */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-screen h-screen relative flex-shrink-0">
              <Image
                src={src}
                alt={`slide-${index}`}
                fill
                className="object-cover"
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
  
        {/* Indicadores */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => goToIndex(index)}
            />
          ))}
        </div>
      </div>
    );
  };

export const HeroSection = ({setModal}) => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
  <Image
    src={image_1}
    alt="Fondo"
    className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-110"
  />
  <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 md:px-20 bg-white/40 backdrop-blur-sm text-center lg:text-left">
    <div className="max-w-xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 drop-shadow">
        Transforma tu negocio con un solo clic
      </h1>
      <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700 drop-shadow">
        Lanza tu propio Punto de Venta, CRM o ERP en minutos con nuestra nueva app.
      </p>
      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        {/* <button 
          onClick={() => setModal("info")}
          className="px-6 py-3 bg-[#5b4acb] hover:bg-[#5c49d6] text-white rounded-xl shadow transition">
          Conoce la app
        </button> */}
        <button 
              onClick={() => setModal("early")}
              className="px-6 py-3 bg-[#5b4acb] hover:bg-[#5c49d6] text-white rounded-xl shadow transition">
          Registrarme para acceso anticipado
        </button>
        <button 
          onClick={() => setModal("demo")}
          className="px-6 py-3 border border-[#5b4acb] text-[#5b4acb] rounded-xl shadow hover:bg-gray-200 hover:opacity-50 transition">
          Solicita una demo
        </button>
      </div>
    </div>

    <div className="bg-gray-100 rounded-xl shadow-lg mt-10 lg:mt-0 lg:ml-12 w-full max-w-[40rem] h-[20rem] sm:h-[30rem] p-5 flex flex-col justify-center">
      <ImageCarousel />
    </div>
  </div>
</section>
  );
};

export const FeaturesSection = ({setModal}) => {
  return (
    <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4 text-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div
            className="flex flex-col items-center animated-path"
            style={{ animationDelay: `${1 * 0.15}s` }}
          >
            <FaCashRegister className="text-6xl md:text-8xl  mb-4" />
            <h3 className="text-xl font-semibold">PQS Personalizado</h3>
            <p className="text-gray-600 mt-2 max-w-xs">
              Configura tu caja, catálogo y gestiona tus ventas en tiempo real.
            </p>
          </div>
          <div
            className="flex flex-col items-center animated-path"
            style={{ animationDelay: `${1 * 0.15}s` }}
          >
            <FaUsersCog className="text-6xl md:text-8xl mb-4" />
            <h3 className="text-xl font-semibold">CRM Inteligente</h3>
            <p className="text-gray-600 mt-2 max-w-xs">
              Conoce a tus clientes, automatiza seguimientos y mejora
              relaciones.
            </p>
          </div>
          <div
            className="flex flex-col items-center animated-path"
            style={{ animationDelay: `${1 * 0.15}s` }}
          >
            <FaCogs className="text-6xl md:text-8xl mb-4" />
            <h3 className="text-xl font-semibold">ERP Modular</h3>
            <p className="text-gray-600 mt-2 max-w-xs">
              Gestiona inventario, finanzas, RRHH y más desde un solo lugar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const DemoSection = ({setModal}) => {
  return (
    <section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-around gap-12">
    <div className="max-w-xl text-center lg:text-left">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 p-5">
        Mira cómo puedes tener tu sistema funcionando en menos de 10 minutos.
      </h2>
    </div>
    <div className="bg-gray-100 w-full max-w-xs h-48 rounded-xl shadow-lg flex justify-center items-center">
      <Image src={Screanshot1} className="w-64 h-40 rounded-xl object-cover" alt="demo" />
    </div>
  </div>
</section>
  );
};

export const CallToActionSection = ({setModal}) => {
  return (
    <section className="bg-[#5b4acb] py-12">
      <div className="max-w-6xl mx-auto px-4 text-center text-white">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Sé parte de los primeros en probar nuestra plataforma.
        </h2>
        {/* <button 
              onClick={() => setModal("early")}
              className="mt-6 px-6 py-3 bg-[#5b4acb] hover:bg-[#e5a84b] rounded-full font-medium text-white text-lg shadow">
          Registrarme para acceso anticipado
        </button> */}

        {/* <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
          <a href="#" className="hover:text-white">
            Nosotros
          </a>
          <a href="#" className="hover:text-white">
            Blog
          </a>
          <a href="#" className="hover:text-white">
            Contacto
          </a>
          <a href="#" className="hover:text-white">
            Privacidad
          </a>
          <a href="#" className="hover:text-white">
            Términos
          </a>
        </div> */}

        <div className="mt-6 flex justify-center gap-4">
          <a href="#" className="hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-white">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
