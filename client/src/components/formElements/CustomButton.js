import React from "react";
import "./CustomButton.styles.scss";

const CustomButton = ({
  children,
  view,
  isGoogleSignIn,
  inverted,
  ...props
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""}${
        isGoogleSignIn ? "google-sign-in" : ""
      } ${view ? "view" : ""} custom-button`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
