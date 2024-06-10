const reset = '\x1b[0m';
const bold = '\x1b[1m';

const ansi256Colors = {
  black: 0,
  red: 1,
  green: 2,
  yellow: 3,
  blue: 4,
  magenta: 5,
  cyan: 6,
  white: 7,
  gray: 8,
  // Extended colors
  brightRed: 9,
  brightGreen: 10,
  brightYellow: 11,
  brightBlue: 12,
  brightMagenta: 13,
  brightCyan: 14,
  brightWhite: 15,
  // Cubes and grayscale colors can be added similarly
};

const ansi256BgColors = {
  black: 0,
  red: 1,
  green: 2,
  yellow: 3,
  blue: 4,
  magenta: 5,
  cyan: 6,
  white: 7,
  gray: 8,
  // Extended colors
  brightRed: 9,
  brightGreen: 10,
  brightYellow: 11,
  brightBlue: 12,
  brightMagenta: 13,
  brightCyan: 14,
  brightWhite: 15,
  // Cubes and grayscale colors can be added similarly
};

const formatText = (text, color, backgroundColor, isBold) => {
  let formattedText = text;

  if (color && ansi256Colors[color] !== undefined) {
    formattedText = `\x1b[38;5;${ansi256Colors[color]}m` + formattedText;
  }
  if (backgroundColor && ansi256BgColors[backgroundColor] !== undefined) {
    formattedText = `\x1b[48;5;${ansi256BgColors[backgroundColor]}m` + formattedText;
  }
  if (isBold) {
    formattedText = bold + formattedText;
  }

  return formattedText + reset;
};

const createBeautifyFunction = (color) => {
  return (text, backgroundColor = null, bold = false) => console.log(formatText(text, color, backgroundColor, bold));
};

const colorsList = [
  'black', 'red', 'green', 'yellow', 'blue', 'magenta',
  'cyan', 'white', 'gray', 'brightRed', 'brightGreen',
  'brightYellow', 'brightBlue', 'brightMagenta', 'brightCyan', 'brightWhite'
];

const beautify = {};

colorsList.forEach(color => {
  beautify[color] = createBeautifyFunction(color);
});

module.exports = beautify;
