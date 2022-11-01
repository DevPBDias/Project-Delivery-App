import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function Header({
  FirstNavigationLink,
  SecondNavegationLink,
  ThirdNavegationLink,
}) {
  const [userName, setName] = useState();
  useEffect(() => {
    async function sales() {
      try {
        const user = JSON.parse(localStorage.getItem('userLogged'));
        setName(user.name);
      } catch (error) {
        console.log(error);
      }
    }
    sales();
  }, [userName]);
  return (
    <div className="buttons-content">
      <FirstNavigationLink />
      <SecondNavegationLink />
      <h3
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {userName}
      </h3>
      <ThirdNavegationLink />
    </div>
  );
}
Header.propTypes = {
  FirstNavigationLink: PropTypes.elementType.isRequired,
  SecondNavegationLink: PropTypes.elementType.isRequired,
  ThirdNavegationLink: PropTypes.elementType.isRequired,
};
export default Header;
