// Package imports
import React from 'react';

// In-project imports
import CONFIG from 'config';
import OktaSignInWidget from 'components/auth/OktaSignInWidget';

// Asset imports
import logoImg2x from 'assets/logo@2x.png';
import logoImg3x from 'assets/logo@3x.png';
import bgImg from 'assets/images/bg.jpg';
import bgImg2x from 'assets/images/bg@2x.jpg';
import bgImg3x from 'assets/images/bg@3x.jpg';
import heartIcon from 'assets/images/heart.svg';

// Local imports
import {
  PageContainer,
  Sidebar,
  Content,
  Logo,
  Tagline,
  Background
} from './LoginPage.styles';

/*
 * Page Component: Login
 */
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.onSuccess = this.onSuccess.bind(this);
    this.onError = this.onError.bind(this);
  }

  onSuccess(res) {
    // Do something at the time of login success
    console.log('Login success');
  }

  onError(err) {
    // Do something at the time of login failure
    console.log('Login failure');
  }

  render() {
    return (
      <PageContainer>
        <Sidebar>
          <Background
            src={bgImg}
            srcset={`${bgImg2x} 2x, ${bgImg3x} 3x`}
            alt=""
          />
          <Logo
            src={logoImg2x}
            srcset={`${logoImg2x} 2x, ${logoImg3x} 3x`}
            alt="Necto"
          />
          <Tagline>
            Your neighbours <img alt="&heart;" src={heartIcon} /> us
          </Tagline>
        </Sidebar>
        <Content>
          <OktaSignInWidget
            onSuccess={this.onSuccess}
            onError={this.onError}
            baseUrl={CONFIG.okta.baseUrl}
          />
        </Content>
      </PageContainer>
    );
  }
}

export default LoginPage;
