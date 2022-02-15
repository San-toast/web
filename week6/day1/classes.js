// Classes
class Student {
  constructor(name, height, age) {
    this.name = name;
    this.height = height;
    this.age = age;
  }
  greet() {
    return `${this.name} says hello!`;
  }
  changeStudentName(newName) {
    this.name = newName;
  }
}

class SuperStudent extends Student {
  constructor(title) {
    super(title);
    this.title = title;
  }
  greet() {
    console.log(this.title);
  }
}

const Santos = new Student("Santos", "5.8", "27");
const Ciara = new Student("Ciara", "5.7", "27");
const Matt = new SuperStudent("TA");
console.log(Santos);
console.log(Ciara.greet());
Santos.changeStudentName("Billy");
console.log(Santos.greet());
Matt.greet();

// default value

const example = (array = ["joe"]) => {
  console.log(array[0]);
};
example(["ciara"]);

// if you can write a function in one, you don't have to use return or {}
const functionName = () => "hi";
console.log(functionName());
