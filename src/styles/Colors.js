const commonColor = {
  primary: "#440083",
  secondary: "#00A84F",
  commonGreen: "#00E751",
  commonWhite: "#FFFFFF",
  commonBlack: "#000000",
  commonRed: "#F82C2C",
  black: "#000000",
  greyBackground: "#F0F0F0",
  secondaryText: "#4E445B",
  primaryBackground: "#F5ECFF",
  darkSecondary: "#ABABAB",
  darkPallette01: "#121212",
  darkPallette04: "#202020",
  darkPallette05: "#252525",
  darkPallette09: "#383838",
  borderColor:"#E5DFEB"
};

const light = {
  primary: "#440083",
  themeColor: "#FFFFFF",
  white: "#121212",
  sky: "#DE5E69",
  gray: "gray",
  activeColor: "#FFFFFF",
  inactiveColor: "#440083",
  activeBgColor: commonColor.primary,
  inactiveBgColor: commonColor.commonWhite,
  firstPersonChatBg: commonColor.greyBackground,
  secondPersonChatBg: commonColor.primaryBackground,
  iconActiveColor: "#00A84F",
  iconInactiveColor: "#4E445B",
  whiteText: "#000000",
  whiteTextSecondary: "#4E445B",
};

const dark = {
  primary: "#202020",
  themeColor: "#000000",
  white: "#FFFFFF",
  sky: "#831a23",
  gray: "white",
  activeColor: "#FFFFFF",
  inactiveColor: "#ABABAB",
  activeBgColor: commonColor.darkPallette04,
  inactiveBgColor: commonColor.black,
  firstPersonChatBg: commonColor.darkPallette05,
  secondPersonChatBg: commonColor.darkPallette09,
  iconActiveColor: "#16E477",
  iconInactiveColor: "#ABABAB",
  whiteText: "#FFFFFF",
  whiteTextSecondary: "#ABABAB",
};

export default { light, dark, commonColor };
