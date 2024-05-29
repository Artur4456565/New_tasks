// 1.Запросить у пользователя два числа и вывести их сумму, разность, произведение и частное:
// let num1 = prompt("Введите первое число:");
// let num2 = prompt("Введите второе число:");

// num1 = Number(num1);
// num2 = Number(num2);

// alert("Сумма: " + (num1 + num2));
// alert("Разность: " + (num1 - num2));
// alert("Произведение: " + num1 * num2);
// alert("Частное: " + num1 / num2);


//2
// function It(number) {
  
//   if (number % 2  === 0){
//     console.log(number + ' четное');

//   }else{
//     console.log(number + ' нечетное');

//   }
// }
// It(6);


//3.Программа "FizzBuzz":
// for (let i = 1; i <= 100; i++) {
//   let output = '';
//   if (i % 3 === 0) output += 'Fizz';
//   if (i % 5 === 0) output += 'Buzz';
//   console.log(output || i);
// }

//4.Функция для суммирования двух чисел:
// function sum(a, b) {
//   return a + b;
// }


//5
//Работа с объектами:
// Создайте объект user, содержащий поля name, age и address. address должен быть объектом, содержащим поля city и country
// Напишите функцию, которая изменяет возраст в объекте myInfo
// Напишите функцию, которая добавляет новое поле "email" в объект myInfo.
// Напишите функцию, которая удаляет поле "country" из объекта address
// Напишите функцию, которая выводит всю информацию о пользователе в формате "Имя: {name}, Возраст: {age}, Город: {city}".
// let user = {
//     name:'Artur',
//     age:25,
//     address:{
//       city:'Brest',
//       country:'Belarus',
//     }
    
//   };
//   function changeAge(newAge=30 ){
//     user.age=newAge;
//     console.log(user);
//   }
//   changeAge(50);
  
//   function addEmail(email){
//    user.email=email;
//   }
//   addEmail('anton@gmail.com');
  
//   function deleteCountry(){
//     delete user.address.country;
//   }
//   deleteCountry();
//   function displayUserInfo(){
//     console.log(`Имя: ${user.name}, Возраст: ${user.age}, Город: ${user.address.city}`);
//   }
//   displayUserInfo();
  
//   function addColorEays (coloreays){
//   user.coloreays=coloreays;
//   }
//   addColorEays('grey');
  
//   function find(){
//     if(user.age>30){
//       changeAge(60);
     
//     }else{
//      console.log('Возраст в объекте');
//     }
//   }
//   find();

  

// </input>// 7.Изменение заголовка страницы:
// window.onfocus = function() { document.title = "Hello"; };
// window.onblur = function() { document.title = "Come back!"; };


 //8.Исправление ошибки в функции:
// function greetWithError(name) {
//   return "Hello, " + name + "!";
// }
// console.log(greetWithError("Anton"));