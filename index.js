// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Project Title:'
    }, 
    {
        type: 'input',
        name: 'desc',
        message: 'Project description:',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution Guidlines:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test instructions:',
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();
