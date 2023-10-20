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
        message: 'Installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage Information:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Contribution Guidlines:',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Test instructions:',
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
