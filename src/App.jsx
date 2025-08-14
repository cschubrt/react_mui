import React from "react";
import Navbar from "./components/Navbar/Navigation";
import Footer from "./components/Navbar/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Box from '@mui/material/Box';
import Index from "./pages/";
import Home from "./pages/home";
import SignUp from "./pages/signup";
import Login from './pages/Login';
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Box sx={{ display: 'flex', flex: 1, p: 2, flexDirection: 'column', alignItems: 'center' }}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;