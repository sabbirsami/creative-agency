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
import Profile from "./Components/Dashboard/Profile";
import UpdateProfile from "./Components/Dashboard/UpdateProfile";
import Order from "./Components/Order";
import { Toaster } from "react-hot-toast";
import MyOrder from "./Components/Dashboard/MyOrder";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/sign-up" element={<SignUp />}></Route>
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="service" element={<ContactSection />}></Route>
                    <Route index element={<Profile />}></Route>
                    <Route
                        path="add-admin"
                        element={<ContactSection />}
                    ></Route>
                    <Route
                        path="update-profile"
                        element={<UpdateProfile />}
                    ></Route>
                    <Route
                        path="manage-order"
                        element={<ContactSection />}
                    ></Route>
                    <Route path="my-order" element={<MyOrder />}></Route>
                    <Route
                        path="manage-review"
                        element={<ContactSection />}
                    ></Route>
                    <Route
                        path="add-review"
                        element={<ContactSection />}
                    ></Route>
                    <Route
                        path="manage-user"
                        element={<ContactSection />}
                    ></Route>
                </Route>
                <Route path="/contact" element={<ContactSection />}></Route>
                <Route path="/services/:id" element={<Order />}></Route>
                <Route path="*" element={<PageNotFount />}></Route>
            </Routes>
            <Toaster />
        </div>
    );
}

export default App;
