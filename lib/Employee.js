// TODO: Write code to define and export the Employee class

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

// This code defines the Employee class.
class Employee {
    // Constructor for creating a new employee with supplied information. Employees encompass Intern, Engineer, and Manager.
    constructor(name, id, email) {
        // This checks to see if the has been entered. If the entry is not a string, will console log an error and prompt for the user to enter a name.
        // if (typeof name === '') {
        //     throw new Error('\'Name\' cannot be blank, please enter a name.');
        // }
        // This stores the employee name
        this.name = name;
        // This stores the employee id
        this.id = id;
        // This stores the employee email
        this.email = email;
    }

    // This code will return the name, id, email and what this object functionally is, the string: 'employee'
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;