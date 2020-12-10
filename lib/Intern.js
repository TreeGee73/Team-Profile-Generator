// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee');

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// This code defines the Intern class. Intern class extends the class of Employee so you don't have to grab repeated data again. Adds school to pull intern's school name.
class Intern extends Employee {
    // Constructor for storing information on a new intern
    constructor(name, id, email, school) {
        // Super is used to call functions on the parent class of Employee
        super(name, id, email);
        // This stores the school name
        this.school = school;
    }

    // This code will return the school name and intern role
    getSchool() {
        return this.school;
    }
    
    getRole() {
        return "Intern";
    }
}
module.exports = Intern;