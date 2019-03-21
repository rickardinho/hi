// const { width, height } = screen;
// console.log('width: ', width);
// console.log('height: ', height);
// Guideline sizes are based on standard ~5" screen mobile device
// const guidelineBaseWidth = 350;
// const guidelineBaseHeight = 620;

// const tabletWidth = 600;
// const tabletHeight = 800;
// const isTablet = width > tabletWidth;

const scale = size => Number((1 * size));
const horizontalScale2 = size => Number((1 * size));
const verticalScale = size => Number((1 * size));
const verticalScale2 = size => Number((1 * size));
const moderateScale = size => Number((1 * size));
const buttonScale = size => Number((1 * size));
const feedHorizPaddingScale = size => Number((1 * size));
const feedVertPaddingScale = size => Number((1 * size));
const barScale = size => Number((1 * size));
const iconScale = size => Number((1 * size));


export {
  scale,
  verticalScale,
  moderateScale,
  verticalScale2,
  horizontalScale2,
  buttonScale,
  feedHorizPaddingScale,
  feedVertPaddingScale,
  barScale,
  iconScale };
