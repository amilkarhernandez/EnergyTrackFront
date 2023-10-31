import { Route, Routes } from 'react-router-dom';
import './App.css';
import AcercaNosotros from './Pages/AcercaNosotros';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Login from './Pages/Login';
import NavbarPage from './Pages/NavbarPage';
import PageNotFound from './Pages/PageNotFound';
import RecoverPassword from './Pages/RecoverPassword';
import Register from './Pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AcercaNosotros />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<RecoverPassword />} />
      <Route path="/dashboard" element={<NavbarPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
