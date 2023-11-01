import axios from 'axios';
import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import { IoArrowBackSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Constantes from '../../utils/Constantes';
import BackButton from './BackButton';
import ButtonRegister from './ButtonRegister';

const FormRegister = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();

  const irLogin = () => {
    navigate('/login');
  };

  const Registrarse = async (e) => {
    e.preventDefault();
    const endPoint = Constantes.URL_BASE + '/usuarios/registarse';

    const data = {
      nombres: nombre,
      apellidos: apellido,
      email: email,
      usuario: usuario,
      password: contraseña,
    };

    await axios
      .post(endPoint, data)
      .then((resp) => {
        console.log(resp);
        Swal.fire('Información!', 'Registrado Exitosamente!', 'success');
        navigate('/login');
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status == 400 || error.response.status === 404) {
          Swal.fire('Informacion!', error.response.data.message, 'error');
        } else {
          Swal.fire('Informacion!', 'Ocurrio un error', 'error');
        }
      });
  };
  return (
    <main className="flex justify-center bg-[#52cef5]">
      <div className="flex items-center h-screen justify-center">
        <section className="flex justify-around items-center w-[700px] h-[500px] bg-white border-none rounded-lg shadow-lg overflow-hidden">
          <form className="flex items-center p-2 justify-evenly flex-col bg-white">
            <div className="relative left-[314px] z-auto">
              <BackButton fnIrAlLogin={irLogin} />
            </div>
            <h1 className="text-4xl mb-3 text-center flex justify-center items-center text-[#1c4355] font-bold uppercase">
              Registrarse
            </h1>
            <div className="flex justify-evenly flex-col items-end">
              <div className="mb-3">
                <input
                  className="flex items-center justify-center w-64 h-12 px-4 p-2 rounded-3xl bg-[#7ff8e280] text-[#1c4355] focus:outline-[#43d8f1]"
                  type="text"
                  placeholder="Nombres"
                  onChange={(e) => {
                    setNombre(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <input
                  className="flex items-center justify-center w-64 h-12 px-4 p-2 rounded-3xl bg-[#7ff8e280] text-[#1c4355] focus:outline-[#43d8f1]"
                  type="text"
                  placeholder="Apellidos"
                  onChange={(e) => {
                    setApellido(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <input
                  className="flex items-center justify-center w-64 h-12 px-4 p-2 rounded-3xl bg-[#7ff8e280] text-[#1c4355] focus:outline-[#43d8f1]"
                  type="text"
                  placeholder="Usuario"
                  onChange={(e) => {
                    setUsuario(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <input
                  className="flex items-center justify-center w-64 h-12 px-4 p-2 rounded-3xl bg-[#7ff8e280] text-[#1c4355] focus:outline-[#43d8f1]"
                  type="email"
                  placeholder="Correo electronico"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  className="flex items-center mb-3 justify-center w-64 h-12 px-4 p-2 rounded-3xl bg-[#7ff8e280] text-[#1c4355] focus:outline-[#43d8f1]"
                  type="password"
                  placeholder="Contraseña"
                  onChange={(e) => {
                    setContraseña(e.target.value);
                  }}
                />
              </div>
            </div>
            <ButtonRegister fnRegistarse={Registrarse} label={'Registrarse'} />
          </form>
        </section>
      </div>
    </main>
  );
};

export default FormRegister;
