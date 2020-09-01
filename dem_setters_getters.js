'use strict'; 
(function() {

    let user = {
      name: {
        firstName: 'Mario',
        lastName: 'Perez',
      },
      birthDate: '25/07/1987',
      isAdult(){ return this.age > 18 }
    };
  
  Object.defineProperty(user, 'fullName',
  {
    get: function() { // gets a value
      return `${this.name.firstName} ${this.name.lastName}`
    },
    set: function(value) { // set a new value onthe obj prop
      let nameParts = value.split(' ');
      this.name.firstName = nameParts[0];
      this.name.lastName = nameParts[1];
    }
  });

  display(user.fullName)

  user.fullName = 'Francisco Perez';

  display(user.fullName)





})();