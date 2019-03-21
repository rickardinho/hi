import React, { Component } from 'react';
import colours from '../../styles/colours';
import palette from '../../styles/palette';
import { GeneralText, ConfirmButtonText, H3 } from '../../styles/text';
import { ConfirmButton, Row, Column } from '../../styles/styles';
import { feedHorizPaddingScale, moderateScale } from '../../styles/scaling';
// import history from '../Navigation/history';
// import * as ROUTES from '../../constants/routes';

const logo = require('../../images/logo.svg');

class Landing extends Component {

  constructor (props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
    this.showSignInModal = this.showSignInModal.bind(this);
    this.showSignUpModal = this.showSignUpModal.bind(this);
  }

  componentWillMount () {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount () {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  showSignInModal () {
    const { showSignInModal } = this.props;

    showSignInModal();

  }

  showSignUpModal () {
    const { showSignUpModal } = this.props;

    showSignUpModal();
  }

  render () {
    const { width } = this.state;
    const screenWidth = width;

    return (
      <div style={{ flex: 1, alignItems: 'center', backgroundColor: '#fff' }}>


        <div style={{ height: '20%' }} />
        <Row style={{ background: palette.banner, alignItems: 'center', height: (screenWidth > 700) ? 60 : 100, width: '100%' }}>
          <Column style={{ background: 'transparent' }}>
            <Row style={{ justifyContent: 'flex-start', alignItems: 'flex-end' }}><H3 style={{ fontSize: 16, color: colours.white, textAlign: 'left', verticalAlign: 'text-bottom', borderWidth: 0, borderStyle: 'solid' }}>Welcome to</H3><H3 style={{ color: colours.white, textAlign: 'left', verticalAlign: 'text-bottom', fontSize: 20, borderWidth: 0, borderStyle: 'solid' }}>&nbsp;Happy Irrigator&nbsp;</H3></Row>
            <Row style={{ justifyContent: 'flex-start', alignItems: 'flex-end' }}><H3 style={{ fontSize: 16, color: colours.white, textAlign: 'left' }}>for all your irrigation planning</H3></Row>
          </Column>
        </Row>
        <div style={{ height: '20%', justifyContent: 'center', marginBottom: 25 }}>
          <GeneralText style={{ textAlign: 'center', marginHorizontal: feedHorizPaddingScale(10) }}>
            The easy way to share babysitting without the tit-for-tat.
          </GeneralText>
        </div>
        <div style={{ flexDirection: 'row', height: '20%', marginLeft: 10, marginRight: 10 }}>
          <div
            style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column', flex: 1, marginBottom: 40 }}
          >

            <ConfirmButton
              style={{ backgroundColor: colours.orange, borderColor: colours.orange }}
              onClick={ this.showSignUpModal }
            >
              <ConfirmButtonText>
                Sign up
              </ConfirmButtonText>
            </ConfirmButton>
          </div>
        </div>
      </div>
    );
  }

}

export default Landing;
