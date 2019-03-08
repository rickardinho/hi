import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colours from './colours';

// Fonts

const fonts = {
  default: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  default2: 'Arial, Helvetica, sans-serif',
  thin: 500
};


// Main Layout


export const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  border-width: 0px;
  border-color: blue;
  border-style: solid;
  height: 100%;

`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  flex: 1;

`;

export const MainRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex: 1;
  justify-content: space-between;

`;
export const PageTitleDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  background: ${colours.offWhite};
  justify-content: center;

`;

export const Block = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  background: ${colours.verylightgray};
  border-width: 2px;
  border-color: ${colours.lightgray};
  border-style: solid;
  min-width: 40px;
  max-width: 80px;



`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  background: ${colours.offWhite};
  border-width: 0px;
  border-color: pink;
  border-style: solid;


`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  background: ${colours.offWhite};
  border-width: 0px;
  border-color: orange;
  border-style: solid;


`;

export const InfoRowDiv = styled.div`
  display: flex;

  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background: ${colours.offWhite};
  border-width: 0px;
  border-color: pink;
  border-style: solid;

  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
  }


`;

export const RowWrapped = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background: ${colours.offWhite};
  border-width: 0px;
  border-color: blue;
  border-style: solid;


`;

export const CellSm = styled.div`
  display: table-cell;
  width: 10%;
  justify-content: center;
  align-items: center;
  background: ${props => (props.background === null) ? colours.verylightgray : props.background};
  border-width: 0px;
  border-color: ${colours.orange};
  border-style: solid;
  min-width: 40px;
  max-width: 80px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 2px;
  padding-right: 2px;

`;

export const CellLg = styled.div`
  display: flex;
  flex-grow: 1;
  width: 30%;
  justify-content: center;
  align-items: center;
  background: ${colours.verylightgray};
  border-width: 1px;
  border-color: ${colours.offWhite};
  border-style: solid;


`;

export const Input = styled.input`
  font-family: ${fonts.default};
  text-align: center;
  margin: 0px;
  padding: 0px;
  background: ${colours.white};
  font-size: 10px;

  font-weight: 500;
  border-width: 1px;
  border-color: ${colours.lightgray};
  border-style: solid;
  border-radius: 3px;
  width: 100%;
  height: 100%;
`;

export const DivRainfall = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: center;
  align-items: center;
  background: ${colours.verylightgray};
  border-width: 1px;
  border-color: orange;
  border-style: solid;
  min-width: 70px;

`;

export const Div1 = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: center;
  align-items: center;
  background: ${colours.verylightgray};
  border-width: 1px;
  border-color: verydarkgreen;
  border-style: solid;
  min-width: ${props => props.minWidth}px;
  max-width: ${props => props.maxWidth}px;

`;

export const Div2 = styled.div`
  display: flex;
  flex: 2;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  background: ${colours.verylightgray};
  border-width: 1px;
  border-color: darkgreen;
  border-style: solid;


`;

export const Div3 = styled.div`
  display: flex;
  flex: 3;
  justify-content: center;
  align-items: center;
  background: ${colours.verylightgray};
  border-width: 1px;
  border-color: green;
  border-style: solid;


`;

export const Div4 = styled.div`
  display: flex;
  flex: 4;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
  background: ${colours.verylightgray};
  border-width: 1px;
  border-color: lightgreen;
  border-style: solid;



`;

export const BarBackground = styled.div`
  height: 20px;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  background: ${colours.lightgray};
  margin-left: 5px;
  margin-right: 10px;
  border-radius: 5px;

`;
export const BlueBar = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  background: ${props => props.value * 10 > 66 ? colours.lightgray : props.value * 10 > 33 ? colours.blue : colours.lightblue};
  width: ${props => props.value * 10}%;
  border-radius: 5px;
  transition: 'all .2s ease-out';

