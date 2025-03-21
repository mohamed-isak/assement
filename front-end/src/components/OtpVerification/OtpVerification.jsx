import React, { useState } from "react";
import OtpInput from "react-input-otp";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { otp_verification_status } from "../../reducers/loginReducer";
import Show from "../Show/Show";

const OtpVerification = ({ isMultipleField }) => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [otp, setOtp] = useState(2);
  const [otpLength, setOtpLength] = useState(1);
  console.log(authState);
  const handleChange = (value) => {
    setOtp(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isMultipleField) {
      if (otp.length === 6) {
        dispatch(otp_verification_status(true));
      } else {
        alert("Please enter a valid 6-digit OTP.");
      }
    } else {
      dispatch(otp_verification_status(true));
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
        <h2>Verification Code</h2>
        <p>Enter the verification code that we have sent to your Email</p>

        <form onSubmit={handleSubmit}>
          <Show ifCondition={isMultipleField}>
            <OtpInput
              value={otp}
              onChange={handleChange}
              numInputs={otpLength}
              separator={<span>&nbsp;</span>}
              inputStyle="otp-input"
              shouldAutoFocus
              isInputNum
            />
          </Show>
          <Show ifCondition={!isMultipleField}>
            <input
              type="text"
              maxLength={1}
              onChange={handleChange}
              className="otp-single-input"
            />
          </Show>
          <button type="submit" className="otp-btn">
            Continue
          </button>
        </form>

        <button className="resend-btn">Resend Code</button>
      </div>
    </div>
  );
};

export default OtpVerification;
