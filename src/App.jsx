import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import NavbarPage from './Pages/NavbarPage';
import RecoverPassword from './Pages/RecoverPassword';
import Register from './Pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<RecoverPassword />} />
      <Route path="/dashboard" element={<NavbarPage />} />
    </Routes>
  );
}

export default App;
