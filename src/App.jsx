import { BrowserRouter,Navigate,Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Page404 from "./Component/page404";
import User from "./Component/User";
import Filter from "./Component/Filter";
import Contact from "./Component/Contact";
import Company from "./Component/Company";
import Other from "./Component/Other";
import Channel from "./Component/Channel";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="user/:name" element={<User/>} />
          <Route path="/*" element={<Navigate to ="/"/>} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/contact/" element={<Contact/>}>
            <Route path="company" element={<Company/>} />
            <Route path="other" element={<Other/>} />
            <Route path="channel" element={<Channel/>} />
          </Route>

          {/* <Route path="/*" element={<Page404/>} />      //for the use of 404 page not found */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
