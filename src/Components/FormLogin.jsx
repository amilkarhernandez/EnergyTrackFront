import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Constantes from '../../utils/Constantes';
import '../Styles/Login.css';
import ButtonLogin from './ButtonLogin';
import ButtonRegister from './ButtonRegister';

const FormLogin = () => {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();
  const irRegistrar = () => {
    navigate('/register');
  };
  const iniciarSesion = async (e) => {
    e.preventDefault();
    const endPoint = Constantes.URL_BASE + '/usuarios/login';

    const data = {
      usuario: usuario,
      password: contraseña,
    };

    await axios
      .post(endPoint, data)
      .then((resp) => {
        console.log(resp);
        navigate('/dashboard');
      })
      .catch((error) => {
        console.log(error);
        if (
          error.response.status === 400 ||
          error.response.status === 404 ||
          error.response.status === 401
        ) {
          Swal.fire('Informacion!', error.response.data.message, 'error');
        } else {
          Swal.fire('Informacion!', 'Ocurrio un error', 'error');
        }
      });
  };

  return (
    <main className="main">
      <div className="contenedor">
        <section className="form-container">
          <div className="mensajeBienvenida">
            <h1>Energy Track</h1>
            <p>
              ¡Bienvenidos a <span>Energy Track</span> la platadorma inteligente
              para visualizar y analizar los consumos diarios de iluminación en
              el Bolivar Rave!
            </p>
            <p>
              Encontraras informacion actualizada para potenciar la eficiencia
              energetica de nuestra universidad. Unete a nosotros en este
              emocionante reccorido hacia un campus mas sostenible.
            </p>
            <p>¡Nos complace mucho contar contigo!</p>
          </div>
          <form className="form-signin">
            <h1>Ingresar</h1>
            <div className="contain-inputs">
              <div className="mb-3">
                <input
                  onChange={(e) => {
                    setUsuario(e.target.value);
                  }}
                  type="text"
                  placeholder="Usuario"
                />
              </div>
              <div>
                <input
                  onChange={(e) => {
                    setContraseña(e.target.value);
                  }}
                  type="password"
                  placeholder="Contraseña"
                />
              </div>
              <a
                className="password-recover"
                href="http://localhost:5173/forgotpassword"
              >
                Recuperar contraseña
              </a>
            </div>
            <ButtonLogin fnIniciarSesion={iniciarSesion} label={'Ingresar'} />
            <hr className="w-48 h-1 mx-auto my-1 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <ButtonRegister fnRegistarse={irRegistrar} label={'Registrarse'} />
          </form>
        </section>
      </div>
    </main>
  );
};

export default FormLogin;
