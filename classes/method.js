class Employee  {
    constructor( jobTitle) {
       
        this.jobTitle = jobTitle;
    }

    introduce() {
        // Override the method from the parent class
        console.log(`  I am ${this.age} years old.`);
    }
}

const employee1 = new Employee( 'Software Engineer');
employee1.introduce(); 