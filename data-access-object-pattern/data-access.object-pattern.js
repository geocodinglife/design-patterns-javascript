class Student {
    constructor(name) {
        this.name = name;
    }

    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class StudentDao {
    constructor(){
        if (new.target===StudentDao) {
            throw new Error("该类不能实例化");
        }
    }
    getAllStudents() { }
    getStudent(name) { }
    updateStudent(student) { }
    deleteStudent(student) { }
}

class StudentDaoImpl extends StudentDao {
    constructor() {
        super();
        // students: simulated database
        this.students = [];
        let student1 = new Student('Tom');
        let student2 = new Student('Ukiyoe');
        this.students.push(student1);
        this.students.push(student2);
    }

    deleteStudent(student) {
        const index = this.students.indexOf(student);
        this.students.splice(index, 1);
        console.log(`Student ${student.getName()} deleted from database`);
    }

    getAllStudents() {
        return this.students;
    }

    getStudent(name) {
        let filter = this.students.filter(ele=>ele.name==name);
        return filter[0];
    }

    updateStudent(student) {
        const index = this.students.indexOf(student);
        this.students[index].setName(student.name);
        console.log(`Student ${student.getName()} updated in the database`);
    }
}

const studentDao = new StudentDaoImpl();

for (const student of studentDao.getAllStudents()) {
    console.log(`Student Name:${student.getName()}`);
}

const student = studentDao.getStudent('Tom');
student.setName('Tomfriwel');
studentDao.updateStudent(student);

const student2 = studentDao.students[0];
console.log(`Student Name:${student2.getName()}`);