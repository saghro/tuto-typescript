class Person {
    // Propriétés de la classe
    firstName: string;
    lastName: string;
    
    // Constructeur de la classe
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    // Méthode de la classe
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Utilisation de la classe
const person = new Person('John', 'Doe');
console.log(person.getFullName()); // Affiche "John Doe"
