// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        input: 'input',
        name: 'github',
        message: 'Enter ypur GitHub Username',
        validate: gitHubUsername => {
            if (!gitHubUsername) {
                console.log('Please enter your GitHub Username')
                return false;
            } else {
                return true;
            }
        }
    },
    {
        input: 'input',
        name: 'email',
        message: 'Enter your Email Address',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select your license',
        choices: ['MIT', 'Other', 'None'],
    },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>
        err ? console.log(err) : console.log('Successfully created README.md. See it in the utils folder!')
    )
}


// TODO: Create a function to initialize app
function init() {
    console.log(
        `
        Welcome to README Generator!
        Please answer all of the following questions!
        --------------------------------------------
        `
    );
    inquirer
        .prompt(questions)
        .then((answers) => writeToFile("./utils/readme.md", generateMarkdown(answers)))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
