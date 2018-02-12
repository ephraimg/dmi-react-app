/**
*
* Header
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import AppDescription from './AppDescription';
import AppSubDescription from './AppSubDescription';
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
        <AppSubDescription>
          <FormattedMessage {...messages.appSubDescription} />
        </AppSubDescription>
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

export default Header;
