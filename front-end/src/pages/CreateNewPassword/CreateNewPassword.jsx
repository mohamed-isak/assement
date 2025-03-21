import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./styles.scss";
import { ResetPasswordschema } from "../../validation/formValidation";
import { useDispatch, useSelector } from "react-redux";
import { Show } from "../../components";
import { show_password_updated } from "../../reducers/loginReducer";
import { SucessMessage, ErrorMessage } from "../../components";

const CreateNewPassword = () => {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { isPasswordUpdated, showCreateNewPassword } = authState;
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ResetPasswordschema),
  });

  const onSubmit = (data) => {
    dispatch(show_password_updated(true));
  };

  return (
    <>
      <Show ifCondition={showCreateNewPassword}>
        <div className="reset-password-container">
          <div className="reset-password-content">
            <h2 className="reset-password-title">Create New Password</h2>
            <p className="reset-password-subtitle">
              Your password must be different from previously used passwords
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Password Input */}
              <div className="input-group">
                <img
                  src={"/assets/lock.png"}
                  alt="Lock Icon"
                  className="input-icon"
                />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="New Password"
                  {...register("password")}
                />
                <span
                  className="toggle-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    "🙈"
                  ) : (
                    <img
                      src={"/assets/eye-off.png"}
                      alt="Eye Icon"
                      className="input-icon"
                    />
                  )}
                </span>
              </div>
              {errors.password && (
                <p className="error-message">{errors.password.message}</p>
              )}

              {/* Confirm Password Input */}
              <div className="input-group">
                <img
                  src={"/assets/lock.png"}
                  alt="Lock Icon"
                  className="input-icon"
                />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  {...register("confirmPassword")}
                />
                <span
                  className="toggle-icon"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    "🙈"
                  ) : (
                    <img
                      src={"/assets/eye-off.png"}
                      alt="Eye Icon"
                      className="input-icon"
                    />
                  )}
                </span>
              </div>
              {errors.confirmPassword && (
                <p className="error-message">
                  {errors.confirmPassword.message}
                </p>
              )}

              <button type="submit" className="reset-button">
                Reset Password
              </button>
            </form>
          </div>
        </div>
      </Show>

      <Show ifCondition={isPasswordUpdated}>
        <SucessMessage
          sucessMessage={"Password Updated Successfully."}
          sucessDec={
            "Password changed succesfully, you can login again with new password"
          }
          sucessImg={"circle_sucess.png"}
          sucessBtnText={"Login Again"}
          redirectUrl={"/"}
        />
      </Show>
      <Show ifCondition={!isPasswordUpdated}>
        <ErrorMessage
          errorMessage={"OTP Authntication failed"}
          errorDec={"Please try again"}
        />
      </Show>
    </>
  );
};

export default CreateNewPassword;
