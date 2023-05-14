// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const utils = requier('utils')
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Why did you create this project? Give a detailed description.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to install your application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is the application used?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who contributed to your application?'
    },
    {
        type: 'list',
        name: 'liscense',
        message: 'What liscense did you use?',


        choices:
        ['MIT', 'GPU', 'ISC', 'Apache']
    },
    {
        type: 'input',
        name: 'test',
        message: 'How did you test your application?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is your GitHub repository name?'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Contact information for inquiries'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // TODO add fs code here to save file
    fs.writeFile(fileName, data, (error) => {
        error ? console.log(error) : console.log('Success! READ.me File Created!')
    }) 
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        const generated = generateMarkdown(data)
        writeToFile('./destination/README.md', generated)
    })
}

// Function call to initialize app
init();