`;
export const YellowBar = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  background: ${props => props.value * 10 > 66 ? colours.lightgray : props.value * 10 > 33 ? colours.yellow : colours.lightyellow};
  width: ${props => props.value * 10}%;
  border-radius: 5px;
  transition: 'all .2s ease-out';

`;

export const Logo = styled.img`


`;

export const LogoName = styled.img`
  @media (max-width: 800px) {
    display: none;
  }
  @media (max-width: 600px) {
    display: inline;
  }

`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;
  border-width: 0px;
  border-color: lightgreen;
  border-style: solid;

`;

export const CenteredDiv = styled.div`
  margin: auto;
  padding: 50px;
  width: 230px;

`;

export const ImageDiv = styled.div`
  background: blue;
  align-items: center;
  width: 230px;

`;

export const SocialDiv = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;

export const DownloadDiv = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${colours.verylightgray};

`;

export const TeamDiv = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  width: 60%;
  margin: auto;


  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }

`;

export const TeamMemberDiv = styled.div`
  background: ${colours.verylightgray};


`;

export const BulletWrapper = styled.div`
  width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 600px) {
    margin: 30px;
    width: auto;
  }

`;

export const BulletDiv = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;


`;

export const SocialButton = styled.button`

  padding: 10px;

`;

export const SelectorButton = styled.button`
  margin-bottom: 0px;
  padding: 5px;
  width: 30px;
  font-size: 16px;
  background: ${colours.offWhite};
  color: ${colours.blue};
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${colours.lightgray};
  border-style: solid;
  border-radius: 2px;

  &:hover {
    background: ${colours.verylightgray};
    color: ${colours.blue};
  }
`;

export const SignoutButton = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  display: table-cell;
  padding: 10px 25px;
  border: 0px none #ddd;
  text-decoration: none;

  background: #f7f7f7;
  color: #939598;

  &:hover {
    background: ${colours.verylightgray};
    color: ${colours.blue};
  }
`;

export const NavLink = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  display: table-cell;
  padding: 10px 25px;
  border: 0px none #ddd;
  text-decoration: none;

  background: #f7f7f7;
  color: #939598;

  &:hover {
    background: ${colours.verylightgray};
    color: ${colours.blue};
  }
`;


export const ShowChartButton = styled.button`
  margin: 2px;
  padding: 5px;
  background: ${colours.blue};
  color: ${colours.verylightgray};
  right: 0;
  position: absolute;
  border-radius: 5px;

  &:hover {
    background: ${colours.verylightgray};
    color: ${colours.blue};
  }
`;

export const CloseButton = styled.button`

  padding: 0px;
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
  background: ${colours.red};
  color: ${colours.verylightgray};
  border-radius: 30px;
  border-width: 1px;
  border-color: ${colours.verylightgray};
  border-style: solid;
  align-items: center;
  justify-content: center;
  button:focus {outline:0;};
  text-decoration: none;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    background: ${colours.offWhite};
    color: ${colours.red};
  }

`;

export const NavButtonWrapper = styled.div`

  display: flex;
  flex-direction: row;
  background: 'blue';
  justify-content: center;


`;


export const BurgerWrapper = styled.div`
  padding: 10px;

`;

export const Title = styled.h1`
  font-family: ${fonts.default};
  font-size: 26px;
  text-align: left;
  color: ${colours.blue};

`;

export const H2 = styled.h2`
  font-family: ${fonts.default};
  text-align: left;
  color: ${colours.blue};
  font-size: 20px;
  line-height: 31px;
  font-weight: 300;

`;

export const H3 = styled.h3`
  font-family: ${fonts.default};
  text-align: center;
  margin: 0px;
  color: ${colours.blue};
  font-size: 18px;
  line-height: 22px;
  font-weight: 500;


`;

export const H4 = styled.h4`
  font-family: ${fonts.default};
  text-align: center;
  margin: 0px;
  color: ${colours.blue};
  font-size: 10px;
  line-height: 22px;
  font-weight: 500;


`;

