const { ansi256Colors, ansi256BgColors } = require('../colors');
const beautify = require('../index');

const reset = '\x1b[0m';
const bold = '\x1b[1m';

describe('Testing beautify functions with extended colors', () => {
  const text = 'Test Text';
  
  const colorsList = [
    'black', 'red', 'green', 'yellow', 'blue', 'magenta',
    'cyan', 'white', 'gray', 'brightRed', 'brightGreen',
    'brightYellow', 'brightBlue', 'brightMagenta', 'brightCyan', 'brightWhite',
    'darkRed', 'darkGreen', 'darkYellow', 'darkBlue', 'darkMagenta', 'darkCyan',
    'lightGray', 'darkGray'
  ];
  
  colorsList.forEach(color => {
    it(`should print ${color} text`, () => {
      const formattedText = beautify[color](text);
      expect(formattedText).toContain(`\x1b[38;5;${ansi256Colors[color]}m`);
      expect(formattedText).toContain(text);
      expect(formattedText).toContain(reset);
    });

    it(`should print bold ${color} text`, () => {
      const formattedText = beautify[color](text, true);
      expect(formattedText).toContain(bold);
      expect(formattedText).toContain(`\x1b[38;5;${ansi256Colors[color]}m`);
      expect(formattedText).toContain(text);
      expect(formattedText).toContain(reset);
    });

    colorsList.forEach(bgColor => {
      it(`should print ${color} text with ${bgColor} background`, () => {
        const formattedText = beautify[color](text, false, bgColor);
        expect(formattedText).toContain(`\x1b[38;5;${ansi256Colors[color]}m`);
        expect(formattedText).toContain(`\x1b[48;5;${ansi256BgColors[bgColor]}m`);
        expect(formattedText).toContain(text);
        expect(formattedText).toContain(reset);
      });

      it(`should print bold ${color} text with ${bgColor} background`, () => {
        const formattedText = beautify[color](text, true, bgColor);
        expect(formattedText).toContain(bold);
        expect(formattedText).toContain(`\x1b[38;5;${ansi256Colors[color]}m`);
        expect(formattedText).toContain(`\x1b[48;5;${ansi256BgColors[bgColor]}m`);
        expect(formattedText).toContain(text);
        expect(formattedText).toContain(reset);
      });
    });
  });
});
