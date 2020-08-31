'use strict'; 
(function() {

  // display('Henlo World');

  function registerUser(firstName, lastName) {
    let user = {
        firstName,
        lastName,
        fullName: function(){ return `${this.firstName} ${this.lastName}`}
    }
    display(user.fullName())
  };

  registerUser('Koopa', 'Troopa');

})();