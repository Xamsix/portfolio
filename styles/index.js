export const Color = {
  white: "#fff",
  black: "#1d001b",
  blue: "#D3DDFC",
  grey: "#908690",
  lightGrey: "#E8E5E8",
  pink: "#ff0393",
};

export const Mobile = {
  medium: "@media only screen and (max-width: 1023px)",
  small: "@media only screen and (max-width: 767px)",
};

export const ClampValues = (value) => {
  const vwValue = (value / 1440) * 100;
  const vhValue = (value / 800) * 100;

  return `clamp(1px, ${vwValue}vw, ${vhValue}vh)`;
};

export const ClampValuesRound = (value) => {
  const vwValue = (value / 1440) * 100;
  const vhValue = (value / 800) * 100;

  return `clamp(1px, ${Math.round(vwValue)}vw, ${Math.round(vhValue)}vh)`;
};

export const MobileWidth = (value) => {
  const vwValue = (value / 375) * 100;

  return `${vwValue}vw`;
};
