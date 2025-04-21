import React from 'react';

const TeamSection = () => {
  return (
    <section
      id="equipo"
      className="bg-white py-16 px-6 text-center"
      data-aos="fade-up"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold mb-10 text-gray-800"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          Nuestro Equipo
        </h2>

        <div className="grid gap-8 md:grid-cols-4">
          {/* Miembro 1 */}
          <div
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Miembro del equipo"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Nombre</h3>
            <p className="text-gray-600">Rol</p>
          </div>

          {/* Miembro 2 */}
          <div
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Miembro del equipo"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Nombre</h3>
            <p className="text-gray-600">Rol</p>
          </div>


          {/* Miembro 3 */}
          <div
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Miembro del equipo"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Nombre</h3>
            <p className="text-gray-600">Rol</p>
          </div>


          {/* Miembro 4 */}
          <div
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <img
              src="https://via.placeholder.com/150"
              alt="Miembro del equipo"
              className="rounded-full w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">Nombre</h3>
            <p className="text-gray-600">Rol</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
