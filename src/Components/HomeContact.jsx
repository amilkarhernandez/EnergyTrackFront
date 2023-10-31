import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
const HomeContact = () => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login');
  };
  const goToRegister = () => {
    navigate('/register');
  };
  return (
    <main className="bg-[#a7eaff] h-screen">
      <header>
        <nav className="bg-[#43D8F1] flex justify-between items-center">
          <picture className="flex items-center">
            <img
              className="p-1 h-[100px] w-[100px] ml-2 cursor-pointer"
              src={logo}
              alt="logo"
            />
          </picture>
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-gray-800 hover:underline mx-4 text-xl font-semibold"
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              className="text-gray-800 hover:underline mx-4 text-xl font-semibold"
            >
              Acerca de Nosotros
            </NavLink>
            <NavLink
              to="contact"
              className="text-gray-800 hover:underline mx-4 text-xl font-semibold"
            >
              Contáctanos
            </NavLink>
            <button
              onClick={goToLogin}
              className="bg-[#9df0ff] hover:bg-[#9df0ff] cursor-pointer transition-transform duration-300 ease-in hover:brightness-110 hover:scale-110 hover:shadow-md text-[#1c4355] font-bold py-2 px-4 ml-2 rounded"
            >
              Iniciar sesión
            </button>
            <button
              onClick={goToRegister}
              className="bg-green-500 hover:bg-green-500 transition-transform duration-300 ease-in hover:brightness-110 hover:scale-110 hover:shadow-md text-white font-bold py-2 px-4 ml-2 mr-2 rounded hover:shadow-green-500"
            >
              Registrarse
            </button>
          </div>
        </nav>
      </header>
      <article className="p-8 flex justify-center flex-col">
        <section className="flex justify-center gap-3 flex-col">
          <h2 className="text-6xl font-bold text-center">Contacto</h2>
          <p className="text-lg font-semibold">
            ¡Estamos encantados de saber de ti! Si tienes alguna pregunta,
            comentario o simplemente quieres saber más sobre nuestros servicios,
            no dudes en ponerte en contacto con nosotros.
          </p>
          <p className="text-lg font-semibold">
            Puedes encontrarnos en la siguiente dirección:
            <br />
            EnergyTrack, 123 Calle Principal, Ciudad Universitaria, País
          </p>
          <p className="text-lg font-semibold">
            Para consultas generales, escríbenos a: info@energytrack.com
          </p>
          <p className="text-lg font-semibold">
            Para asistencia técnica, contáctanos en: support@energytrack.com
          </p>
          <p className="text-lg font-semibold">
            También puedes llamarnos al: +1-123-456-7890
          </p>
        </section>
      </article>
    </main>
  );
};

export default HomeContact;
