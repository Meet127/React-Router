import { BrowserRouter,Navigate,Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Page404 from "./Component/page404";
import User from "./Component/User";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/*" element={<Page404/>} /> */}
          <Route path="user" element={<User/>} />
          <Route path="/*" element={<Navigate to ="/"/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
