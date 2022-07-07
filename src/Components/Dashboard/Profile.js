import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import profile from "../../images/profile.png";
import Loading from "../Loading";

const Profile = () => {
    const [user, loading] = useAuthState(auth);

    const { data, isLoading } = useQuery("currentUser", () =>
        fetch(
            `https://creative-agency-2022.herokuapp.com/users/${user?.email}`
        ).then((res) => res.json())
    );

    if (loading || isLoading) {
        return <Loading />;
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
                                    {data?.name || user?.displayName}
                                </p>
                            </div>
                            <div>
                                <p className="m-0">Email:</p>
                                <p className="text-muted">
                                    {data?.email || user?.email}
                                </p>
                            </div>
                            <div>
                                <p className="m-0">Phone Number:</p>
                                <p className="text-muted">{data?.phone}</p>
                            </div>
                            <div>
                                <p className="m-0">Address:</p>
                                <p className="text-muted">{data?.address}</p>
                            </div>
                            <div>
                                <p className="m-0">Linkedin Account:</p>
                                <p>
                                    <a
                                        target={"_blank"}
                                        rel="noreferrer"
                                        href={data?.githubLink}
                                        className="text-muted"
                                    >
                                        {data?.githubLink}
                                    </a>
                                </p>
                            </div>
                            <div>
                                <p className="m-0">Github Address:</p>
                                <p>
                                    <a
                                        target={"_blank"}
                                        rel="noreferrer"
                                        href={data?.linkedinLink}
                                        className="text-muted"
                                    >
                                        {data?.linkedinLink}
                                    </a>
                                </p>
                            </div>
                            <div>
                                <p className="m-0">About:</p>
                                <p className="text-muted">{data?.about}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
