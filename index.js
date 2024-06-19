const { ansi256Colors, ansi256BgColors } = require('./colors');

const reset = '\x1b[0m';
const bold = '\x1b[1m';

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
  return (text, bold = false, backgroundColor = null) => formatText(text, color, backgroundColor, bold);
};

const colorsList = [
  'black', 'red', 'green', 'yellow', 'blue', 'magenta',
  'cyan', 'white', 'gray', 'brightRed', 'brightGreen',
  'brightYellow', 'brightBlue', 'brightMagenta', 'brightCyan', 'brightWhite',
  'darkRed', 'darkGreen', 'darkYellow', 'darkBlue', 'darkMagenta', 'darkCyan',
  'lightGray', 'darkGray'
];

const beautify = {};

colorsList.forEach(color => {
  beautify[color] = createBeautifyFunction(color);
});

module.exports = beautify;
