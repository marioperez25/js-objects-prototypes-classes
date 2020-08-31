'use strict'; 
(function() {

  // display('Henlo World');

  // Object Literal:

  let person = {
    firstName: 'Mario',
    lastname: 'Perez',
    birthDate: '25/07/1987'
  };

  person.age = 32;

  person.isAdult = function(){
    return this.age >= 18
  }

  display(`Name: ${person.firstName}`)
  display(`Age: ${person.age}`)
  display(`Is this person an adult? R/` + person.isAdult())

})();