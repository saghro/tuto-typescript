"use strict";
class Person {
    // Constructeur de la classe
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // Méthode de la classe
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// Utilisation de la classe
const person = new Person('John', 'Doe');
console.log(person.getFullName()); // Affiche "John Doe"
