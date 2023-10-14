import React from 'react';
import ConsumptionList from '../Components/ConsumptionList';
import NavDashboard from '../Components/NavDashboard';

const NavbarPage = () => {
  return (
    <div className="bg-[#212529] h-screen">
      <NavDashboard />
      <ConsumptionList />
    </div>
  );
};

export default NavbarPage;
