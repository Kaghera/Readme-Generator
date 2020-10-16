// function to generate markdown for README
function generateMarkdown(data) {
  return `
## Title
${data.Title}

## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Test](#Test)
* [Questions](#Questions)

## Description
${data.Description}

## Installation
${data.Installation}

## Usage
${data.Usage}

## License
${data.License}

## Contributing
${data.Contributing}

## Test
${data.Test}

## Questions
Contact me:

Github: [https://github.com/${data.Github}]

Email:[${data.email}]

${data.Badge}
`;
}

module.exports = generateMarkdown;
