// variables types : -

// var
// let 
// const

// var age = 30;
// console.log(age)

// let name = "naveen"
// console.log(name)

// const subject = "javascript"
// console.log(subject)


// var 

// var age = 30; -- declration and initiazalation
// var age;----declration

// age = 40;---redeclration and initialiazation

//  age = "fifty";--redeclration and reintiazalation

// console.log(age)

// let 

// let newAge = 60;

// let age;
//  age= 70;
//  age=890;
//  age="sixty"

// console.log(newAge)
// console.log(age)

// const num = 123


// console.log(num)



// printing statement 

// alert("its a correct answer")

// document.write("hello")

// confirm("hello is it ok")

// let name = prompt("enter your name")

// console.log(name)

// console method 

// let age = 50

// console.clear(age)

// datatypes 



// 1. primitive datatypes
// 1.number
// 2.string
// 3.boolean
// 4.null
// 5.undefind
// 2.non premitive datatypes
// 1. array
// 2.object
// 3.function 
// 4. date


// let age = {
//     html : "structure",
//     css : "style",
//     js : "functions",
//     react : "personality"
// }


// console.log(age)

// operators

// 1.arithmatic operators 
// 2.assignment operators 
// 3.relational or comparision operators 
// 4.logical operators 

// 1. Arithmatic operators 

// mathematical value 

// 1. addition +
// 2. subraction -
// 3.multiplication *
// 4. division /
// 5.modulus %
// 6.increment ++
// 7. decrement --

// let num = 20
// let num1 = num-- - num--



// console.log(num);

// let num = 15
// let num1 = num-- - num--

// console.log(num1);

// Assignment operator

// let age = 30;
// age = age + 20;

// console.log(age)

// let age1 = 30
// age1 += 20

// console.log(age1)

// let age1 = 20
// age1 = 40
// let additionalValue = 100
// age1 += additionalValue 
// console.log(age1)

// Relational operators

// console.log(5 < 2); // false
// console.log(5>2);
// console.log(5<=2);
// console.log(5>=2);
// console.log(5==2);
// console.log(5=="5");
// console.log(5===5);
// console.log(5==="5")
// console.log(5!=2)
// console.log(5!=5)
// console.log(5!=="5")

// Logical operator 

// and &
// or |
// not !

// && and true true = true
// || or true false = true
// ! not false = true

// let age = 18;
// console.log(!(age>18 || age<=3))

// concatination

// let str1 ="hinata"
// let str2 ="naruto"

// console.log("anime favourite "+str1+" hero:"+str2)
// console.log(`anime favourite ${str1} hero: ${str2}.`)

// let num = 5
// let first = 1 
// console.log(`${num}*${first}=${num*first}`)

// type conversation

// 1. implicit type conversation
// 2. explicit type conversation

// 1. implicit type conversation 

// let str = 45
// let num = "100"

// console.log(typeof(str+num))

// console.log(typeof("hi"+2))

// number:

// console.log(typeof(100+{}))

// boolean:

// console.log(true+10)
// console.log(typeof(true+10))
// console.log(true+[4])
// console.log(typeof(true+NaN))


// Explicit conversation 

// console.log(Boolean(-10))

// flow control 

// 1. conditional statement 
// 2. looping statement 


// 1. conditional statement 

// 1. if statement 

// let num = 10

// if(num<10){
//     console.log(`number is ${num}`)
// }

// 2. if else statement 

// let number = 18;

// if(number<=17){
//  console.log(`vote age is eligible.`)
// }else{
//     console.log(`vote age is not eligible.`)
// }

// if else, else if statement 

// let hour = 2;

// if(hour>=1 && hour <= 6){
//     console.log("early morning!!!")
// } else if (hour>=7 && hour<=12){
//     console.log("afternoon")
// }else{
//     console.log(`not valid`)
// }

// switch statement 

// switch(){
//     case value : statement;
//     break;
//     case value : statemnt;
//     break;
// }


// let trafficLight = "green"

// switch(trafficLight){
//     case "red" : console.log("stop");break;
//     case "yellow" : console.log("start"); break;
//     case "green" : console.log("go"); break;
// }

// ternary operator 

// condition ? "statement" : "statement"

// null, 0, NaN, undefind--false

// String, number,array,object -- true

// let web = Number("")

// web ? console.log("allow the site") : console.log("dont allow")

