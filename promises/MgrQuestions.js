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
        message: 'Hello, Team Manager! What is your name?',
        // This checks to see if the has been entered. If the entry is not a string, will console log an error and prompt for the user to enter a name.
        validate: answer => {if (answer === '') {
            return 'Cannot be blank, please enter a valid name.';
            } else {return true}
        },
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

module.exports = mgrQuestions;