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

// const a = 'In eiusmod incididunt sit do sunt veniam aute exercitation ad ea.';
// console.log(a.length);

// let a = `adsda
// sdasd
// fssfd
// dfsgsdg
// dgdsgs`;
// console.log(a);

// 
const sum = (a, b=1) => a + b;
console.log(sum(41,4));

