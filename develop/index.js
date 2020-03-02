const inquirer = require("inquirer");
const util = require("util");
const fs = require("fs");
const axios = require("axios");
const genMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);


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
        message: "Enter any info that a user will need to usew your repo:",
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
    writeFileAsync(fileName, data).then(function (){
        console.log("RADME file successfully created!");

    })
        .catch(err => {
            console.log(err);
        })
};

function init() {
    inquirer.prompt(questions)
        .then(response => {

            const queryURL = "https://api.github.com/users/${response.github}";
            axios.get(queryURL)
                .then(res => {
                    const data = {
                    username: response.username,
                    title: response.title,
                    description: response.description,
                    tableOfContents: response.tableOfContents,
                    installation: response.installation,
                    usage: response.usage,
                    tests: response.tests,
                    license: response.license,
                    contributing: response.contributing,
                }
                const readmeContent = generateMarkdown(data);
                writeToFile("README-test.md", readmeContent);
            })
            .catch(err => {
                if (err) throw Error;
            })
            .catch(err => {
                console.log(err);
            })
            

        })

}

init();
