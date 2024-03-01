import Carpage from "./pages/carpage/Carpage";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


{
  /* <Route path="/elantra" id=1241 element={<Customers />} /> */
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cars" element={<Carpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
