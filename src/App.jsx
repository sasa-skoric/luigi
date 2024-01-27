import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Navbar1 from "./components/Navbar1";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar1 />

        <Routes>
          <Route path="/luigi/" element={<Home />} />

          <Route path="/luigi/menu" element={<Menu />} />

          <Route path="/luigi/about" element={<About />} />

          <Route path="/luigi/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
