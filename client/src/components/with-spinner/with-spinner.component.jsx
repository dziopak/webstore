import React from "react";
import "./with-spinner.style.scss";

const WithSpinner = Component => ({ isLoaded, ...otherProps }) => {
  return !isLoaded ? (
    <div className="spinner">
      <div className="spinner__container"></div>
    </div>
  ) : (
    <Component {...otherProps} />
  );
};

export default WithSpinner;
