
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log("Hi my name is " + this.name + " and my age is " + this.age);
    }
}

class Cat extends Animal{
    constructor(name, age){
        super(name, age);
    }
    greet() {
        console.log("BAU");
    }
}
class Dog extends Animal{
    constructor(name, age){
        super(name, age);
    }
    greet() {
        console.log("Mqu");
    }
}


dog = new Dog("Joro", 69);

dog.greet();

cat = new Cat("Beray", 31);

cat.greet();