class StudentTO {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}

class StudentBO {
    constructor() {
        // simulated database
        this.students = [];
        this.students.push(new StudentTO("Tom"));
        this.students.push(new StudentTO("Juedy"));
        this.students.push(new StudentTO("Loral"));
    }

    deleteStudent(student) {
        this.students.splice(this.students.indexOf(student), 1);
    }

    getAllStudents() {
        return this.students;
    }

    getStudent(name) {
        const filter = this.students.filter(ele=>ele.getName().toLowerCase()==name);
        return filter[0];
    }

    updateStudent(student) {
        const index = this.students.indexOf(student);
        this.students[index].setName(student.name);
        console.log(`Student ${student.name} updated in the database`);
    }
}

const studentBO = new StudentBO();
for (const student of studentBO.getAllStudents()) {
    console.log(`Student: ${student.getName()}`);
}

let student = studentBO.getAllStudents()[0];
student.setName("tomfriwel");
studentBO.updateStudent(student);

student = studentBO.getStudent("tomfriwel");
console.log(`Student: ${student.getName()}`);

