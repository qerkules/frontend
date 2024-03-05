import Carpage from "./pages/carpage/Carpage";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Whatsapp from "./components/whatsapp/Whatsapp";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Allcars from "./pages/allcars/Allcars";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cars" element={<Carpage />} />
        <Route path="/allcars" element={<Allcars />} />
      </Routes>
      <Whatsapp />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
