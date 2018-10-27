class Student {
    constructor() {
        this.rollNo = null;
        this.name = null;
    }

    setRollNo(rollNo) {
        this.rollNo = rollNo;
    }
    getRollNo() {
        return this.rollNo;
    }

    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}

class StudentView {
    printStudentDetails(studentName, studentRollNo) {
        console.log(`Student: {Name: ${studentName}, RollNo:${studentRollNo}}`);
    }
}

class StudentController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
    }

    setStudentRollNo(rollNo) {
        this.model.setRollNo(rollNo);
    }
    getStudentRollNo() {
        return this.model.getRollNo();
    }

    setStudentName(name) {
        this.model.setName(name);
    }
    getStudentName() {
        return this.model.getName();
    }

    updateView() {
        this.view.printStudentDetails(this.model.getName(), this.model.getRollNo());
    }
}


function retriveStudentFromDatabase() {
    const student = new Student();
    student.setName("Tom");
    student.setRollNo(20);
    return student;
}

const student = retriveStudentFromDatabase();
const view = new StudentView();
const controller = new StudentController(student, view);

controller.updateView();
controller.setStudentRollNo(32);
controller.updateView();
