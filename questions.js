// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

module.exports = [
    {
        type: 'list',
        name: 'role',
        message:'What is the employee\'s role?',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type:'text',
        name: 'employee',
        message: 'What is the Employee\'s name?'
    },
    {
        type:'text',
        name: 'id',
        message: 'What is the employee\'s ID number?'
    },
    {
        type: 'text',
        name: 'email',
        message: 'What is the employee\'s email?'
    },
    {
        type:'confirm',
        name:'anotherEntry',
        message: 'What you like to add another employee?',
        default: false
    },
    {
        type:'text',
        name: 'office',
        message:'What is the Manager\'s office number?'
        when: (answers) => answers.role === 'Manager'
    },
    {
        type: 'text',
        name: 'github',
        message: 'What is the Engineer\'s Github username?'
        when: (answers) => answers.role === 'Engineer'
    },
    {
        type:'text',
        name:'school',
        message: 'What is the Intern\'s school?'
        when: (answers) => answers.role === 'Intern'
    }   
]