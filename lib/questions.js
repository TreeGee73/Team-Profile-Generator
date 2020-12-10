// Questions to be asked for the Manager Employee Type
const mgrQuestions = [
    {
        type:'input',
        name: 'name',
        message: 'What is the managers name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the manager\'s id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the manager\'s email?'
    },
    {
        type:'input',
        name: 'office',
        message: 'What is the manager\'s office number?'
    },
    {
        type: 'list',
        name: 'addEmp',
        message: 'What type of Employee would you like to add?',
        choices: ['Engineer', 'Intern', 'Done']
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
        name: 'user',
        message: 'What is the engineer\'s Github user name?'
    },
    {
        type: 'list',
        name: 'addEmp',
        message: 'What type of Employee would you like to add?',
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
        message: 'What type of Employee would you like to add?',
        choices: ['Engineer', 'Intern', 'Done']
    }
];

module.exports = Questions;