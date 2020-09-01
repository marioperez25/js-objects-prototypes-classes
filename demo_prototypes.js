'use strict'; 
(function() {
    let myFunction = function() {};

    display(myFunction.prototype);

    let persona = {
      firstName: 'Jim'
    }

    display(persona.prototype)

    function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }

    let jim = new Person('Jim', 'Cooper');
    display(jim.firstName);

    let john = new Person('Jim', 'Cooper');
    display(john.firstName)

    Person.prototype.age = 100

    display(jim.__proto__)
    display(jim.age)
    display(john.age)

    john.age = 20;
    display(john.age)

    Person.prototype.age = 10;


})();