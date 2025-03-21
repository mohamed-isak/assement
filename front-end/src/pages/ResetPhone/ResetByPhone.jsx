import React from "react";
import "./styles.scss";
import {
  OtpVerification,
  ResetPassword,
  SucessMessage,
  ErrorMessage,
  Show,
} from "../../components";
import { useSelector } from "react-redux";

const ResetByPhone = () => {
  const authState = useSelector((state) => state.auth);
  const { showOtp, isVerificationSucess } = authState;
  console.log(authState);
  return (
    <div>
      <Show ifCondition={!showOtp}>
        <ResetPassword isEmailReset={false} />
      </Show>
      <Show ifCondition={showOtp && !isVerificationSucess}>
        <OtpVerification isMultipleField={false} />
      </Show>
      <Show ifCondition={isVerificationSucess}>
        <SucessMessage
          sucessMessage={"OTP Verified Successfully."}
          sucessDec={"Click Continue to reset your password"}
          sucessImg={"sucess.png"}
          sucessBtnText={"Continue"}
          redirectUrl={"/reset-password"}
        />
      </Show>
      <Show ifCondition={!isVerificationSucess}>
        <ErrorMessage
          errorMessage={"OTP Authntication failed"}
          errorDec={"Please try again"}
        />
      </Show>
    </div>
  );
};

export default ResetByPhone;
