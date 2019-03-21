import styled from 'styled-components';
import colours from './colours';

const { width } = window.screen.width;

// Fonts

const fonts = {
  default: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
  default2: 'Arial, Helvetica, sans-serif',
  thin: 500
};


// Main Layout


// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
// const guidelineBaseHeight = 680;

const scale = size => Number((width / guidelineBaseWidth) * size);
// const horizontalScale2 = (size, factor = 0.7) => Number(((width / guidelineBaseWidth) * size) * factor);
// const verticalScale = size => Number((height / guidelineBaseHeight) * size);
// const verticalScale2 = (size, factor = 0.8) => Number(((height / guidelineBaseHeight) * size) * factor);
const moderateScale = (size, factor = 0.3) => Number(size + ((scale(size) - size) * factor));

export const ms10 = moderateScale(10);
export const ms12 = moderateScale(12);
export const ms14 = moderateScale(14);
export const ms16 = moderateScale(16);
export const ms18 = moderateScale(18);


// TabBar
export const TabBarText = styled.p.attrs(props => ({
  color: props.color || colours.gray
}))`
  font-size: ${moderateScale(12)};
  color: ${props => props.color};
  textAlign: center;

`;

// Feed

export const TimeText = styled.p.attrs(props => ({
  opacity: props.opacity || 1
}))`
  color: ${colours.gray};
  fontWeight: 500;
  font-size: ${ms12};
  opacity: ${props => props.opacity};

`;

export const SubjectNameText = styled.p.attrs(props => ({
  opacity: props.opacity || 1
}))`
  color: ${colours.black};
  fontWeight: 600;
  font-size: ${ms14};
  opacity: ${props => props.opacity};

`;

export const SubjectActionText = styled.p.attrs(props => ({
  opacity: props.opacity || 1
}))`
  color: ${colours.gray};
  fontWeight: 500;
  font-size: ${ms12};
  opacity: ${props => props.opacity};

`;

export const EventNameText = styled.p.attrs(props => ({
  opacity: props.opacity || 1
}))`
  color: ${colours.main};
  fontWeight: 600;
  font-size: ${ms14};
  opacity: ${props => props.opacity};

`;

export const FeedItemWhenText = styled.p.attrs(props => ({
  opacity: props.opacity || 1,
  unConfirmedItem: props.unConfirmedItem ? ms14 : ms16,
  viewed: props.viewed ? colours.darkgray : colours.darkgray,
  color: props.unConfirmedItem ? colours.darkgray : colours.darkgray
}))`
  color: ${props => props.color};
  fontWeight: 500;
  font-size: ${props => props.unConfirmedItem};
  opacity: ${props => props.opacity};
  marginLeft: 4;
  marginRight: 4;

`;

export const FeedItemWhereText = styled.p.attrs(props => ({
  opacity: props.opacity || 1,
  unConfirmedItem: props.unConfirmedItem ? ms14 : ms12,
  viewed: props.viewed ? colours.darkgray : colours.darkgray,
  color: props.unConfirmedItem ? colours.darkgray : colours.darkgray
}))`
  color: ${props => props.color};
  fontWeight: 500;
  font-size: ${props => props.unConfirmedItem};
  opacity: ${props => props.opacity};
  textAlign: center;
  marginLeft: 4;
  marginRight: 4;

`;

export const StatusFlagText = styled.p.attrs(props => ({
  opacity: props.opacity || 1,
  color: props.color || colours.gray
}))`
  color: ${props => props.color};
  fontWeight: 500;
  font-size: ${ms12};
  opacity: ${props => props.opacity};
  textAlign: center;
  marginLeft: 4;
  marginRight: 4;
`;


// Calendar

export const CalendarFromText = styled.p.attrs(props => ({
  color: props.color || colours.darkgray
}))`
  font-size: ${moderateScale(10)};
  color: ${props => props.color};
  textAlign: center;
  fontWeight: 500;

`;

export const CalendarDateText = styled.p.attrs(props => ({
  color: props.color || colours.darkgray
}))`
  font-size: ${moderateScale(14)};
  color: ${props => props.color};
  textAlign: center;
  fontWeight: 500;

`;

export const HostNameText = styled.p.attrs(props => ({
  opacity: props.opacity || 1
}))`
  color: ${colours.main};
  fontWeight: 600;
  font-size: ${ms12};
  opacity: ${props => props.opacity};

`;

