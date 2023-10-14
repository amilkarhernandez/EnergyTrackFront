import React from 'react';
import backArrow from '../assets/buttonBack.svg';

const BackButton = ({ fnIrAlLogin }) => {
  return (
    <div>
      <button
        onClick={fnIrAlLogin}
        className="px-2 py-2 bg-[#52cef5] text-xl font-bold text-white border-none rounded-2xl cursor-pointer transition-transform duration-300 ease-in text-18 hover:brightness-110 hover:scale-110 hover:shadow-md hover:shadow-[#52cef5]"
      >
        <img className="h-7" src={backArrow} alt="boton atras" />
      </button>
    </div>
  );
};

export default BackButton;
