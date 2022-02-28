// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generatepage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['What is the name of your project?', 'Why did you build this project?', 'What did you learn during this project?', 'What features would you like to implement in the future?', 'What is the link to the deployed site?'];

// create function to prompt user for info for README
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'motivation',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'learn',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'futureFeatures',
            message: questions[3]
        },
        {
            type: 'input',
            name: 'link',
            message: questions[4]
        }
    ])
};
promptUser().then(portfolioData => {
    console.log(portfolioData)
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
