import React from "react";
import "./FormInput.styles.scss";

const FormInput = ({ label, id, handleChange, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
          htmlFor={id}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