// nested If statement 

// let age = 18;
// let height = 140;
// let weight = 50;

// if(age>=18){

//     if(height>=150){

//         if(weight>=50){

//             console.log("you are the eligible")
//         }else{
//             console.log("not eligible for weight")
//         }
//     }else{
//         console.log("height is not enough")
//     }
// }else{
//     console.log("not enough for age")
// }


// looping statement 

// 1. for loop
// 2.while loop
// 3. Do while loop
// 4. for of loop
// 5. for in loop

// for loop /

// for (intializaton;condition ; iteration){    
// }

// for(let i=1;i<=100;i++){
//     console.log(i+1)
// }

// while loop / 

// initilization;
// while(condition){
//     statement;
//     iteration;
// }

// let val =10;  10


// while(val>=11){  10>=11
//     console.log(val); 
//     val--  
// }



// Do while 

// let num = 2;
// do{
//     console.log(num);num++  
// }
// while(num<=20) 


// for (let i=0; i<=10;i++){
//     if(i%2==0){
//         if(i===10){
//             continue;
//         }
//         console.log(i);
//     }
// }


// let num = "javascript" ;
// for (let navi of num){
//     console.log(navi)
// }


// console.log(10+Number("10"))

// console.log(typeof(Boolean("10")))

// if(true){
//     console.log("print")
// }else if(false){
//     console.log("else")
// }else{
//     console.log("i am the orginal else")
// }


// let num = 1;

// switch(num){
//     case 1 : console.log("first"); break;
//     case 10 : console.log("ten");break;
// }


// teranary operator 

// let number = 10==="10"

// number ? console.log ("loosy type equal convey pass only value") : console.log("strictly type equal both check for value and type")

// let collegeTime = 10
// let classHours = 11

// if(collegeTime<=9){
//     if(classHours<=10){
//         console.log("get attenance")
//     }else{
//         console.log("late for classHours")
//     }
// }else{
//     console.log("late for college time")
// }

// for(initiazilation ; condition ;  iteration){

// }

// for (num=5;num<=8;num++ ){
//     console.log(num*2)
// }

// while loop 

// intialization
// while(){
//     statement
//     iteration
// }

// let a = 10; 
// while(a<=10){
// console.log(a)
// a--
// }
// let age = 22
// do{
//     console.log(age); age++
// }
// while(age<=2);

// for of - string , Array
// for in - Object

// let name = ["naveen","praveen","kumerasan","mathika"];

// console.log(name["1"])



// Function types :-

// 1. Named Function 
// 2. Anonymous Function
// 3. Arrow Function


// 1.Named function 

// function hello(parameter){
//  console.log("hello")
// }

// hello()

// 2. Anonymous Function 

// var hi = function(){
//     console.log("hello world")
// }

// hi();

// 3.Arrow function 

// const world = () => {
//     console.log("abc")
// }

// world()


// parameter 

// function add(a){
//     return (`My name is : ${a}`)
// }

// var a = add("john")
// console.log(a)

// let abc = function(age){
//     return(`My Age is : ${age}`)
// }

// const b = abc(20)
// console.log(b)

// let def = (qualification) => {
//   return(`My Qualification : ${qualification}`)
// }

// const c = def("B.Tech")
// console.log(c)


// let firstName = "john"
// const arrow = (Name) => {
//   return Name;
// }
// let finalOutput = arrow(firstName)
// console.log(finalOutput)


// higher order function & call back function 

// function function1(){
//     console.log("I am a Higher Order function")
// }
// function function2(){
//     console.log("I am a callback function")
// }

// function1(function2())


// function add(callback, a, b) {
//     console.log(a + b);
//     callback(20, 40);
// }

// function sub(num1, num2) {
//     console.log(num1 - num2);
// }

// add(sub, 20, 40);


// Hoisting 

// varible declration

// console.log(a)
// var a = 10
// console.log(a)

// console.log(b)
// let b =20
// console.log(b)


// console.log(c)
// const c =20
// console.log(c)

// console.log(a)
// var a = 10


// function same(){
//     console.log("i am a named function")
// }

// same()

// const sample1 = function(){
//     console.log("I am a annoynmous function")
// }
// sample1()

// var sample2 = () => {
//     console.log("I am a arrow function")
// }
// sample2()

// unCurrying 

// function add(a,b,c){
//     console.log(a+b+c)
// }

