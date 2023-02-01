import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { stripeSuccessRequest } from "../actions/stripe";

const StripeSuccess = () => {
  const { hotelId } = useParams();
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("send this hotelid to backend to create order", hotelId);
    stripeSuccessRequest(token, hotelId).then((res) => {
      if (res.data.success) {
        console.log("stripe success response", res.data);
        navigate("/dashboard");
      } else {
        navigate("/stripe/cancel");
      }
    });
  }, [hotelId, token, navigate]);

  return (
    <div className="container">
      <div className="col">
        <h2 className="text-center p-5">Payment success. {hotelId}</h2>
      </div>
    </div>
  );
};

export default StripeSuccess;
