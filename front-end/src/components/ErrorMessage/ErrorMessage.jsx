import React from "react";
import "./styles.scss";

const ErrorMessage = ({ errorMessage, errorDec }) => {
  const handleContinue = () => {
    console.log("Redirect to Reset Password Page");
    // Add navigation logic (e.g., using React Router)
  };

  return (
    <div className="error-container">
      <div className="error-content">
        <img src="/assets/error.png" alt="Error" className="error-icon" />
        <h2 className="error-title">Error!</h2>
        <p className="error-message">{errorMessage}</p>
        <p className="error-instruction">{errorDec}</p>
        <button className="error-button" onClick={handleContinue}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default ErrorMessage;
