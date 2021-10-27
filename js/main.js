// function showTime(speed, distance){
//     let time = speed / distance;
//     return time;
// }
// let myTime = showTime(200, 12);
// console.log(myTime);

// let i = 12;
// function myBuget(money, rasxod, pribil){
//     let buget = money - rasxod + pribil;
//     return buget;
// }
// myBuget(100, 12, 2);
// if (i>myBuget){
//     console.log("fdkf");
// }else{
//     console.log("dsd");
// }

// let safeToProceed = false;
//  if (safeToProceed) {
//  alert("You shall pass!");
//  } else {
//  alert("You shall not pass!");
//  }
// var color = prompt("Введите цвет", color);
// switch (color) {
//   case "green":
//     alert("green color");
//     break;
//   case "black":
//     alert("black color");
//     break;
//   default:
//     alert("no color");
//     break;
// }
/*
for(let i = 0; i < 10;i++){
  saySomething();
}
function saySomething(){
  document.writeln('sadasdasd');
}*/
// function dontSleep(){
//   alert('вы еще сдесь ?');
// }
// let timeID = setTimeout(dontSleep, 10000);
// function youSayGoodBye() {
//   alert("Good Bye!");
//   function andISayHello() {
//   alert("Hello!");
//   }
//   return andISayHello;
//  }
//  let something = youSayGoodBye();
//  something();
// function stopWatch() {
//   var startTime = Date.now();

//   function getDelay() {
//   var elapsedTime = Date.now() - startTime;
//   alert(elapsedTime);
//   }
//   return getDelay;
//   }
//   let timer = stopWatch();
//   // Сделать что-нибудь за некоторое время.
//   for (let i = 0; i < 1000000; i++) {
//   let foo = Math.random() * 10000;
//   }
//   // Вызвать возвращаемую функцию.
//   timer();
// let good = ["Mario", "Luigi", "Kirby", "Yoshi"];
// let bad = ["Bowser", "Koopa Troopa", "Goomba"];
// let goodAndBad = good.concat(bad);
// console.log(goodAndBad);

// 
// 
// let numbers =[1,2,3,4,5,6,7,8,9,10,11,12,];
// let total = numbers.reduce(function(total, current) {
//   return total + current;
//  }, 0);
//  console.log(total);
// const number = "24";
// console.log(+number + 23);

// let str = "abcde";
// console.log (str[0]);
// console.log(str[1]);
// console.log(str[4]);
//  let num = 123;
//  alert (num);
//  let a =10;
//  alert (a);
//  a = 20;
//  alert(a);

// let num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num++;
// num--;
// alert(num);

// const c = 10;
// const d = 5;
//  let  a = c +d;
//  let result = a;
//  console.log(a);

// const a = 1;
// const b = 2;
// const c = 3;
// let sum = a+b+c;
// console.log(sum)

// const a =10;
// const b = 5;
// let c = a - b ;
// let d = 7;
// let result = d + c;
// console.log(result);

// const a = 1.5;
// const b = 0.75;
// console.log(a + b);


// let a = 100;
// console.log(-a);
//  console.log( 2 ** 10 );

// let str = '!!!';
// console.log(str);
// const a = 'hello';
// const b = 'world';
// console.log(a +' '+ b);

// const a = 'In eiusmod incididunt sit do sunt veniam';
// console.log(a.length);

// let a = `adsda
// sdasd
// fssfd
// dfsgsdg
// dgdsgs`;
// console.log(a);

// 
// const sum = (a, b=1) => a + b;
// console.log(sum(41,4));
// let a = '5' * '1' + '2' * '1';
// console.log(a);
// console.log(typeof(a));

// let a = '10';
// let b = '20';
// console.log(+a + +b);
// let a = +'2';
// let b = +'3';
// console.log(a + b);
//  const a = '5px';
//  const b = '6px';
//  console.log(parseInt(a)+parseInt(b)+"px");

//  const d = '5.5px';
//  const c = '6.25px';
//  console.log(parseFloat(a)+parseFloat(b)+"px");

//  let num1 = 13;
//  let num2 = 10;
//  console.log(String(num1)+String(num2));

//  const num3 = 121313;
//  let q = String(num3);
//  console.log(q.length);

//  const num4 = 123;
//  const num5 = 123123;
//  let v = String(num4);
//  let n = String(num5);
//  let y = v.length;
//  let u = n.length;
//  console.log(y+u);

// let test = Boolean(3 *);
// console.log(test);

// let str = "adcde";
// console.log(str[0], str[2], str[4]);
// let a = str[4];
// let b = str[3];
// let c = str[2];
// let d = str[1];
// let e = str[0];
// console.log(a +b+c+d+e);
// const num = 3;
// console.log(str[num]);

// const srt12 ='hdfskhf';
// let posl = srt12.length-1;
// let posl1 = srt12[posl];
// let predposl = srt12.length-2;
// let predposl1 = srt12[predposl];
// let predpredposl = srt12.length-3;
// let predpredposl1 = srt12[predpredposl];
// console.log(posl1, predposl1, predpredposl1);
// const str ='12345';
// console.log(+str[0]+ +str[1]+ +str[2]+ +str[3]+ +str[4]);

