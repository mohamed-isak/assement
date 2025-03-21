import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  select_verification_method,
  reset_state,
} from "../../reducers/loginReducer";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const navigate = useNavigate();

  console.log("Current State:", authState); // ✅ Log the current state

  const [selectedMethod, setSelectedMethod] = useState("");

  const { register, handleSubmit } = useForm();

  const onSubmit = (_data) => {
    dispatch(select_verification_method(selectedMethod));
    if (selectedMethod === "email") {
      navigate("/reset-by-email");
    } else {
      navigate("/reset-by-phone");
    }
  };

  const handleResetSelection = (type) => {
    dispatch(reset_state());
    setSelectedMethod(type);
  };
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2>Forgot Password</h2>
        <p>Select which contact details should we use to reset your password</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Option */}
          <label
            className={`option ${selectedMethod === "email" ? "selected" : ""}`}
          >
            <input
              type="radio"
              value="email"
              {...register("method")}
              onChange={() => handleResetSelection("email")}
            />
            <img src="/assets/email-icon.png" alt="Email Icon" />
            <div>
              <h4>Email</h4>
              <p>******@mail.com</p>
            </div>
          </label>

          {/* Phone Option */}
          <label
            className={`option ${selectedMethod === "phone" ? "selected" : ""}`}
          >
            <input
              type="radio"
              value="phone"
              {...register("method")}
              onChange={() => handleResetSelection("phone")}
            />
            <img src="/assets/input-phone.png" alt="Phone Icon" />
            <div>
              <h4>Phone Number</h4>
              <p>**** **** **** 2345</p>
            </div>
          </label>

          {/* Continue Button */}
          <button type="submit" className="continue-btn">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
