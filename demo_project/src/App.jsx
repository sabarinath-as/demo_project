import { BrowserRouter, Route, Routes } from "react-router-dom";
import home from "./components/home";
import contact from "./components/contact";
import service from "./components/service";
import about from "./components/about";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/about" element={<about />} />
        <Route path="/contact" element={<contact />} />
        <Route path="/service" element={<service />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
