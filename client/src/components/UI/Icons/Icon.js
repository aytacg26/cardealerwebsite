import React from 'react';
import './icons.css';

const Icon = ({ iconClass, clicked, styleClass, title }) => {
  return (
    <div className={styleClass} title={title}>
      <i className={iconClass} onClick={clicked}></i>
    </div>
  );
};

export default Icon;
