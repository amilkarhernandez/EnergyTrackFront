import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import img1 from '../assets/carruimg1.avif';
import img2 from '../assets/carruimg2.webp';
import img3 from '../assets/carruimg3.jpg';
import logo from '../assets/logo.png';

const HomePage = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/login');
  };
  const goToRegister = () => {
    navigate('/register');
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  const handleNext = () => {
    setSlideIndex((prev) => (prev + 1) % 3); // 3 es el número total de imágenes en el carrusel
  };

  const handlePrev = () => {
    setSlideIndex((prev) => (prev - 1 + 3) % 3);
  };

  const layout = () => {};

  return (
    <main className="bg-[#a7eaff] min-h-screen">
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
            className="text-[#1c4355] hover:underline mx-4 text-xl font-semibold"
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className="text-[#1c4355] hover:underline mx-4 text-xl font-semibold"
          >
            Acerca de Nosotros
          </NavLink>
          <NavLink
            to="contact"
            className="text-[#1c4355] hover:underline mx-4 text-xl font-semibold"
          >
            Contáctanos
          </NavLink>
          <button
            className="bg-[#9df0ff] hover:bg-[#9df0ff] cursor-pointer transition-transform duration-300 ease-in hover:brightness-110 hover:scale-110 hover:shadow-md text-[#1c4355] font-bold py-2 px-4 ml-2 rounded"
            onClick={goToLogin}
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

      {/* Home */}
      <div className="p-4 flex items-center">
        <div className="flex flex-col gap-3 w-2/3 pr-8">
          <h1 className="text-6xl font-bold">Bienvenido a EnergyTrack</h1>
          <p className="text-lg font-semibold">
            El ahorro de energía es crucial para reducir la huella ambiental y
            promover la sostenibilidad a largo plazo. Al implementar prácticas
            eficientes en la gestión de iluminación, podemos impactar
            significativamente la conservación de recursos y la reducción de
            costos.
          </p>
          <p className="text-lg font-semibold">
            Nuestro sistema inteligente de seguimiento de consumo energético
            proporciona una solución integral para monitorear y optimizar el uso
            de la iluminación en entornos universitarios. Al utilizar
            tecnologías de vanguardia como sensores de movimiento y análisis de
            datos en tiempo real, ayudamos a las instituciones educativas a
            tomar decisiones informadas y a adoptar medidas proactivas para
            reducir el consumo de energía.
          </p>
          <p className="text-lg font-semibold">
            EnergyTrack se compromete a facilitar la transición hacia prácticas
            energéticas sostenibles, fomentando un entorno educativo más
            respetuoso con el medio ambiente y económicamente eficiente. Únete a
            nosotros en nuestro esfuerzo por construir un futuro más ecológico y
            responsable.
          </p>
        </div>
        <div className="w-1/3">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div
                className={
                  slideIndex === 0 ? 'carousel-item active' : 'carousel-item'
                }
              >
                <img src={img1} className="d-block w-100" alt="imagen1" />
              </div>
              <div
                className={
                  slideIndex === 1 ? 'carousel-item active' : 'carousel-item'
                }
              >
                <img src={img2} className="d-block w-100" alt="imagen2" />
              </div>
              <div
                className={
                  slideIndex === 2 ? 'carousel-item active' : 'carousel-item'
                }
              >
                <img src={img3} className="d-block w-100" alt="imagen3" />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              onClick={handlePrev}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              onClick={handleNext}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
