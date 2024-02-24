import Carpage from "./pages/carpage/Carpage";
import Homepage from "./pages/homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
