//.....AS # 21
type mytype={
    name :string
    class:string
    age:number
}
let studentName :mytype ={
    name:"Osama hassan",
    class:"sunday 2 to 5 pm",
    age:20
}
console.log(studentName)

// ......AS # 22
let daysName:string[]=["monday","tuesday","wednesday","thursday"]
console.log(daysName[5])
console.log(daysName[2])

//............AS # 23
let car = "toyota"
console.log(car == "toyota")

let temp1:number = 40
let temp2:number =45
//test 1
console.log("temp1 is equal to 40?")
console.log(temp1 == 40)
//test 2
console.log("temp2 is equal to 45?")
console.log(temp2 == 45)
//test 3
console.log("temp1 is not equal to 45? ")
console.log(temp1 != 45)
//test 4 
console.log("temp2 is not equal to 40?")
console.log(temp2 != 40)
//test 5 
console.log("temp2 is greater than temp1?")
console.log(temp2 > temp1)
//test 6
console.log("temp2 is smaller than temp1?")
console.log(temp2 < temp1)
//test 7 
console.log("temp1 is equal to temp2 ?")
console.log(temp1 == temp2)
//test 8
console.log("temp1 is greater than temp2?")
console.log(temp1 > temp2)
//test 9 
console.log("40 is equal to temp2?")
console.log(40 == temp2)
//test 10 
console.log("45 is equal to temp1?")
console.log(45 == temp1)

//.......AS # 24
//string test
let firstName : string= "osama"
let lastName : string ="hassan"

//test 1
console.log("firstname is equal to 'osama'")
console.log(firstName === "osama")

console.log("firstname is eq to second name ")
console.log(firstName === lastName)
//test 2
console.log("is firstname eq to osama? ")
console.log(`${firstName}`.toLocaleLowerCase() === "osama")

console.log("is firstname eq to Osama? ")
console.log(`${firstName}`.toLocaleLowerCase() === "Osama")

//numerical test
let num1 :number = 10
let num2 :number = 15
//test 1
console.log("num1 eq to 10?")
console.log(num1 === 10)

console.log("num1 eq to num2?")
console.log(num1 === num2)
//test 2
console.log("num1 is greater than num2?")
console.log(num1 < num2)

console.log("num2 is less than num1")
console.log(num2 < num1 )
//test 3
console.log("num2 is less than or eq to 15?")
console.log(num2 <= 15)

console.log("num1 is greater than or equal to 15")
console.log(num2 >= 15)

//boolean test
let bool1 :boolean = true
let bool2:boolean = false
console.log("bool1 is true and bool2 is false?")
console.log(bool1 && bool2)

console.log("bool1 is true or bool2 to is false ?")
console.log(bool1 || bool2)
//array test
let array:number[] =[10,20,30,40]

console.log("is 20 in an array?")
console.log(array.includes(20))

console.log("is 50 in an array?")
console.log(array.includes(50))

//.....AS # 25
// Version that passes:
let alien_color = "green";
if (alien_color == "green") {
  console.log("You just earned 5 points!");
}

// Version that fails (no output):
alien_color = "red";
if (alien_color == "green") {
    console.log("no input")// No output because the condition is false
}
//......AS # 26

// Version that runs the if block:
alien_color = "green";
if (alien_color == "green") {
  console.log("You just earned 5 points for shooting the  green alien");
} else {
  console.log("You just earned 10 points");
}

// Version that runs the else block:
alien_color = "yellow";
if (alien_color == "green") {
  console.log("You just earned 5 points for shooting the alien!");
} else {
  console.log("You just earned 10 points!");
}

//....AS # 27

// Green alien version:
alien_color = "green";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

// Yellow alien version:
alien_color = "yellow";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

// Red alien version:
alien_color = "red";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

//............AS # 28
let age: number = 19;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age < 4) {
  console.log("The person is a toddler.");
} else if (age < 13) {
  console.log("The person is a kid.");
} else if (age < 20) {
  console.log("The person is a teenager.");
} else if (age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

//.......AS # 29
let favorite_fruits: string[] = ["apples", "bananas", "mangoes"];

if (favorite_fruits.includes("bananas")) {
  console.log("i really like bananas!");
}
if (favorite_fruits.includes("apples")) {
  console.log("i really like apples!");
}
if (favorite_fruits.includes("cherries")){
  console.log("i really like cherries")
}

//.....AS # 30 
let usernames: string[] = ["osama", "ahsan", "hassan", "taha"];

usernames.forEach((username) => {
  if (username == "osama") {
    console.log(`"Hello ${username}, would you like to see a status report?"`);
  } else {
    console.log(`Hello ${username}, thank you for loggin in again.`);
 }});