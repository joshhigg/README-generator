// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: 'Input Installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Input Usage Information:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Input Contribution Guidelines:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Input Test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license:',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile(fileName, data, (err) => err && console.error(err));
    
}



// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const markdownContent = generateMarkdown(data);
        writeToFile(`${data.title}.md`, markdownContent);
    });
}

// Function call to initialize app
init();
