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
        validate: email => {
            if (!email) {
                console.log('Please enter your email address')
                return false;
            } else {
                return true;
            }
        }
    }, 
    {
        input: 'input',
        name: 'title',
        message: 'Enter your Project Title',
    },
    {
        input: 'input',
        name: 'description',
        message: 'Enter your project description',
    },
    {
        input: 'input',
        name: 'install',
        message: 'Enter installation instructions, or type N/A if there are none',
        validate: installInstructions => {
            if (!installInstructions) {
                console.log("Please enter installation instructions, or enter N/A")
                return false;
            } else {
                return true;
            }
        }
    },
    {
        input: 'input',
        name: 'usage',
        message: 'Enter usage instructions, or type N/A if there are none',
        validate: usageInstructions => {
            if (!usageInstructions) {
                console.log("Please enter usage instructions, or enter N/A")
                return false;
            } else {
                return true;
            }
        }
    },
    {
        input: 'input',
        name: 'contributions',
        message: 'Enter any contributions, or type N/A if there are none',
        validate: credits => {
            if (!credits) {
                console.log("Please enter any contribuion credits, or enter N/A")
                return false;
            } else {
                return true;
            }
        }
    },
    {
        input: 'input',
        name: 'testing',
        message: 'Enter testing instructions, or type N/A if there are none',
        validate: testingInstructions => {
            if (!testingInstructions) {
                console.log("Please enter testing instructions, or enter N/A")
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select your license',
        choices: ['agpl 3.0', 'gpl 3.0', 'lgpl 3.0', 'mpl 2.0', 'apache 2.0', 'mit', 'bsl 1.0', 'unlicense','None'],
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
        .then((answers) => writeToFile("./utils/README.md", generateMarkdown(answers)))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
