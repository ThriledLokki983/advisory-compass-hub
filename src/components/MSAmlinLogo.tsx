import React from 'react';
import Logo from '../img/amlin-logo.png';

const MSAmlinLogo: React.FC = () => {
  return (
    <div className="flex items-center">
      <figure>
        <img src={Logo} alt="AMlin Logo" />
      </figure>
    </div>
  );
};

export default MSAmlinLogo;
