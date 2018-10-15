// Package imports
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

// In-project imports
import LoginPage from 'pages/auth/login/LoginPage';

/*
 * Component: Routes scope ROOT
 */
class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }

  /*
   * Okta-based authentication check (via `auth` prop)
   */
  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  /*
   * Renders route scope for guests (not logged in)
   */
  renderGuestMode() {
    return (
      <Switch>
        <Route
          exact
          patch="/"
          component={LoginPage}
        />
        <Redirect
          from="*"
          to="/"
        />
      </Switch>
    );
  }

  /*
   * Renders route scope for logged-in users
   */
  renderUserMode() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={() => <div>Logged in</div>}
        />
        <Redirect
          from="*"
          to="/"
        />
      </Switch>
    );
  }

  render() {
    if (this.state.authenticated === null) return (<div>Loading ...</div>);

    return this.state.authenticated ?
      this.renderUserMode() :
      this.renderGuestMode();
  }
}

export default withAuth(Routes);
