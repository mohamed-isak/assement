import React from "react";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset_state } from "../../reducers/loginReducer";

const SuccessPage = ({
  sucessMessage,
  sucessDec,
  sucessImg,
  sucessBtnText,
  redirectUrl,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleContinue = () => {
    dispatch(reset_state());
    navigate(redirectUrl);
  };

  return (
    <div className="success-container">
      <div className="success-content">
        <img
          src={`/assets/${sucessImg}`}
          alt="Success"
          className="success-icon"
        />
        <h2 className="success-title">SUCCESS!</h2>
        <p className="success-message">{sucessMessage}</p>
        <p className="success-instruction">{sucessDec}</p>
        <button className="success-button" onClick={handleContinue}>
          {sucessBtnText}
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
