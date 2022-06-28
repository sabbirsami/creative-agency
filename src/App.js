import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import "swiper/css";
import HeaderNavbar from "./Components/HeaderNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Shared/Login";
import PageNotFount from "./Shared/PageNotFount";
import SignUp from "./Shared/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard";
import ContactSection from "./Components/ContactSection/ContactSection";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/sign-up" element={<SignUp />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/contact" element={<ContactSection />}></Route>
                <Route path="*" element={<PageNotFount />}></Route>
            </Routes>
        </div>
    );
}

export default App;