export const T4 = styled.p`
  font-family: ${fonts.default};
  text-align: center;
  margin: 0px;
  color: ${colours.darkgray};
  font-size: 10px;
  line-height: 22px;
  font-weight: 400;

`;

export const D4 = styled.p`
  font-family: ${fonts.default};
  text-align: center;
  margin: 0px;
  color: ${colours.darkgray};
  font-size: 10px;
  line-height: 22px;
  font-weight: 400;

`;

export const P = styled.p`
  font-family: ${fonts.default};
  text-align: justify;
  margin: 10px;
  color: ${colours.heading};
  font-size: 10px;
  line-height: 22px;
  font-weight: 300;


`;

export const Pcentered = styled.p`
  font-family: ${fonts.default};
  text-align: center;
  margin: 10px;
  color: ${colours.blue};
  font-size: 10px;
  line-height: 22px;
  font-weight: 300;

`;

// export const CenteredP = styled.p`
//   margin: auto;
//   padding-left: 100px;
//   padding-right: 100px;
//   padding-bottom: 20px;
//   padding-top: 10px;
//
//   @media (max-width: 800px) {
//     padding-left: 5px;
//     padding-right: 5px;
//   }
//
// `;

export const FooterText = styled.p`
  font-family: ${fonts.default};
  text-align: center;
  color: ${colours.blue};
  font-size: 12px;
  line-height: 22px;
  font-weight: 300;
  text-decoration: none;


`;

export const FooterLink = styled(Link)`
  font-family: ${fonts.default};
  color: ${colours.blue};
  font-size: 12px;
  line-height: 22px;
  font-weight: 400;
  border: none;
  text-decoration: none;

  &:hover {
    color: ${colours.offWhite};
  }


`;

export const Wrapper = styled.section`

`;

export const NavButton = styled.button`
  font-family: ${fonts.default};
  font-size: 12px;
  font-weight: ${fonts.thin};
  text-align: center;
  color: ${colours.blue};
  background: ${colours.verylightgray};
  border: none;
  text-decoration: none;
  padding: 14px 16px;
  button:focus {outline:0;};

`;


export const NavLabel = styled.label`

`;

export const HeaderbarWrapper = styled.section`

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  background: ${colours.offWhite};
  button:focus {outline:0;};

`;

export const NavbarWrapper = styled.section`

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background: ${colours.verylightgray};
  button:focus {outline:0;};


`;

export const FooterWrapper = styled.section`
  background: ${colours.lightgray};


  width: 100%;

`;

export const BurgerDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background: ${colours.verylightgray};
  height: 100%;

`;

export const BurgerStyles = {
  bmBurgerButton: {
    position: 'relative',
    width: '20px',
    height: '18px',
    marginLeft: '5px',
    marginRight: '5px'

  },
  bmBurgerBars: {
    background: colours.blue,
    height: '2px'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: colours.gray
  },
  bmMenu: {
    background: colours.verylightgray,
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: colours.purple
  },
  bmItemList: {
    color: colours.white,
    background: colours.verylightgray,
    padding: '0.8em'
  },
  bmOverlay: {
    background: colours.darkgray
  }
};

export const NavBarStyles = {
  // activeTabButton: { // do not use as will disable hover effects
  //   fontSize: 16,
  //   fontWeight: 'thin',
  //   textAlign: 'center',
  //   color: colours.blue,
  //   background: colours.offWhite
  // },
  // inactiveTabButton: {
  //   fontSize: 16,
  //   fontWeight: 'thin',
  //   textAlign: 'center',
  //   color: colours.gray,
  //   background: colours.verylightgray
  // },
  tabContainer: {
    color: colours.blue,
    background: colours.offWhite,
    flexDirection: 'row'

  }
};

// font-family: ${fonts.default},
// border: none,
// text-decoration: none,
// padding: 14px 16px,
// button:focus {outline:0;}