// const num = 12345;
// let str = String(num);
// let a = str[0];
// let b = str[1];
// let c = str[2];
// let d = str[3];
// let e = str[4];
// console.log(+a + +b + +c + +d + +e);
// console.log(a*b*c*d*e);
// console.log(e + d +c +b +a);
// let num = 1;
// num = num + 2;
// num = num + 3;
// console.log(num);
// let num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// console.log(num);

//  function sayHello(name, age , city){
//    return `Say hello! ${name} 'asdad' ${age}, "sdkqwodkoaskd", ${city}`;
//  }
//  const hiAnton = sayHello("Антон","24","Ierusalim");
//  console.log(hiAnton);

// const calculator = {
//    plus: function(a,b){
//      return a + b;
//    },
//    minus : function (a ,b){
//     return a - b;
//    },
//    multiply : function(a,b){
//      return a*b;
//    },
//    divide : function(a,b){
//      return a/b;
//    }
// };
// console.log (calculator.plus(10, 7));

// const title = document.querySelector(".title");
// function resizeHandler(event){
//   console.log(event);
// }
// window.addEventListener("resize",resizeHandler);

// let n = 5;
// let k = 15;
// const r = (k/n);
// let g = k%n;
// let j = n - g;

// console.log(r, g, j);

//события
// const title = document.querySelector(".title");
// function clickHandler(){
//   title.style.color= "green";
// }
// title.addEventListener("click",clickHandler); 
//if, else, and, or
// if (20 >5 || '12'=== 12){
//   console.log('yes')
// }else{
//   console.log('no')
// }
// let a = prompt("Вам есть 18 лет ?");
// if(a == 'yes'){
//   alert('Вы можете покупать алкоголь.')
// }else{
//   alert('Вам нельзя покупать алкоголь!')
// }
// const h2 = document.querySelector(".h2");
// const clicked = 'clicked';


// function clickHandler(){
//   h2.classList.toggle(clicked);
// }

// function init(){
//   h2.addEventListener("click",clickHandler);
// }
// init();

//Массивы
//1
// let mass = ['a','b','c']
// console.log(mass[0])
// console.log(mass[1])
// console.log(mass[2])
// let mass = ['a','b','c', 'd']
// console.log(mass[0],'+',mass[1],'+',mass[2],'+',mass[3])
// let mass = [1,2,3]
// console.log(mass[0]+mass[1]+mass[2])
// const mass = [2,5,3,9]
// const a = mass[0]*mass[1]
// const b = mass[2] * mass[3]
// const result = a + b;
// console.log(result);
//2
// const mass = [1,2,3,42,2,'ad',null]
// console.log(mass.length)
// console.log(mass[mass.length-1])
// let arr = ["a",'b',"c"]
// arr[0] = 1;
// arr[1]= 2;
// arr[2] = 3;
// console.log(arr)
//3
// const arr =[1, 2 ,3]
// arr[0]+=3;
// arr[1]+=3;
// arr[2]+=3;
// console.log(arr)
// const arr =[1, 2 ,3]
// arr[0]++
// ++arr[1]
// arr[2]++
// console.log(arr)
//4
// const arr =[]
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// console.log(arr)
// const arr = [1, 2, 3]
// arr[3] =4;
// arr[4] =5;
// // console.log(arr)
// let arr = [];

// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length)
//Объекты
//1
// let obj = {1: 'value1', 2: 'value2', 3: 'value3'};

// console.log(obj[1]); // выведет 'value1'
// console.log(obj[2]); // выведет 'value2'
// console.log(obj[3]); // выведет 'value3'
// function textareaCurLineNum(obj)
// {
//  var rowHeight = obj.clientHeight/obj.rows;
//  var curHeight = obj.createTextRange().boundingHeight;

//  return parseInt(curHeight/rowHeight)+(obj.value!=''?1:0);
// }

// function cleanForm() {
// 	document.getElementById('cs').value = textareaCurLineNum(document.getElementById('ta'));
// 	setTimeout("cleanForm();", 500);
// }

// cleanForm();
// let obj = {1:"a", 2: 'b', 3: 'c'};
// console.log(obj[1])
// console.log(obj[2])
// console.log(obj[3])
//2
// const obj = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// console.log(obj["a"] + obj["b"] + obj["c"]);
//3
// const obj = {
//   "1a" : 1,
//   b2 : 2,
//   "c-c" : 3,
// }
// console.log(obj["1a"] + obj["b2"] + obj["c-c"])
//4
// let obj = {key1: 1, key2: 2, key3: 3};
// console.log(obj.key1 + obj.key2 + obj.key3);
//5
// const user ={
//   name : "Pavel",
//   surname : "Grigoriev",
//   patronymic : "Makarov",
// }
// console.log(user.name +' '+  user.surname +" "+ user.patronymic)
//6
// const date = {
//   year: 2021,
//   month: 10,
//   day: 27,
// }
// console.log(date.day +'-'+ date.month + '-'+ date.year)
//7
// let obj = {};

// obj['key1'] = 'a';
// obj['key2'] = 'b';
// obj['key3'] = 'c';

// console.log(obj); // выведет {key1: 'a', key2: 'b', key3: 'c'}