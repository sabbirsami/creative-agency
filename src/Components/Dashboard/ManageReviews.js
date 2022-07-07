import React from "react";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import Loading from "../Loading";

const ManageReviews = () => {
    const {
        data: reviews,
        refetch,
        isLoading,
    } = useQuery("review", () =>
        fetch(`https://creative-agency-2022.herokuapp.com/reviews`).then(
            (res) => res.json()
        )
    );
    if (isLoading) {
        return <Loading />;
    }
    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://creative-agency-2022.herokuapp.com/review/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                toast.success("Order delete", {
                    duration: 4000,
                });
                refetch();
            });
    };
    return (
        <div>
            <div className=" bg-white rounded-3 mt-3 p-2">
                <div
                    className="m-2 p-3 rounded-2"
                    style={{ backgroundColor: "#F5F6FA" }}
                >
                    <div className="row rounded-3">
                        <div className="col-2">User Name</div>
                        <div className="col-2">Email ID</div>
                        <div className="col-7">Review</div>
                        <div className="col-1">Delete</div>
                    </div>
                </div>
                {reviews.map((review) => (
                    <div className="m-2 p-3 rounded-2">
                        <div className="row align-items-center">
                            <div className="col-2">{review.name}</div>
                            <div className="col-2">{review.email}</div>
                            <div className="col-7">{review.review}</div>

                            <div className="col-1">
                                <button
                                    onClick={() => handleDelete(review._id)}
                                    className="btn px-0 text-danger "
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default ManageReviews;