export const MonthText = styled.p.attrs(props => ({
  opacity: props.opacity || 1
}))`
  color: ${colours.white};
  textAlign: left;
  fontWeight: 600;
  font-size: ${ms14};
  opacity: ${props => props.opacity};

`;

export const GeneralText = styled.p.attrs(props => ({
  opacity: props.opacity || 1
}))`
  color: ${colours.main};
  fontWeight: 600;
  font-size: ${ms16};
  opacity: ${props => props.opacity};

`;

export const FormLabelText = styled.p.attrs(props => ({
  opacity: props.opacity || 1
}))`
  color: ${colours.main};
  fontWeight: 600;
  font-size: ${ms14};
  opacity: ${props => props.opacity};

`;

export const MessageText = styled.p.attrs(props => ({
  opacity: props.opacity || 1
}))`
  color: ${colours.gray};
  fontWeight: 600;
  font-size: ${ms14};
  opacity: ${props => props.opacity};

`;

export const InputText = styled.p.attrs(props => ({
  opacity: props.opacity || 1
}))`
  font-family: ${fonts.default};
  color: ${colours.gray};
  font-weight: 600;
  font-size: 12px;
  opacity: ${props => props.opacity};

`;

export const ConfirmButtonText = styled.p.attrs(props => ({
  opacity: props.opacity || 1
}))`
  color: ${colours.offWhite};
  font-weight: 600;
  font-size: 12px;
  textAlign: center;
  opacity: ${props => props.opacity};

`;

// Event poll

export const VoteText = styled.p.attrs(props => ({
  opacity: props.opacity || 1
}))`
  color: ${colours.gray};
  fontWeight: 500;
  font-size: ${ms12};
  opacity: ${props => props.opacity};

`;

export const CategoryTitleText = styled.p.attrs(props => ({
  opacity: props.opacity || 1
}))`
  color: ${colours.main};
  fontWeight: 600;
  font-size: ${ms14};
  opacity: ${props => props.opacity};

`;

export const OptionText = styled.p.attrs(props => ({
  opacity: props.opacity || 1,
  viewed: props.viewed ? colours.darkgray : colours.darkgray,
  color: props.unConfirmedItem ? colours.darkgray : colours.darkgray
}))`
  color: ${props => props.color};
  fontWeight: 500;
  font-size: ${ms14};
  opacity: ${props => props.opacity};
  marginLeft: 4;
  marginRight: 4;

`;

export const ForgotPasswordText = styled.p.attrs(props => ({
  opacity: props.opacity || 1
}))`
  color: ${colours.main};
  fontWeight: 500;
  font-size: ${ms14};
  textAlign: center;
  opacity: ${props => props.opacity};
`;

// Modals
export const ModalGeneralText = styled.p.attrs(props => ({
  opacity: props.opacity || 1
}))`
  color: ${colours.white};
  fontWeight: 600;
  font-size: ${ms16};
  opacity: ${props => props.opacity};

`;

export const ModalMessageText = styled.p.attrs(props => ({
  opacity: props.opacity || 1
}))`
  color: ${colours.gray};
  fontWeight: 600;
  font-size: ${ms14};
  opacity: ${props => props.opacity};

`;


// Drawer Menu

export const DrawerItemText = styled.p.attrs(props => ({
  opacity: props.opacity || 1
}))`
  color: ${colours.main};
  fontWeight: 600;
  font-size: ${ms14};
  paddingHorizontal: 4;
  opacity: ${props => props.opacity};

`;


export const DrawerMessageText = styled.p.attrs(props => ({
  opacity: props.opacity || 1
}))`
  color: ${colours.gray};
  fontWeight: 600;
  font-size: ${ms14};
  opacity: ${props => props.opacity};

`;

export const DrawerLinkText = styled.p.attrs(props => ({
  opacity: props.opacity || 1
}))`
  color: ${colours.gray};
  fontWeight: 600;
  font-size: ${ms12};
  opacity: ${props => props.opacity};

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
  color: ${colours.black};
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;


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
  color: ${colours.verydarkgray};
  font-size: 10px;
  line-height: 22px;
  font-weight: 500;

`;

export const D4 = styled.p`
  font-family: ${fonts.default};
  text-align: center;
  margin: 0px;
  color: ${colours.gray};
  font-size: 10px;
  line-height: 22px;
  font-weight: 500;

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
