import React from 'react';

const ButtonRegister = ({ fnRegistarse, label }) => {
  return (
    <div>
      <button
        onClick={fnRegistarse}
        className="px-4 py-2.5 bg-green-500 text-xl font-bold text-white border-none rounded-2xl cursor-pointer transition-transform duration-300 ease-in text-18 hover:brightness-110 hover:scale-110 hover:shadow-md hover:shadow-green-500"
      >
        {label}
      </button>
    </div>
  );
};

export default ButtonRegister;
