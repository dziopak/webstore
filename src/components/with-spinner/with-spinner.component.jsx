import React from "react";
import "./with-spinner.style.scss";

const Spinner = Component => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className="spinner">
      <div className="spinner__container"></div>
    </div>
  ) : (
    <Component {...otherProps} />
  );
};

export default Spinner;
