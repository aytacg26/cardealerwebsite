import React from 'react';

const Button = ({ btnClick, children, btnClass }) => {
  return (
    <button type='button' onClick={btnClick} className={btnClass}>
      {children}
    </button>
  );
};

export default Button;
