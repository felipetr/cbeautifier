
const beautify = require('../index');

console.log('Formatted red text:', beautify.red('This is a red text'));
console.log('Formatted bold green text with black background:', beautify.green('This is bold green text with black background', true, 'black'));
console.log('Formatted bold black text with green background:', beautify.black('This is bold black text with green background', true, 'green'));
console.log('Formatted red text without background and bold:', beautify.red('This is red text without background and bold', true, null));
console.log('Formatted bold white text without background:', beautify.white('This is bold white text without background', true));
console.log('Formatted bright red text:', beautify.brightRed('This is bright red text'));
console.log('Formatted bold bright green text with bright blue background:', beautify.brightGreen('This is bold bright green text with bright blue background', true, 'brightBlue'));

describe('Testing beautify functions', () => {
  it('should print red text', () => {
    const formattedText = beautify.red('This is a red text');
    expect(formattedText).toBe('\x1b[38;5;1mThis is a red text\x1b[0m');
  });

  it('should print bold green text with black background', () => {
    const formattedText = beautify.green('This is bold green text with black background', true, 'black');
    expect(formattedText).toBe('\x1b[1m\x1b[48;5;0m\x1b[38;5;2mThis is bold green text with black background\x1b[0m');
  });

  it('should print bold black text with green background', () => {
    const formattedText = beautify.black('This is bold black text with green background', true, 'green');
    expect(formattedText).toBe('\x1b[1m\x1b[48;5;2m\x1b[38;5;0mThis is bold black text with green background\x1b[0m');
  });

  it('should print red text without background and bold', () => {
    const formattedText = beautify.red('This is red text without background and bold', true, null);
    expect(formattedText).toBe('\x1b[1m\x1b[38;5;1mThis is red text without background and bold\x1b[0m');
  });

  it('should print bold white text without background', () => {
    const formattedText = beautify.white('This is bold white text without background', true);
    expect(formattedText).toBe('\x1b[1m\x1b[38;5;7mThis is bold white text without background\x1b[0m');
  });

  it('should print bright red text', () => {
    const formattedText = beautify.brightRed('This is bright red text');
    expect(formattedText).toBe('\x1b[38;5;9mThis is bright red text\x1b[0m');
  });

  it('should print bold bright green text with bright blue background', () => {
    const formattedText = beautify.brightGreen('This is bold bright green text with bright blue background', true, 'brightBlue');
    expect(formattedText).toBe('\x1b[1m\x1b[48;5;12m\x1b[38;5;10mThis is bold bright green text with bright blue background\x1b[0m');
  });
});
