//....AS # 1
//Install Node.js, TypeScript and VS Code on your computer.
//..... AS # 2
let personName = "osama";
console.log(`Hello ${personName}, would you like to learn some typescipt today?`);
//......AS # 3
console.log("lowercase:" + personName.toLowerCase());
console.log("uppercase:" + personName.toUpperCase());
let titleCase = personName[0].toUpperCase() + personName.slice(1).toLowerCase();
console.log("titlecase:" + titleCase);
//......AS # 4
let famousPerson = `Dr Abdul Qadeer khan once said,"Pakistan's nuclear program is a symbol of our national 
resolve and a guarantor of our national security."`;
console.log(famousPerson);
//.....AS # 5 
let famousPersonName = "Dr Abdul Qadeer khan";
let message = `${famousPersonName} once said ,"Pakistan's nuclear program is a symbol of our national
 resolve and a guarantor of our national security."`;
console.log(message);
export {};
