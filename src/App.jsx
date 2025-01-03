import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";
import SignIN from "./pages/SignIN";
import SignUP from "./pages/SignUP";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/sign-in" element={<SignIN/>} />
        <Route path="/sign-up" element={<SignUP/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
