import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/NavDasboard.css';
import logo from '../assets/logo.png';
import usericon from '../assets/userIcon.png';

const UserDropdown = () => {
  return (
    <div className="flex items-center">
      <label className="text-white font-semibold ">Usuario</label>
      <NavDropdown
        title={<img src={usericon} alt="user poto" className="w-11 h-11" />}
      >
        <NavDropdown.Item href="#action/3.1">Configuración</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Cerrar sesión</NavDropdown.Item>
      </NavDropdown>
    </div>
  );
};

const NavDashboard = () => {
  return (
    <Navbar className="bg-[#43D8F1] h-[80px]">
      <img
        src={logo}
        alt="Logo"
        className="p-1 h-[100px] w-[100px] ml-2 cursor-pointer"
      />
      <Nav className="ms-auto">
        <UserDropdown />
      </Nav>
    </Navbar>
  );
};

export default NavDashboard;
