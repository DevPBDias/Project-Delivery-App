import React from 'react';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';

function Header({
  FirstNavigationLink,
  SecondNavegationLink,
  ThirdNavegationLink,
}) {
  return (
    <header className="common-header">
      <div className="buttons-content">
        <FirstNavigationLink />
        <SecondNavegationLink />
        <ThirdNavegationLink />
      </div>
    </header>
  );
}

Header.propTypes = {
  FirstNavigationLink: PropTypes.elementType.isRequired,
  SecondNavegationLink: PropTypes.elementType.isRequired,
  ThirdNavegationLink: PropTypes.elementType.isRequired,
};

export default Header;
