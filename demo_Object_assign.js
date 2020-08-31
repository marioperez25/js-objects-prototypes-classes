'use strict'; 
(function() {

  let user = {
    firstName: 'Mario',
    lastname: 'Perez',
    birthDate: '25/07/1987'
  };

  let healthStats = {
    weight: '77',
    height: '1'
  };

  function userProfile(personInfo,personStats){
    // first object is merged with the remaining objects to prevent
    // undesired mutations
    return Object.assign({}, personInfo, personStats); 
  }
  
  let completeProfile = userProfile(user,healthStats)

  display(completeProfile)

})();