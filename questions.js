const questionsEmp = [
    {
        type: 'list',
        name: 'role',
        message:"What is the employee's role?",
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type:'text',
        name: 'employee',
        message: "What is the Employee's name?"
    },
    {
        type:'text',
        name: 'id',
        message: "What is the employee's ID number?"
    },
    {
        type: 'text',
        name: 'email',
        message: "What is the employee's email?"
    },
    {
        type:'confirm',
        name:'anotherEntry',
        message: "What you like to add another employee?",
        default: false
    }
    
]

const questionsMgr = [
    {
        type:'text',
        name: 'office',
        message:"What is the Manager's office number?"
    }
    
]

const questionsEng = [
    {
        type: 'text',
        name: 'github',
        message: "What is the Engineer's Github username?"
    }
    
]

const questionsInt = [
    {
        type:'text',
        name:'school',
        message: "What is the Intern's school?"
    }
    
]

module.exports = questions;