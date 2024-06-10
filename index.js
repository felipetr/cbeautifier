const colors = require('colors');

const formatText = (text, color, backgroundColor, bold = false) => {
  let formattedText = text;

  if (color && colors[color]) {
    formattedText = colors[color](formattedText);
  }

  if (backgroundColor) {
    const bgColorFunction = `bg${backgroundColor.charAt(0).toUpperCase() + backgroundColor.slice(1)}`;
    if (colors[bgColorFunction]) {
      formattedText = colors[bgColorFunction](formattedText);
    }
  }

  if (bold) {
    formattedText = colors.bold(formattedText);
  }

  return formattedText;
};

const createBeautifyFunction = (color) => {
  return (text, backgroundColor = null, bold = false) => console.log(formatText(text, color, backgroundColor, bold));
};

const colorsList = [
  'red', 'green', 'blue', 'yellow', 'magenta',
  'cyan', 'white', 'black', 'gray'
];

const beautify = {};

colorsList.forEach(color => {
  beautify[color] = createBeautifyFunction(color);
});

module.exports = beautify;