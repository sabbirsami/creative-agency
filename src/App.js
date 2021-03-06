import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import "swiper/css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Shared/Login";
import RequireAuth from "./Shared/RequireAuth";
import PageNotFount from "./Shared/PageNotFount";
import SignUp from "./Shared/SignUp";
import Dashboard from "./Components/Dashboard/Dashboard";
import ContactSection from "./Components/ContactSection/ContactSection";
import Profile from "./Components/Dashboard/Profile";
import UpdateProfile from "./Components/Dashboard/UpdateProfile";
import Order from "./Components/Order";
import { Toaster } from "react-hot-toast";
import MyOrder from "./Components/Dashboard/MyOrder";
import ServiceList from "./Components/Dashboard/ServiceList";
import ManageOrders from "./Components/Dashboard/ManageOrders";
import ManageUsers from "./Components/Dashboard/ManageUsers";
import AddReview from "./Components/Dashboard/AddReview";
import ManageReviews from "./Components/Dashboard/ManageReviews";
import AddAdmin from "./Components/Dashboard/AddAdmin";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/sign-up" element={<SignUp />}></Route>
                <Route
                    path="/dashboard"
                    element={
                        <RequireAuth>
                            <Dashboard />
                        </RequireAuth>
                    }
                >
                    <Route path="service" element={<ServiceList />}></Route>
                    <Route index element={<Profile />}></Route>
                    <Route path="add-admin" element={<AddAdmin />}></Route>
                    <Route
                        path="update-profile"
                        element={<UpdateProfile />}
                    ></Route>
                    <Route
                        path="manage-order"
                        element={<ManageOrders />}
                    ></Route>
                    <Route path="my-order" element={<MyOrder />}></Route>
                    <Route
                        path="manage-review"
                        element={<ManageReviews />}
                    ></Route>
                    <Route path="add-review" element={<AddReview />}></Route>
                    <Route path="manage-user" element={<ManageUsers />}></Route>
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
