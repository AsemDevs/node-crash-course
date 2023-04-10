const person = {
    name: 'John',
    age: 30,
    greet: function() {
      setTimeout(() => {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
      }, 100);
    }
  };
  
  person.greet(); // logs "Hello, my name is John and I am 30 years old." after 1 second
  