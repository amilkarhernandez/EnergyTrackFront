import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
const HomeAbout = () => {
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
          <h2 className="text-6xl font-bold text-center">Acerca de Nosotros</h2>
          <p className="text-lg font-semibold">
            Bienvenido a EnergyTrack, una solución innovadora para monitorear y
            gestionar el consumo de energía en edificios universitarios. Nuestro
            objetivo es promover prácticas sostenibles y eficientes para un
            futuro energético más verde.
          </p>
          <p className="text-lg font-semibold">
            Con nuestra plataforma, puedes visualizar y analizar datos
            detallados sobre el consumo de iluminación en tiempo real. Ofrecemos
            herramientas poderosas para ayudarte a tomar decisiones informadas y
            optimizar el uso de energía en tu entorno educativo.
          </p>
          <p className="text-lg font-semibold">
            ¡Únete a nosotros en esta misión de hacer del mundo un lugar más
            ecológico y eficiente energéticamente!
          </p>
        </section>
      </article>
    </main>
  );
};

export default HomeAbout;
