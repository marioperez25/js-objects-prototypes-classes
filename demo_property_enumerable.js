'use strict'; 
(function() {

    let user = {
      firstName: 'Mario',
      lastname: 'Perez',
      birthDate: '25/07/1987',
      isAdult(){ return this.age > 18}
    };
    // not counted in let...in loops:
    Object.defineProperty(user, 'firstName', {enumerable: false})

    for ( let prop in user) {
      // non enumerables are ignored in this loop
      display(prop + ": " + user[prop])
    }

    // non enumerables are not shown using Object.keys
    display(Object.keys(user));

    // non enumerables are not serialized bu stringify
    display(JSON.stringify(user));

    // they are still accesible with dot and bracket notation
    display(user.firstName)
    display(user[firstName])

})();