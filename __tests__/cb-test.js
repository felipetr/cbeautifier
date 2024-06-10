const beautify = require('../index');

console.log = jest.fn();

describe('Beautify Module', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should print red text', () => {
    beautify.red('This is a red text');
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('\x1b[38;5;1mThis is a red text\x1b[0m'));
  });

  test('should print bold green text with black background', () => {
    beautify.green('Bold green on black', 'black', true);
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('\x1b[1m\x1b[48;5;0m\x1b[38;5;2mBold green on black\x1b[0m'));
  });

  test('should print bold black text with green background', () => {
    beautify.black('Bold black on green', 'green', true);
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('\x1b[1m\x1b[48;5;2m\x1b[38;5;0mBold black on green\x1b[0m'));
  });

  test('should print red text without background and bold', () => {
    beautify.red('Red');
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('\x1b[38;5;1mRed\x1b[0m'));
  });

  test('should print bold white text without background', () => {
    beautify.white('Bold Text', null, true);
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('\x1b[1m\x1b[38;5;7mBold Text\x1b[0m'));
  });

  test('should print bright red text', () => {
    beautify.brightRed('Bright red text');
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('\x1b[38;5;9mBright red text\x1b[0m'));
  });

  test('should print bold bright green text with bright blue background', () => {
    beautify.brightGreen('Bright green on bright blue', 'brightBlue', true);
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('\x1b[1m\x1b[48;5;12m\x1b[38;5;10mBright green on bright blue\x1b[0m'));
  });

});
