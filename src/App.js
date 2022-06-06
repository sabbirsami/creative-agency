import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import HeaderNavbar from "./Components/HeaderNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
    return (
        <div className="App">
            <HeaderNavbar></HeaderNavbar>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>
        </div>
    );
}

export default App;
