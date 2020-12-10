// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee');

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// This code defines the Engineer class. Engineer class extends the class of Employee so you don't have to grab repeated data again. Adds userName to pull engineer's Github user name.
class Engineer extends Employee {
    // Constructor for storing information on a new engineer
    constructor(name, id, email, userName) {
        // Super is used to call functions on the parent class of Employee
        super(name, id, email);
        // This stores the Github user id
        this.userName = userName;
    }

    // This code will return the Github username and engineer role
    getUserName() {
        return this.userName;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;