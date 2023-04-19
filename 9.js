class Person {
    constructor(name, age) {
      this._name = name;
      this._age = age;
      this._hobbies = [];
    }
  
    sayHello() {
      console.log(`Привет, меня зовут ${this._name}, мне ${this._age} лет.`);
    }
  
    get hobbies() {
      return this._hobbies;
    }
  
    addHobby(hobby) {
      this._hobbies.push(hobby);
    }
  }
  
  class Child extends Person {
    constructor(name, age, gender) {
      super(name, age);
      this._gender = gender;
    }
  
    sayHello() {
      console.log(`Привет, меня зовут ${this._name}, мне ${this._age} лет и я ${this._gender}.`);
    }
  
    play() {
      console.log(`${this._name} играет в футбол.`);
    }
  }
  
  const person1 = new Person("Матильда", 20);
  person1.sayHello();
  person1.addHobby("художница");
  person1.addHobby("музыка");
  console.log(person1.hobbies);
  
  const child1 = new Child("Петр", 11, "мальчик");
  child1.sayHello();
  child1.addHobby("лего");
  child1.addHobby("майнкрафт");
  console.log(child1.hobbies);
  child1.play();
  