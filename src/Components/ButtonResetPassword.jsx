import React from 'react';

const ButtonResetPassword = ({ fnCambiarContraseña, label }) => {
  return (
    <div>
      <button
        onClick={fnCambiarContraseña}
        className="px-4 py-2 bg-[#43D8F1] text-lg font-bold text-[#1c4355] border-none rounded-3xl cursor-pointer transition-transform duration-300 ease-in text-18 hover:brightness-110 hover:scale-110 hover:shadow-md hover:shadow-[#43D8F1]"
      >
        {label}
      </button>
    </div>
  );
};

export default ButtonResetPassword;