// add(1,2,3)

// currying 

// function num(a){
//     return function(b){
//         return function(c){
//             console.log(a+b+c)
//         }
//     }
// }

// num(1)(2)(3);




// self invoking function /

// (function(){
//     console.log("access")
// })()


// (function(uName,uAge){
//     console.log("access", uName+uAge)
// })("ben",10)

// Generator Function

// function*gFunction(){

//     yield "first Value"
//     yield "2 Value"
//     yield "3 Value"
//     yield "4 Value"
//     yield "5 Value"
// }

// let generator = gFunction ()

// console.log(generator.next().value)
// console.log(generator.next().value)
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())

// Array - multiple value store.
// 1. literal
// let iceCream = ['chocolate','butter Scotch','vennila']

// console.log(iceCream[iceCream.length-1])

// 1. string,numbers,Boolean,null,undefined,{}

// let same = [1,"hi",true,undefined,null,{id:1}]

// console.log(same[same.length-1])


// 2.constructor

// let newArray = new Array();

// newArray[0] = "1";
// newArray[1] = "2";
// newArray[2] = "3";
// newArray[3] = "4";

// console.log(newArray)

// let denseArray = [1,2,3,4]

// formula = baseAddress + (index*size)

// console.log(denseArray)
// console.log(1004+(0*3))= 0.1

// let sparseArray = [1,2,,4,,6]
// console.log(sparseArray)

// object 

// let vehicle = {
//     vType : "four wheeler",
//     price : 2000000,
//     fuelType : "petrol",
//     isItEV : false,
//     seatType : ["two seat","four seat", "six seat"],
//     availble : function(car){
//         console.log("availble in india: "+car)
//     },
// }

// console.log(vehicle.availble("tesla"));


// let vehicle = {
//     "vType" : "four wheeler",
//     "price car" : 2000,
//     fuelType : "petrol",
//     "seater type" : ["2","4","6"]
// }

// console.log(vehicle["seater type"][1])


// const uName = "ben"
// let Age = 10

// let person1 = {
//     uName : uName,
//     age : Age
// }

// console.log(person1.age)


// function all(a=10,b="john"){
//     console.log(a+" "+b)
// }
// all(2,"ben")

// let employee = "employee Id";
// let person2 = {
//     uName,
//     Age,
//     [employee] : "IF123",
//     employee : "if567"
// }

// console.log(person2);

// iteration - some set of instruction repeatable use .

// String - for of loop
// Array - for of loop
// Object - for in loop
// function - for of loop


// let arr = [10,20,30,40]
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);   
// }

// let str = "javascript"
// for(let i=0;i<str.length;i++){
//     console.log(str[i])
// }

// let arr1 = [10,100,200,300]

// for(let array of arr1){
//     console.log(array);   
// }

// let str1 = "web development"
// for(let string of str1){
//     console.log(string);
    
// }

// for (let arrayy in arr1){
//     console.log(arrayy)
// }

// function*genFun(){
//     yield "one"
//     yield "two"
//     yield "three"
// }

// let iteration = genFun();
// for(let func of iteration){
//     console.log(func)
// }

// for in loop 

// let person1 = {
//     uName : "kumerasan",
//     hobbies : ["cricket","volley ball","foot Ball"],
//     familyDetials : {
//         totalMem : 5,
//         siblings : ["a","b"]
//     },
//     walk(){
//         console.log("I am Going to Home")
//     }
// }

// for (let obj in person1){
//     console.log(person1[obj])
//     console.log(person1.walk()); 
// }


// es6 edition 

// spread operator & rest operator

// spread operator 

// array-[...]
// object - {...}

// *two arr, or object merge and clone.

// rest operator 

// *function muliple argument store 

// function - (...)

// spread operator 

// array 

// let hobbies = ["cricket","vollyball","Art"]
// let hobbies1 = ["reading","coding"]
// let hobbies2 = ["writing","teachinng"]


// let newArr = [...hobbies,...hobbies1,...hobbies2]
// let newArr1 = [...newArr,"video Editing","singing"]

// console.log(newArr1);

// object 

// let employeeDetials = {
//     empId : "id213",
//     empName : "kumerasan",
//     employeeRole : "frontend developer"
// }

// let team2 = {...employeeDetials,empName:"mathika"}
// let team3 = {...employeeDetials,empName:"kumerasan"}
// console.log(team3);

