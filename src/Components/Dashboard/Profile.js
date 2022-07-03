import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import profile from "../../images/profile.png";

const Profile = () => {
    const [user, loading, error] = useAuthState(auth);
    // console.log(user);
    if (loading) {
        return <p>Loading....</p>;
    }
    return (
        <div>
            <div className="container-fluid py-4">
                <div className="row">
                    <div className="col-lg-3">
                        <div
                            style={{ width: "250px", height: "250px" }}
                            className="p-2 bg-white rounded"
                        >
                            {user ? (
                                <img
                                    className="img-fluid w-100"
                                    src={user?.photoURL}
                                    alt=""
                                />
                            ) : (
                                <img
                                    className="img-fluid"
                                    src={profile}
                                    alt=""
                                />
                            )}
                        </div>
                        <div className="px-2 py-4">
                            <button className="btn shadow-sm border-0 rounded-0 px-5 py-2 alert-success text-dark">
                                <Link
                                    to="/dashboard/update-profile"
                                    className="text-decoration-none text-dark px-2 "
                                >
                                    <span className="px-1">Update Profile</span>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="py-1">
                            <div>
                                <p className="m-0">Name:</p>
                                <p className="text-muted">
                                    {user?.displayName}
                                </p>
                            </div>
                            <div>
                                <p className="m-0">Email:</p>
                                <p className="text-muted">{user?.email}</p>
                            </div>
                            <div>
                                <p className="m-0">Phone Number:</p>
                                <p className="text-muted">+8801970706676</p>
                            </div>
                            <div>
                                <p className="m-0">Address:</p>
                                <p className="text-muted">Dhaka, Bangladesh</p>
                            </div>
                            <div>
                                <p className="m-0">Linkedin Account:</p>
                                <p>
                                    <a
                                        target={"_blank"}
                                        rel="noreferrer"
                                        href="https://www.linkedin.com/in/sabbir-mohammad-sami/"
                                        className="text-muted"
                                    >
                                        https://www.linkedin.com/in/sabbir-mohammad-sami/
                                    </a>
                                </p>
                            </div>
                            <div>
                                <p className="m-0">Github Address:</p>
                                <p>
                                    <a
                                        target={"_blank"}
                                        rel="noreferrer"
                                        href="https://github.com/sabbirsami"
                                        className="text-muted"
                                    >
                                        https://github.com/sabbirsami
                                    </a>
                                </p>
                            </div>
                            <div>
                                <p className="m-0">About:</p>
                                <p className="text-muted">
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Quod sequi, repudiandae
                                    tempora quaerat minima dolorem officia,
                                    obcaecati rerum consectetur voluptatem,
                                    voluptatum est fugiat officiis! Velit porro
                                    itaque soluta numquam error!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
