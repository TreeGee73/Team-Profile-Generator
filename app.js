// Node Packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Outside File Variables
const Manager = require("./lib/Manager");
const mgrQuestions = require("./lib/MgrQuestions");

const Engineer = require("./lib/Engineer");
const engQuestions = require("./lib/EngQuestions");

const Intern = require("./lib/Intern");
const internQuestions = require("./lib/InternQuestions");

const render = require("./lib/htmlRenderer");

// Path Variables
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

// Employee & Team variables
let empType;
const teamData = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

inquirer
    // Starts by asking questions about the manager
    .prompt(mgrQuestions)
    // Construct Manager object from user input and push it into the teamData array
    .then(input => {teamData.push(new Manager(input.name, input.id, input.email, input.officeNumber));
        // Moves on to collect additional employee data or render collected data depending on user selection
        empType = input.addEmp;
            // If the user selection is to add an Engineer, will execute the getEngineer function
            if(empType === 'Engineer') {
                getEngineer();
            }
            // If the user selection is to add an Intern, will execute the getIntern function
            else if(empType === 'Intern') {
                getIntern();
            }
            // If the user selection is done, will render the teamData array into HTML and execute the writeHTMLFile function to place the new HTML code in team.html for display on a browser
            else {
                const html = render(teamData);
                writeHTMLFile(html);
            }
        })
    // If promise should fail returns an error in the console log and ends/exits the program
    .catch(error => {
        console.log(error);
        // To exit with a 'failure' code, the shell that executed Node.js should see the exit code as 1. Calling process.exit() will force the process to exit as quickly as possible even if there are still asynchronous operations pending that have not yet completed fully, including I/O operations to process.stdout and process.stderr. 
        process.exit(1);
    })

// If user indicates the addition of an engineer this function is executed.
function getEngineer() {
    inquirer
        // Starts by asking questions about the engineer
        .prompt(engQuestions)
        // Construct Engineer object from user answers
        .then(answer => {teamData.push(new Engineer(answer.name, answer.id, answer.email, answer.github));
            // Moves on to collect additional employee data or render collected data depending on user selection
            empType = answer.addEmp;
            // If the user selection is to add an Engineer, will execute the getEngineer function
            if(empType === 'Engineer') {
            getEngineer();
            }
            // If the user selection is to add an Intern, will execute the getIntern function
            else if(empType === 'Intern') {
                getIntern();
            }
            // If the user selection is done, will render the teamData array into HTML and execute the writeHTMLFile function to place the new HTML code in team.html for display on a browser
            else {
                const html = render(teamData);
                writeHTMLFile(html);
            }
        })
}

// If user indicates the addition of an intern this function is executed.
function getIntern() {
    inquirer
        // Starts by asking questions about the intern
        .prompt(internQuestions)
        // Construct Intern object from user answers
        .then(answer => {teamData.push(new Intern(answer.name, answer.id, answer.email, answer.school));
            // Moves on to collect additional employee data or render collected data depending on user selection
            empType = answer.addEmp;
            // If the user selection is to add an Engineer, will execute the getEngineer function
            if(empType === 'Engineer') {
                getEngineer();
            }
            // If the user selection is to add an Intern, will execute the getIntern function
            else if(empType === 'Intern') {
                getIntern();
            }
            // If the user selection is done, will render the teamData array into HTML and execute the writeHTMLFile function to place the new HTML code in team.html for display on a browser
            else {
                const html = render(teamData);
                writeHTMLFile(html);
            }
        })
}

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
function writeHTMLFile(html){
    fs.writeFile(outputPath, html, error => {
        if(error){ return console.log(error); }
        console.log("successfully created team.html...");
    })
}
