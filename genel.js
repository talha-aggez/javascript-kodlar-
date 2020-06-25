/*alert("Merhaba");
console.log("Merhaba");
console.log(1234);
console.log(true);
console.log([1,2,3]);
console.error("hata oluştu");
console.warn("bir uyarı oluşut");
//asflkşasdkşlif
/* asdfasdf

     adsf
    fasd
    asdf

*/
//console.clear();
// // var age;
// console.log(age);
// age = 20;
// console.log(age);
// var fullname='Sadık turan';
// console.log(fullname);
// fullname = 'Selamlar ...';
// console.log(fullname);

// //Değişken tanımlama kuralları...

// //Sayısal ifade ile başlayamaz...

// var ad = "Sadık";
// var soyad = "Turan";
// //var , let , const
//Ders 3 : Değişken Tipleri

// //Primitive Tipler
// //String
// let firstName='asdflkşasdf';
// console.log(typeof firstName);
// //Number 
// let age = 20;
// let money = 100.5;
// console.log(typeof age);
// console.log(typeof money);
// //Boolean 
// let isActiove = true;
// console.log(typeof isActiove);
// //Null
// let job = null;
// console.log(typeof job);
// //Reference Types - Objects
// //Array
// let names = ['Ali','Ahmet','Can'];
// console.log(typeof names);
// //Object
// let adress = {
//     city:'Kocaeli',
//     country:'Türkiye'
// }
// //Function 
// var calculateAge = function(){
//     return 0;
// }
// console.log(typeof calculateAge);
//Ders 4 Tür Dönüşümü
// let val;

// //number to string
// val = String(10);

// //bool to string

// val = String(true);
// //date to string
// val = String(new Date().getUTCFullYear());
// //array to string
// val = String([1,2,3,4]);

// //toString
// val = (10).toString();
// val = (false).toString();
// //String to Number

// val = Number('10');
// val = Number(true);
// val = Number(false);
// val = Number(null);

// //parseInt
// val = parseInt('10');
// val = parseInt('10.5');
// //parseFloat
// val = parseFloat('10.5');

// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2));
//Uygulama 

// var customerName= 'aksldfşklsad';
// var customerLastName="asdf";

// var fullName='fajsdf asdf';
// var customerId = '1234812123';
// var total = 205.6;
// var gender = 'erkek';
//Ders 9 Operatoörler
//1- Aritmetik Operatörler
// let val;
// const a = 10;
// const b = 5;
// const d = 5;
// let c= 3;
// val = a+b;
// val = a-b;
// val = a*b;
// val = a/b;
// val = a%b;
// val = a;
// val = ++c;
// val = c++;
// //2- Atama Operatörleri
// val = a;
// val += a;
// //3- Karşılaştırma Operatörleri
// val = a == b
// val = a == a;
// val = b ===c ;
// val  = 5 === '5';//Burda hem deger hem tip kontrolü yapılur
// //4- Mantıksal Operatörler
// console.log(val);
// console.log(typeof val);
//Uygulama
// let IndexCan;
// let IndexAda;

// const kgCan = 60;
// const kgAda = 40;

// const heightCan = 1.70;
// const heightAda = 1.50;

// IndexAda = (kgAda) / (heightAda* heightAda);
// IndexCan = (kgCan)  / (heightCan*heightCan);

// console.log(IndexAda,IndexCan);

// let adaHigher = IndexAda > IndexCan;
// console.log("askflksadflkşiasdf: " +adaHigher);
//Ders 11 Date And Times
// let d = new Date();
// let birthday = new Date(1990,1,5);

// //Set methods
// d.setFullYear(2020);
// d.setMonth(5);
// d.setDate(20);
// d.setHours(10);
// d.setMinutes(56);
// //Get Methods
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getFullYear());
// console.log(d.getHours());
// console.log(d.getMonth());
// console.log(d.getUTCMinutes());
// console.log(d.getSeconds());

// console.log(d.getFullYear() - birthday.getFullYear());

// console.log(d);
// console.log(typeof d);
//Uygulama
// var dt = new Date();

// console.log(dt.getMonth()+1);
// console.log(dt.getDate()); 
// console.log(dt.getFullYear());
// console.log(dt);

