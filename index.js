const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is your README title?",
  },
  {
    type: "checkbox",
    name: "Table of Contents",
    message: "Enter your table of contents.",
    choices: [
      "[Description](#Description)",
      "[Installation](#Installation)",
      "[Usage](#Usage)",
      "[License](#License)",
      "[Contributing](#Contributing)",
      "[Test](#Test)",
      "[Questions](#Questions)",
    ],
  },
  {
    type: "input",
    name: "Description",
    message: "Describe your project.",
  },

  {
    type: "input",
    name: "Installation",
    message: "Enter installation instruction of your project.",
  },
  {
    type: "input",
    name: "Usage",
    message: "Enter Usage Information",
  },
  {
    type: "checkbox",
    name: "License",
    message: "Select license.",
    choices: [
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
      "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
      "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
      "No License",
    ],
  },
  {
    type: "input",
    name: "Contributing",
    message: "Enter Contributing Information",
  },
  {
    type: "input",
    name: "Test",
    message: "Enter Tests Information",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "Github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "Badge",
    message: "Enter Badges",
  }
];

async function main() {
  const userInput = await inquirer.prompt(questions);

  const markDownText = generateMarkdown(userInput);
  fs.writeFile("Readme.md", markDownText, function (err) {
    if (err) {
      console.log(err);
    }
    console.log("Success! A ReadMe has been generated!");
  });
};

main();