// rest operator 

// function rest(a,b,...arr){
//     console.log(arr);
//     console.log(arr+" ."+a+" "+b);
    
    
// }

// rest(1,2,3,4,5)


// de-structuring


// let arr = [10,20,30,40]

// let newVal = arr[0]

// console.log(newVal)


// let [a,,,d] = arr

// console.log(a,d)

// let arr1 = [1,2,3,4,5,6,8,9,5,5,54,3,]

// let[a1,a2,a3,...a4] = arr1

// console.log(a1,a2,a3,a4);


// let arr2 = [1,2,3,4,[10,20,30,[400,500]]];

// let[a1,a2,a3,a4,[a5,a6,a7,[a8,a9]]] = arr2

// console.log(a1,a2,a3,a4,a5,a6,a7,a8,a9)


// array manipulation 

// 1.push - last add,
// 2.pop - last remove,
// 3.unshift - first add,
// 4.shift - first remove,
// 5.splice - start index , remove , adding

// let arr =[100,200,300,400]
// arr.splice(1,1,10,20,40)
// console.log(arr)


// array merge method

// 1.concat
// 2.slice
// 3.flat 
// 4.fill


// 1.concat 
// let arr = [1,2,3,4]


// let newArr = arr.concat(5,6)

// console.log(newArr);
// 2.slice 
// let arr1= [10,20,30,40,60,70,70,50]

// let sliceVal = arr1.slice(3,7)

// console.log(sliceVal)

// 3.flat /
// let arr2 = [1,[2,3,[4,[5,6]]]]

// let flatVal = arr2.flat(Infinity)

// console.log(flatVal)

// 4. fill 

// let arr4 = [10,20,30,40]

// arr4.fill(101,0,2)

// console.log(arr4);



// acending order -- sort
//  --- reverse 

// let arr5 = [1,2,3,7,9,4,6]

// arr5.reverse()

// console.log(arr5)


// includes

// let arr6 = [10,20,30,40]


// console.log(arr6.includes(90))


// function findVowels(alph){
//     let vowels = "aeiouAEIOU"
//     let count = 0 
//     for(let i = 0;i<alph.length;i++){
//         if(vowels.includes(alph[i])){
//             count++
//         }
//     }
//     return count   
// }

// let a = findVowels("bentenition")
// console.log(a)



// convert to string 

// let arr7 = [1,2,3,4,5]

// let joinVal = arr7.join(0)

// console.log(joinVal)

// let arr8 = [10,20,30,40]

// let strVal = arr8.toString()

// console.log(strVal)


// find index 


// 1.indexOf 
// 2.lastIndexOf 

// let arr9 = [10,20,30,40,50,20]

// let findIn = arr9.indexOf(20,2)

// console.log(findIn)

// let arr10 = [10,20,30,20,10]

// let lastIn = arr10.lastIndexOf(20,2)

// console.log(lastIn)











// higher order method 

// for use in UI display 

// forEach 
// Map

// forEach 


// fruit.forEach(printFruit)

// function printFruit(cEle,index,totalArray){
    //   console.log(totalArray);
    // }
    
    
    
    // map 
    // fruit.map(function (cEle,index,total){
    //     console.log(total);
        
    // })
        
    // difference forEach vs map 
    
    // for each 
// let fruit = ["apple","orange","banana","guava"]
// let newArr = fruit.forEach((cEle)=>{
//     return cEle
// })

// console.log(newArr);

// Map 

// let newArr1 = fruit.map((cEle)=>{
// return cEle
// })

// console.log(newArr1);


// map example :-

// let fruit1 = ["apple","guava","banana","cherry"]

// let shop = fruit1.map(cEle=>cEle.toUpperCase()).sort()

// console.log(shop);







// higher order array method 

// 1.filter
// 2. find


// 1. filter - multiple value stored 

// let employees = [
//     {empName : "mathika", salary : 100000},
//     {empName : "kumerasan", salary : 150000},
//     {empName : "naveen", salary : 170000}, 
// ]

// let salaryDate = employees.filter(cEle => cEle.salary>=100000
//  )
// console.log(salaryDate);


// find 

// let finding = employees.find((val)=>{
//     return val.salary >= 100000
// })

// console.log(finding);




// higher order function 

// 1.sort
// 2.some
// 3.every

// 1.sort 

// let array = [10,5,100,30,6,2,true,false,"string",{}]

