'use strict'; 
(function() {
  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age

    Object.defineProperty(this, 'fullName',{
      get: function() { 
        return this.firstName + ' ' + this.lastName
      },
      enumerable: true
    });
  }

  function Student(firstName, lastName, age) {
    Person.call(this, firstName, lastName, age)
    this._enrolledCourses = [];

    this.enroll = function(courseId){
      this._enrolledCourses.push(courseId)
    }

    this.getCourses = function() {
      return this._enrolledCourses;
    }
  }

  Student.prototype = Object.create(Person.prototype);
  Student.prototype.constructor = Student;

  let jim = new Student('Jim', 'Cooper', 29);

  jim.enroll('NXJ123');
  jim.enroll('DAS451');
  jim.enroll('YAP329');

  display(jim);
  display(jim.getCourse());
  display(jim.__proto__);
  display(jim.__proto__.__proto__);
 

})();
