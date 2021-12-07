const person = {
    firtName: "Armandina",
    lastName: "Atom"
};

//spread sintax

let p1 = {
    ...person,
}

//object.assign()
let p2 = Object.assign({}, person);

//JSON
let p3 = JSON.parse(JSON.stringify(person));

console.log(p1);
console.log(p2);
console.log(p3);

let copiedPerson = person;
copiedPerson.firstName = "Richard"
console.log(person);
//a valtozo erteke az egy reference value


let num = 1;
let copiedNum = num;

copiedNum = 2;
console.log(num);
// a valtozo erteke az egy primitive value

let person1 = {
    firstName: 'John',
    lastName: 'Doe',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        country: 'USA'
    }
};

let copiedPerson1 = Object.assign({}, person1);

copiedPerson1.firstName = "Richard";

copiedPerson1.address.street = "pelda utca";

console.log(copiedPerson1);

let copiedPerson2 = JSON.parse(JSON.stringify(person));

copiedPerson2.firstName = "Joska";
copiedPerson2.address.street = "Fő utca";

console.log(person1);