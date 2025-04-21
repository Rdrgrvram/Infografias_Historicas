import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-white px-8 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      
      <div className="max-w-xl md:ml-8" data-aos="fade-right">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Transforma datos históricos en infografías visuales
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Genera contenido llamativo, educativo y automatizado para difundir la historia de forma moderna.
        </p>
        <Link to="/login">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded shadow transform hover:scale-105 transition-transform duration-200">
          Empezar
        </button>
        </Link>
      </div>

      <div className="w-full md:w-[500px] md:-translate-x-6" data-aos="fade-left">
        <img src="https://picsum.photos/500/300" alt="Infografía" className="rounded-lg shadow-lg w-full" />
      </div>
          </section>
  );
};

export default HeroSection;
