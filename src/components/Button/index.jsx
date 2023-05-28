import React from "react";
import PropTypes from "prop-types";

Button.propTypes = {
  className: PropTypes.string,
};

function Button({ className, onClick, onBlur, disabled, children, ...props }) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      onBlur={onBlur}
      className={
        "transition-base duration-200 outline-none bg-primary text-white py-3 px-7 rounded-[33px] text-base hover:bg-white hover:text-primary ring-inset ring-1 ring-green-500" +
        " " +
        (className ?? "")
      }
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
