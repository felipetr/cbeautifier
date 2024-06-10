# Console Beautifier

**A JavaScript module for adding colors and bold formatting to console output.**

**Enhance the readability and visual appeal of your console logs.**

### Features

*   Simple and intuitive API
*   Wide range of colors
*   Bold formatting
*   Compatible with major Node.js environments

### Benefits

*   Improved readability
*   Better debugging experience
*   More visually appealing output

### Installation

Install the `cbeautifier` module using npm:

Bash

    npm install cbeautifier
    

content\_copy

### Usage

Import the module in your JavaScript code:

JavaScript

    const beautify = require('cbeautifier');
    
content\_copy

Use the `beautify` object to add colors and bold formatting to your console messages:

JavaScript

    console.log(beautify.red('Error: An unexpected error occurred.'));
    console.log(beautify.green('Success: Operation completed successfully.'));
    console.log(beautify.bold('Important message: Please pay attention to this.'));


content\_copy

**Bold Formatting:**

To make text bold, pass the `true` flag as the second argument to the formatting function:

JavaScript

    console.log(beautify.red('Error: An unexpected error occurred.', true));
    

content\_copy

### Additional Options

The `cbeautifier` module offers a wide range of formatting options, including:

*   Colors: `red`, `green`, `blue`, `yellow`, `magenta`, `cyan`, `white`, `black`, `gray`
*   Background colors: `redBg`, `greenBg`, `blueBg`, `yellowBg`, `magentaBg`, `cyanBg`, `whiteBg`, `blackBg`, `grayBg`
*   Combined colors: `redBright`, `greenBright`, `blueBright`, `yellowBright`, `magentaBright`, `cyanBright`, `whiteBright`

Refer to the module's documentation for a complete list of options and usage examples.

### Contributing

We welcome contributions to the `cbeautifier` module. Please feel free to report issues, suggest improvements, or create pull requests.

### License

The `cbeautifier` module is licensed under the MIT License.
