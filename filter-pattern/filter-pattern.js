class Person {
    constructor(name, gender, maritalStatus) {
        // this.name = name;
        // this.gender = gender;
        // this.maritalStatus = maritalStatus;
        Object.assign(this, { name, gender, maritalStatus });
    }

    getName() {
        return this.name;
    }

    getGender() {
        return this.gender;
    }

    getMaritalStatus() {
        return this.maritalStatus;
    }
}

class Criteria {
    constructor() {
        if (new.target == Criteria) {
            throw new Error("本类不能实例化");
        }
    }
    meetCriteria(persons) { }
}

class CriteriaMale extends Criteria {
    meetCriteria(persons) {
        let malePersons = []
        for (const person of persons) {
            if (person.getGender().toLowerCase() == 'male') {
                malePersons.push(person);
            }
        }
        return malePersons;
    }
}

class CriteriaFemale extends Criteria {
    meetCriteria(persons) {
        let femalePersons = []
        for (const person of persons) {
            if (person.getGender().toLowerCase() == 'female') {
                femalePersons.push(person);
            }
        }
        return femalePersons;
    }
}

class CriteriaSingle extends Criteria {
    meetCriteria(persons) {
        let singlePersons = []
        for (const person of persons) {
            if (person.getMaritalStatus().toLowerCase() == 'single') {
                singlePersons.push(person);
            }
        }
        return singlePersons;
    }
}

class AndCriteria extends Criteria {
    constructor(criteria, otherCriteria) {
        super();
        this.criteria = criteria;
        this.otherCriteria = otherCriteria;
    }

    meetCriteria(persons) {
        let firstCriteriaPersons = this.criteria.meetCriteria(persons);
        return this.otherCriteria.meetCriteria(firstCriteriaPersons);
    }
}

class OrCriteria extends Criteria {
    constructor(criteria, otherCriteria) {
        super();
        this.criteria = criteria;
        this.otherCriteria = otherCriteria;
    }

    meetCriteria(persons) {
        let firstCriteriaPersons = this.criteria.meetCriteria(persons);
        let secondCriteriaPersons = this.otherCriteria.meetCriteria(persons);
        for (const person of secondCriteriaPersons) {
            if (!firstCriteriaPersons.includes(person)) {
                firstCriteriaPersons.push(person);
            }
        }
        return firstCriteriaPersons;
    }
}

//  ----
function printPersons(persons) {
    for (const person of persons) {
        console.log(`Person: {Name: ${person.name}, Gender:${person.gender}, maritalStatus:${person.maritalStatus}}`);
    }
}
let persons = [];

persons.push(new Person('Tom', 'Male', 'Single'));
persons.push(new Person('Robert', 'Male', 'Married'));
persons.push(new Person('Jane', 'Female', 'Married'));
persons.push(new Person('Diana', 'Female', 'Married'));
persons.push(new Person('Mike', 'Male', 'Single'));

let male = new CriteriaMale();
let female = new CriteriaFemale();
let single = new CriteriaSingle();
let singleMale = new AndCriteria(male, single);
let singleOrFemale = new OrCriteria(female, single);

console.log("Male:");
printPersons(male.meetCriteria(persons));

console.log("\nFemale:");
printPersons(female.meetCriteria(persons));

console.log("\nSingle:");
printPersons(single.meetCriteria(persons));

console.log("\nSingleMale:");
printPersons(singleMale.meetCriteria(persons));

console.log("\nSingleOrFemale:");
printPersons(singleOrFemale.meetCriteria(persons));