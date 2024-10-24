class Person {
    

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }

}

const person1 = new Person("John", 25);
// person1.displayInfo();

const person2 = new Person("Jane", 30);
// person2.displayInfo(); 

person2.name = "Simon"
// console.log(person2.name);

class Shape {
    constructor(width,height,length){
        this.width = width;
        this.height = height;
        this.length = length;
    }

    CalcuteShapeArea(){
        console.log("the area of this shape is: "+ this.width*this.height*this.length);
    }
}

const  KhoiHinhVuong = new Shape(10,10,10);
// KhoiHinhVuong.CalcuteShapeArea();

const KhoiHinhChuNhat = new Shape(10,20,30);
// KhoiHinhChuNhat.CalcuteShapeArea();

class Product{
    id = 0;
    name = "";
    price = 0;
    constructor(id,name,price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    displayInfo(){
        console.log("Product ID:"+ this.id +"name is:"+ this.name +"price is:"+ this.price);
    }
}

class Circle {
    constructor(radius) {
        this._radius = radius;  // Sử dụng dấu gạch dưới để chỉ định biến "protected"
    }

    // Getter để lấy giá trị bán kính
    get radius() {
        return this._radius;
    }

    // Setter để thiết lập giá trị bán kính, kiểm tra giá trị dương
    set radius(newRadius) {
        if (newRadius > 0) {
            this._radius = newRadius;
        } else {
            console.log("Bán kính phải là một số dương.");
        }
    }

    // Phương thức tính diện tích hình tròn
    calculateArea() {
        return Math.PI * this._radius * this._radius;
    }
}

// Sử dụng class Circle
let circle = new Circle(5);
console.log("Bán kính ban đầu: " + circle.radius);// Sử dụng getter

circle.radius = 10;  // Sử dụng setter để thiết lập giá trị
console.log("Bán kính mới: " + circle.radius);  // Sử dụng getter

circle.radius = -3;  // Sử dụng setter để thiết lập giá trị không hợp lệ
// Output: Bán kính phải là một số dương.

class House{
    constructor(address){
        this.address = address;
        
    }
}
class Mainson extends House {
    constructor(address, floor){
        super(address);
        this.floor = floor;
    }
}

let Mainson1 = new Mainson("Trump villa", 4);
console.log(Mainson1.address + " " + Mainson1.floor + " Floors");


class Animal {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    eat() {
      console.log(`${this.name} is eating.`);
    }
  
    makeSound() {
      console.log(`${this.name} is making a sound.`);
    }
  
    getInfo() {
      console.log(`This is a ${this.name}, and it is ${this.age} years old.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, age, breed) {
      super(name, age);
      this.breed = breed;
    }
  
    // Ghi đè (override) phương thức makeSound() của class cha
    makeSound() {
      console.log(`${this.name}, the ${this.breed}, is barking.`);
    }
  
    fetch() {
      console.log(`${this.name} is fetching a ball.`);
    }
  
    getInfo() {
      super.getInfo();
      console.log(`This dog is of breed: ${this.breed}.`);
    }
  }
  
  class Bird extends Animal {
    constructor(name, age, color) {
      super(name, age);
      this.color = color;
    }
  
    // Ghi đè (override) phương thức makeSound() của class cha
    makeSound() {
      console.log(`${this.name} is chirping.`);
    }
  
    fly() {
      console.log(`${this.name} is flying.`);
    }
  
    c;
    getInfo() {
      super.getInfo();
      console.log(`This bird has ${this.color} feathers.`);
    }
  }
  
  const myDog = new Dog("Buddy", 3, "Golden Retriever");
  const myBird = new Bird("Tweety", 2, "yellow");
  
  myDog.eat();
  myDog.makeSound();
  myDog.fetch();
  myDog.getInfo();
  
  console.log("-----------------");
  
  myBird.eat();
  myBird.makeSound();
  myBird.fly();
  myBird.getInfo();


