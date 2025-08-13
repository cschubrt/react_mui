import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Box from '@mui/material/Box';
import Home from "./pages";
import SignUp from "./pages/signup";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Box sx={{ display: 'flex', flex: 1, p: 2, flexDirection: 'column', alignItems: 'center' }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;