// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require('./Employee');

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// This code defines the Manager class. Manager class extends the class of Employee so you don't have to grab repeated data again. Adds office to pull manager's office number.
class Manager extends Employee {
    // Constructor for storing information on a new manager
    constructor(name, id, email, office) {
        // Super is used to call functions on the parent class of Employee
        super(name, id, email);
        // This stores the office number
        this.office = office;

    }

    // This code will return the office number and manager role
    getOfficeNumber() {
        return this.office;
    }
    
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;