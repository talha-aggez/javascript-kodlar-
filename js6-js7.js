// //---------------Arrow Functions -----------------

// let  welcomeES5 = function(){
//     console.log('Hello from ES5');
// }

// welcomeES5();

// let welcomeES6 = () => {
//     console.log('Hello from ES6');
// }
// welcomeES6();

// //with parameters

// //ES5 

// let multiplyES5 = function(x,y){
//     return x*y;
// }

// console.log(multiplyES5(10,5));

// //ES6
// let multiplyES6 = (x,y)=> x*y;
// console.log(multiplyES6(5,6));
// //Es5
// let splitES5 = function(text){
//     return text.split(' ');
// }
// console.log(splitES5('Modern JavaScript Kurus'));
// //ES6
// let splitES6 = text => text.split('');

// console.log(splitES6('Modern Java Script Kurus'));

// //Object Literals

// //ES 5

// let getProductES5 = function(id,name){
//     return{
//         id : id,
//         name : name
//     }
// }
// console.log(getProductES5('1','Samsung S8'));

// //ES6


// let getProductES6 = (id,name) =>(
//     {
//         id : id,
//         name : name
//     }
// );
// console.log(getProductES6('1','İphone7'));

// const phones  = [
//     {name  : 'Iphone 8' , price : 3000},
//     {name  : 'Iphone 7' , price : 2000},
//     {name  : 'Iphone 6' , price : 1000},
//     {name  : 'Iphone 5' , price : 2400} 
// ];
// //ES5
// let pricesES5 = phones.map(function(phone){
//     return phone.price;
// })
// console.log(pricesES5);
// //ES6
// let pricesES6 = phone.map(phone=> phone.price);

// console.log(pricesES6);

// //ES5
// const arr = [1,2,3,4,5,20,30,50,61,79];

// let evenES5 = arr.filter(function(a){
//     return a % 2 == 0;
// })
// console.log(evenES5);
// //ES6
// let evenES6 = arr.filter(a=>a%2 == 0);
// console.log(evenES6);
//-------------------- this keyword --------------------
//ES5
// let list = {
// //     category : 'phone',
// //     names : ['Iphone 8','Samsung S8','Iphone 7'],
// //     call : function(){
// //         var self = this;
// //         this.names.map(function(name){
// //             console.log(`${self.category},${name}`);
// //         })
// //     }
// // }
// // list.call();
// // let list = {
// //     category : 'phone',
// //     names : ['Iphone 8','Samsung S8','Iphone 7'],
// //     call : function(){
// //         //var self = this;
// //         this.names.map((name)=>{
// //             console.log(`${this.category},${name}`);
// //         })
// //     }
// // }
// // list.call();
// // function Game(){
// //     this.live = 0;
// //     this.addLive = function(){
// //         this.OneUp setInterval(function(){

// //         })
// //     }
// // }
// //-------------------- spread operator -----------------------
// function getTotal(a,b,c){
//     return a + b + c;
// }
// console.log(getTotal(10,20,30));

// let numbers = [10,20,30];

// //ES5
// console.log(getTotal.apply(null,numbers));




// //ES6

// console.log(getTotal(...numbers));

// let arr1 = ['two','three'];

// let arr2 = ['one','four','five'];

// // arr1.push(...arr2);
// // arr1.unshift(...arr2);

// let arr3 = ['one',...arr1,'four','five'];

// console.log(arr3);
//------------------------Rest Parametres ---------------------

//ES5

// function sumES5(){
//     let arr = Array.prototype.slice.call(arguments);
//     console.log(arr);

//     let result = 0;
//     arr.forEach(function(){
//         result += item;
//     });
//     return result;
// }
// console.log(sumES5(10,20,30));
// //ES6
// function sumES6(...arr){
//     let result = 0;
//     arr.forEach(item => result+=item);
//     return result;
// }

// console.log(sumES6(10,20,30));
//---------------------Destructing ----------------------
var a,b;
a = 10;
b 