//------------------Object---------------- 
// let val;

// console.log(val);
// console.log(typeof val);
// object literals
// let yigit = {
//     name :'yigit',
//     yearOfBirth : 2010,
//     job : 'student',
// }
//console.log(yigit);

// function Person(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function(){
//         return 2018-this.yearOfBirth;
//     }
//     console.log(this);
// }
// let Person = function(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function(){
//         return 2018-this.yearOfBirth;
//     }
//     console.log(this);
// }
// let yigit = new Person('yigit',2010,'student');
// let emel = new Person('emel',1989,'teacher');

// console.log(yigit.name);
// console.log(yigit.yearOfBirth);
// console.log(yigit.job);
// console.log(yigit.calculateAge());
// console.log("*******************************");

// console.log(emel.name);
// console.log(emel.yearOfBirth);
// console.log(emel.job);
//------------------ProtoType---------------- 
// let Person = function(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function(){
//         return 2020-yearOfBirth;
//     }
// }
// Person.prototype.calculateAge = function(){
//     return 2020 - this.yearOfBirth;
// }
// Person.prototype.getName = function(){
//     return this.name;
// }
// Person.prototype.lastname = 'Turan';
// let emel = new Person('emel',1989,'teacher');
// let talha = new Person('talha',1989,'teacher');
// console.log(emel.calculateAge());
// console.log(emel);
// console.log(emel.getName());
// console.log("*******************************");
// console.log(talha);
// console.log(talha.calculateAge());

// console.log(emel.hasOwnProperty('lastname'));
//------------------Uygulama---------------- 
// function Employee(name,salary){
//     if(!this instanceof Employee){
//         return new Employee(name,salary);
//     }
//     //var self = this;
//     this.name = name;
//     this.salary = salary;
// }
// Employee.prototype.calculateSalary = function(){
//     var month  = new Date().getMonth()+1;
//     var tax = 0,total = this.salary * month;
//     if(total <= 20000){
//         tax = total * 0.2;
//     }
//     else if(total > 20000 && total < 30000){
//         tax = total * 0.25;
//     }
//     else{
//         tax = total * 0.3;
//     }
//     return {
//         tax : tax,
//         paid : total - tax
//     }
//     console.log(month);
// }
// var emp1 = new Employee('Yigit',3000);
// console.log(emp1.calculateSalary());
// console.log(emp1);

// var emp2 = new Employee('Can',4000);
// console.log(emp2);
//------------------Object Create---------------- 
// let personProto = {
//     calculateAge : function(){
//         return 2018-this.yearOfBirth;
//     }
// }
// let yigit = Object.create(personProto);
// yigit.name = 'yigit';
// yigit.yearOfBirth = 2010;
// yigit.job = 'student';
// let emel = Object.create(personProto,{
//     name : {value : 'emel'},
//     yearOfBirth : {value : 1989},
//     job : {value : 'teacher'}
// });

// console.log(yigit);
// console.log(yigit.yearOfBirth);
//------------------Prototypal inheritance---------------- 
// let Person = function(name,yearOfBirth,job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function(){
//     return 2020-this.yearOfBirth;
// }
// let Teacher = function(name,yearOfBirth,job,sub){
//     Person.call(this,name,yearOfBirth,job);
//     this.sub = sub;
// }

// //Inherit the PErson protype methods
// Teacher.prototype = Object.create(Person.prototype);
// //set Teacher constructor
// Teacher.prototype.constructor = Teacher;

// let emel = new Teacher('emel',1989,'teacher','math');
// console.log(Teacher.prototype.constructor);
// console.log(emel);
// console.log(emel.calculateAge());
//---------------------Built-in Constructors-------------------

// var str1 = 'Sadık';
// var str2 = new String('Sadık');

// console.log(str1);
// console.log(typeof str1);
// console.log(str2);
// console.log(typeof str2);