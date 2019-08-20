import React from "react";
import "./form-input.style.scss";

const FormInput = ({ handleChange, label, type, ...otherProps }) => {
  if (type !== "textarea") {
    return (
      <div className="form-element">
        <input
          type={type}
          className="form-element__input"
          onChange={handleChange}
          {...otherProps}
        />
        {label ? (
          <label
            className={`${
              otherProps.value.length ? "form-element__label--shrink" : ""
            } form-element__label`}
          >
            {label}
          </label>
        ) : null}
      </div>
    );
  } else {
    return (
      <div class="form-element">
        <textarea
          className="form-element__input form-element__input--textarea"
          onChange={handleChange}
          {...otherProps}
        />
        {label ? (
          <label
            className={`${
              otherProps.value.length ? "form-element__label--shrink" : ""
            } form-element__label`}
          />
        ) : null}
      </div>
    );
  }
};

export default FormInput;
