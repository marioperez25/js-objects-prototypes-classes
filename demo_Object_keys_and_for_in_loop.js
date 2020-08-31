'use strict'; 
(function() {

  let person = {
    firstName: 'Paco Pedro',
    lastName: 'D`lamar'
  }

  display(Object.keys(person))

  for (let key in person) {
    display(person[key])
  }

})();