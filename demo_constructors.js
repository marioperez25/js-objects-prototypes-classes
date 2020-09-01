'use strict'; 
(function() {

  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName,
      this.lastName = lastName,
      this.age = age;
    }
  }

  let personA = new Person('Mario', 'Perez', 33);
  let personB = new Person('Hazel', 'Perez', 42)

  display(personA);
  display(personB);

})();