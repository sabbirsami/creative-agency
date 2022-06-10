import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import "swiper/css";
import HeaderNavbar from "./Components/HeaderNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Shared/Login";

function App() {
    return (
        <div className="App">
            <HeaderNavbar></HeaderNavbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
            </Routes>
        </div>
    );
}

export default App;
