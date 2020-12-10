// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// Questions to be asked for the Manager Employee Type
const mgrQuestions = [
    {
        type:'input',
        name: 'name',
        message: 'Hello, Team Manager! What is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type:'input',
        name: 'officeNumber',
        message: 'What is your office number?'
    },
    {
        type: 'list',
        name: 'addEmp',
        message: 'What type of Employee would you like to add to your team?',
        choices: ['Engineer', 'Intern']
    }
];

// Questions to be asked for the Engineer Employee Type
const engQuestions = [
    {
        type:'input',
        name: 'name',
        message: 'What is the engineer\'s name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the engineer\'s id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the engineer\'s email?'
    },
    {
        type:'input',
        name: 'github',
        message: 'What is the engineer\'s Github user name?'
    },
    {
        type: 'list',
        name: 'addEmp',
        message: 'Would you like to add another employee to your team?',
        choices: ['Engineer', 'Intern', 'Done']
    }
];

// Questions to be asked for the Intern Employee Type
const internQuestions = [
    {
        type:'input',
        name: 'name',
        message: 'What is the intern\'s name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the intern\'s id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the interns\'s email?'
    },
    {
        type:'input',
        name: 'school',
        message: 'What is your intern\'s school?'
    },
    {
        type: 'list',
        name: 'addEmp',
        message: 'Would you like to add another employee to your team?',
        choices: ['Engineer', 'Intern', 'Done']
    }
];

module.exports = Questions;