// let sorting = array.sort((a,b)=>{
//    return a-b
// })

// console.log(sorting);


// 2.some 

// let array1 = [2,2,2,2,1]

// let value = array1.some((ele,index,totalArray)=>{
//   return ele % 2 == 0
// })

// console.log(value);

// 2.every 

// let value1 = array1.every((ele,index,totalArray)=>{
//     return ele % 2 == 0
//   })

//   console.log(value1);
  



// reduce 



// let arr = [10,2,3,4,5,676]   


// let total = arr.reduce((acc,cele,index,totalArray)=>{
//     return acc + cele 
// },0)

// console.log(total);


// string 

// let str = " java-script "

// console.log(str.charAt(9));
// console.log(str.charCodeAt(5));
// console.log(str.includes("j"));
// console.log(str.indexOf("a",2));
// console.log(str.lastIndexOf("a",10));
// console.log(str.repeat(1));
// console.log(str.replace("javascraiapt","python"));
// console.log(str.split("a"));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.trimEnd());


// console.log(Math.abs(-50));
// console.log(Math.sign(0));
// console.log(Math.sqrt(25));
// console.log(Math.cbrt(8));
// console.log(Math.pow(3,3));

// let min = [1,4,67,8]
// console.log(Math.max(...min));

// let new1 = Math.random()
// console.log(new1);



// let randomNum = Math.random()*10

// let num = randomNum.toFixed(2)

// console.log(Math.ceil(2.1));
// console.log(Math.floor(2.9));
// console.log(Math.round(3.3));






// console.log(Math.trunc(9.3675578));





// date object 

// let date = new Date


// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());


// date.setFullYear(2022,5,24)
// console.log(date);
// date.setHours(2,2)
// console.log(date);

// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());


// var a = document.firstElementChild.lastElementChild.firstElementChild.firstElementChild
// console.log(a.textContent);

// var b = document.querySelector(".second")
// console.log(b.textContent);

// var c = document.querySelector("#theird")
// console.log(c.textContent);

// var d = document.getElementById("first")

// console.log(d.textContent);


// var a = document.getElementById("one")

// a.textContent="hi world"

// var b = document.querySelector(".second")

// b.textContent="JAVASCRIPT"


// var one = document.getElementById("one")

// function change(){
//     one.textContent="hello country"
// }


// var box1 = document.getElementById("num1")
// var box2 = document.getElementById("num2")
// var result = document.getElementById("result")

// function resultFunction(){
//      var box1Value = Number(box1.value)
//      var box2Value = Number(box2.value)

//      var total = box1Value * box2Value

//     result.textContent = total
// }


// var guessNumber = document.getElementById("guessNumber")
// var result = document.getElementById("result")
// var life = document.getElementById("life")
// var randomGuess  = document.getElementById("randomGuess")
// var totalLife = 10


// alert("welcome to number show")
// function check(){
//     var randomNumber = Math.floor(Math.random()*10)+1
//     var enterNumber = Number(guessNumber.value)
//     randomGuess.textContent = "randomGuess :-" + randomNumber
//     if(randomNumber===enterNumber){
//         result.textContent = "right"
//         alert("you win")
//     }else{
//         result.textContent = "wrong"
//         totalLife = totalLife - 1
//         life.textContent = "life = "+ totalLife

//         if(totalLife == 0){
//             location.reload()
//         }
//     }
    

// }


// var box = document.querySelector(".box")

// function color(){
//     // box.style.backgroundColor = "red"
//     // box.style.color = "white"

//     box.setAttribute("class","width")
// }

// var one = document.getElementById("one")
// var typing = document.getElementById("typing")

// function press(){
//     typing.textContent = one.value
// }

// var button = document.getElementById("button")

// function color(){
//     button.style.backgroundColor = "red"
// }

// var key = document.getElementById("key")

// function update(event){
//   key.textContent=event.target.textContent
   
// }


// function del(event){
//     event.target.remove()
// }

// var result1 = document.getElementById("result1")

// function add(){
//     var list = document.createElement("h1")
//     list.textContent = "hello"
//     result1.append(list)
// }

var input = document.getElementById("three")
var valuee = document.getElementById("valuee")

function add(){
    console.log(valuee.textContent);
   

    var list = document.createElement("h1")
    list.textContent = input.value

    valuee.append(list)
    
}