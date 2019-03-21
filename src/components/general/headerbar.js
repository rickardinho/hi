import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrin } from '@fortawesome/free-solid-svg-icons';
import { LogoWrapper, Row, H3, H4, HeaderbarWrapper } from '../../styles/styles';
import NavBarContainer from '../../containers/Navigation/navbar-container';


const Headerbar = () => {

    return (
      <HeaderbarWrapper>

        <LogoWrapper>

          <Row>
            <H3>Happy Irrigator&nbsp;</H3>
          </Row>
          <div style={{ borderRadius: 30, background: 'black', borderStyle: 'solid', borderColor: 'black', borderWidth: 1 }}>
            <FontAwesomeIcon
              icon={faGrin}
              size='2x'
              style={{ color: 'yellow', textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} />
          </div>
          <Row>
            <H4>&nbsp;v2.0</H4>
          </Row>


        </LogoWrapper>

        <NavBarContainer />

      </HeaderbarWrapper>

    );
};

export default Headerbar;
