const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const api = require("./utils/api");

const questions = [
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "github",
        default: "username"
    },
    {
        type: "input",
        message: "Enter the name of the project:",
        name: "title",
        default: "Title"
    },
    // {
    //     type: "input",
    //     message: "Enter your email:",
    //     name: "email",
    //     default: "andytaylot575@gmail.com"
    // },
    {
        type: "input",
        message: "Enter a description of your project:",
        name: "description",
        default: "Description"
    },
    {
        type: "input",
        message: "Enter the command to install any file dependencies:",
        name: "installation",
        default: "Installation"
    },
    {
        type: "input",
        message: "Enter the necessary command to run for testing:",
        name: "tests",
    },
    {
        type: "input",
        message: "Enter any info that a user will need to use your repo:",
        name: "usage",
        default: "Usage"
    },
    {
        type: "input",
        message: "Enter any contributors to your project:",
        name: "contributing",
    },
    {
        type: "input",
        message: "License here",
        name: "license",
        default: "MIT"
    },
    

];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
        
};

function init() {
    inquirer.prompt(questions)
        .then(response => {
            api.getUser(response.github)
            .then(({data}) => {
                writeToFile("README.MD", generateMarkdown({...response,...data}))
            })
        })
            

}

init();
