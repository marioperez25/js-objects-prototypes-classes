'use strict'; 
(function() {
  
  class Person {
    constructor(firstName, lastName, age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }

    get fullName() {
      return this.firstName + ' ' + this.lastName; 
    }

    set fullName(fullName) {
      let fullNameParts = fullName.split(' ');
      this.firstName = fullNameParts[0];
      this.lastName = fullNameParts[1];
    }

    isAdult(){
      let dinkingAge = 18;
      return this.age >= dinkingAge;
    }
  }

  class Student extends Person {

    constructor(firstName, lastName, age) {
      super(firstName, lastName, age);
      this._enrolledCourses = [];
    }

    enroll(courseId){
      this._enrolledCourses.push(courseId)
    }

    getCourses(){
      return this._enrolledCourses;
    }
  }

  let jim = new Student('Jim', 'Cooper', 50);
  jim.enroll('MTG183');
  jim.enroll('SCQ836');
  jim.enroll('MTG657');

  display(jim)
  

})();
