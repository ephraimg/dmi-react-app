/**
*
* Header
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import AppDescription from './AppDescription';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <AppDescription>
          <FormattedMessage {...messages.appDescription} />
        </AppDescription>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.submit} />
          </HeaderLink>
          <HeaderLink to="/view">
            <FormattedMessage {...messages.view} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

// Header.propTypes = {

// };

export default Header;
