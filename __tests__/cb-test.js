const beautify = require('../index');

// Mock console.log
console.log = jest.fn();

describe('Beautify Module', () => {
  afterEach(() => {
    // Limpa todos os mocks após cada teste
    jest.clearAllMocks();
  });
  test('should print bold black text with green background', () => {
    beautify.black('Bold black on green', 'green', true);
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Bold black on green'));
  });
  test('should print red text without background and bold', () => {
    beautify.red('Red Text');
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Red Text'));
  });

  test('should print bold white text without background', () => {
    beautify.white("Bold Text", null, true);
    expect(console.log).toHaveBeenCalledWith(expect.stringContaining('Bold Text'));
  });
});
