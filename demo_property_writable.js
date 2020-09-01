'use strict'; 
(function() {

    let user = {
      firstName: 'Mario',
      lastname: 'Perez',
      birthDate: '25/07/1987',
      isAdult(){ return this.age > 18}
    };
    // blocks att from re-writting:
    Object.defineProperty(user, 'firstName', {writable: false})

    

    display(Object.getOwnPropertyDescriptor(user, 'firstName'))

})();