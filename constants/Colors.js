export const withAlpha = (color, alpha) => {
  const [rgb, values] = color.split(/\(|\)/);
  return [rgb, 'a(', values, `, ${alpha})`].join('');
};

const white = 'rgb(255,255,255)';
const primary = 'rgb(58,72,86)';
const primaryDark = 'rgb(37,46,55)';

const colors = {
  white,
  primary,
  primaryDark,
  tabIconDefault: withAlpha(white, 0.75),
  tabIconSelected: white,
  tabBar: 'rgb(254,254,254)'
};

export default colors;