// var dtA = new Date('8/24/2010 14:50:10');
// var dtB = new Date(2010,7,24,14,50,10);

// console.log(dtA);
// console.log(dtB);

// var dtC = new Date('1/1/1990');
// var dayOfMonth = dtC.getDate();
// dtC.setDate(dayOfMonth -1 );

// console.log(dtC);

// var start = new Date('1/1/1990');
// var end  = new Date('1/1/1991');

// var milisecond = end-start;
// var saniye = milisecond / 1000;
// var dakika = saniye / 60;
// var saat = dakika / 60;
// var gün = saat / 24
// console.log('milisecond : ' +milisecond);
// console.log('saniye : ' +saniye);
// console.log('dakika : ' +dakika);
// console.log('saat : ' +saat);
// console.log('gün : '+gün);

// var birthday = new Date('8/1/1985');

// var ageDifMs  = Date.now() - birthday.getTime();
// var ageDate = new Date();
// console.log(ageDate.getFullYear - 1970);

// console.log(ageDifMs);

// // console.log(birthday.getTime());
// // console.log(Date.now());
//Ders 13 Numbers Number Metodları
// let val;
// //val = Number('10');
// //val = parseInt('a10a');
// //val = parseFloat('10.5');
// //val = isNaN('a10');
// var num = 10.891345;
// val  = num.toPrecision(3);
// val = num.toFixed(5);

// val = Math.PI;
// val = Math.round(2.4);//En yakın  sayıya yuvarla
// val = Math.ceil(2.4);//yukara yuvarla..
// val = Math.floor(2.4);//aşağı yuvarla..
// val = Math.sqrt(64);
// val = Math.pow(2,4);
// val = Math.abs(-100);
// val = Math.min(1,2,3,4,5,0);
// val = Math.max(9,4,2);
// val = Math.random()*10;//random 0 ile bir arasında sayı verir

// console.log(val);
// console.log(typeof val);
//Ders 14  Uygulama
// var brutMaas = 3700;
// var mesaiUcreti = 10.3;
// var mesaiSuresi = 42;

// var toplamBrutMaas = brutMaas + (mesaiUcreti * mesaiSuresi);
// console.log(toplamBrutMaas);
//Ders 15 Strings

// const firstNameo = 'Sadık';
// const lastName = "Turan";
// let hobies = 'sienema ,spor  ,kitap';
// const age = 35;
// let val;
// //string birlestirme(concat)
// val = firstNameo + ' ' + lastName;
// val = 'Sadık';
// val += ' Turan';  

// val = 'Benim adım : '+ firstNameo + ' ' + lastName +  ' ' + age; 
// //String concat 
// val = firstNameo.concat(',',lastName);
// //String length
// //val = val.length;

// //string uppercase
// val = val.toUpperCase();
// val = val.toLowerCase();
// //val = val.indexOf('d');
// //substring
// //val = val.substring(0,5);
// //slice
// //val = val.slice(5);
// //string replace 
// val = '   ' +val.replace('sadik','talha')+ '          ';
// val = val.trim();
// val = hobies.split(',');
// //val = val[0];

// console.log(val);
// console.log(typeof val);
//Ders 16 Tepmlate Literals
// const fullName = 'Sena Turan';
// const city  =  'City';
// const yearOfBirth = 1999;

// let val;
// val = `my name is ${fullName}`;
// console.log(val);
//Ders 18 Arrays
// let names = ['çınar','asdfas','ada'];

// let years = [2017,1999,2011];
// let mix = ['asdf','fasdf',1986,null,undefined,['sinema','kitap']];
// //add item
// years.push(1984);
// years.unshift(1987);
// //remove item
// years.pop();
// years.shift(); 
// //index of
// let index = names.indexOf('ada');
// //reverse
// names.reverse();
// //sort
// years.sort();
// //concat
// let val  = years.concat(names);
// names.splice(2,0,'adsf');
// function over18(year){
//     let age = 2018 -year;
//     return age>=18
// }
// console.log(val);
// console.log(names);
// console.log(names.length);
// console.log(typeof names);
// console.log(years);
// console.log(mix);
// console.log(index);