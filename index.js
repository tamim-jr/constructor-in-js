class person {
    constructor (firstName, lastName, age, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.salary = salary;
}
}
const bigBro = new person("Alim", "Ahmed", 44, 12500);
const smallBro = new person("Ali", "Hussain", 34, 45000);
const smallBro1 = new person("Ali", "Hussain", 34, 45000);
const smallBro2 = new person("Ali", "Hussain", 34, 45000);
console.log(bigBro);
console.log(smallBro);
console.log(smallBro1);
console.log(smallBro2);