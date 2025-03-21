import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./styles.scss";
import { useDispatch } from "react-redux";
import { show_otp_screen } from "../../reducers/loginReducer";

const ResetPassword = ({ isEmailReset }) => {
  const dispatch = useDispatch();
  // Validation Schema dynamically
  const schema = yup.object().shape({
    contact: isEmailReset
      ? yup.string().email("Invalid email format").required("Email is required")
      : yup
          .string()
          .matches(/^\d{10}$/, "Enter a valid phone number")
          .required("Phone number is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(
      `OTP sent to ${isEmailReset ? "email" : "phone"}:`,
      data.contact
    );
    dispatch(show_otp_screen(true));
  };

  return (
    <div className="reset-password-container">
      <div className="reset-password-box">
        <h2>Reset Password</h2>
        <p>
          {isEmailReset
            ? "Enter your email, we will send a verification code to your email"
            : "Enter your phone number, we will send a verification code via SMS"}
        </p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <img
              src={
                isEmailReset
                  ? "/assets/input-email.png"
                  : "/assets/input-phone.png"
              }
              alt={isEmailReset ? "Email Icon" : "Phone Icon"}
              className="input-icon"
            />
            <input
              type={isEmailReset ? "email" : "number"}
              placeholder={
                isEmailReset ? "Enter Your Email" : "Enter Your Phone Number"
              }
              {...register("contact")}
              className={errors.contact ? "error-input" : ""}
            />
          </div>

          {/* Error Message */}
          {errors.contact && <p className="error">{errors.contact.message}</p>}

          {/* Send OTP Button */}
          <button type="submit" className="otp-btn">
            Send OTP
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
