import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Box from '@mui/material/Box';
import Index from "./pages/index";
import Home from "./pages/Home";
import Login from './pages/Login';
import Contact from "./pages/Contact";
import Footer from "./components/Navbar/Footer";
import Navbar from "./components/Navbar/Navigation";

//basic layout and routes for pages
function App() {
  return (
    <Router>
      <Navbar />
      {/* {push footer to bottom of screen} */}
      <Box sx={{ display: 'flex', flex: 1, p: 2, flexDirection: 'column', alignItems: 'center' }}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Box>
      <Footer />
    </Router>
  );
}

export default App;