//......AS # 11

let friendsName :string [] = ["osama","fawaz","ashad","ahmed"]
console.log(friendsName[0])
console.log(friendsName[1])
console.log(friendsName[2])
console.log(friendsName[3])

//....AS # 12

friendsName.forEach(name =>{
    console.log(`Dear${name}, have a nice day!`)
})

//.....AS # 13

let transportation :string[] = ["bike","aeroplane","bus","car","rikshaw"]
transportation.forEach(name => {
    console.log(`“I would like to own a ${name}.”`)
}
)

//......AS # 14

let guestList :string[] = ["ali","ahsan","taha","ashad"]
guestList.forEach(person =>{
    console.log(`Dear ${person},you are invited to dinner!`)
})
//.......AS # 15

//(PERSON WHO CANNOT ATTEND DINNER)
let canNotCome :string ="ali"
console.log(canNotCome + " "+ "can not come to dinner")
//( person who attend dinner)

let canCome :string ="khushal"
guestList[guestList.indexOf(canNotCome)]=canCome
//new guestlist
guestList.forEach(guest=>{
    console.log(`Hello ${guest},you are invited to dinner!`)
})

//...........AS # 16

guestList.forEach(guest =>{
    console.log(`Hi ${guest}, i found a bigger dinner table so i invited more guest.`)
}
)
//beggining
let guest1:string = "abdullah"
guestList.unshift(guest1)
console.log(guestList)
//middle
let guest2 :string ="hassan"
let index = guestList.length/2;
guestList.splice(index,0,guest2)
console.log(guestList)
//end
let guest3:string="tayyab"
guestList.push(guest3)
console.log(guestList)

//now print msg
guestList.forEach(guest=>{
    console.log(`Dear ${guest},you are invited for new dinner guest list.`)
})

//........AS # 17

console.log(guestList) 
//console.log("i have space only two guests")
//while(guestList.length>2)
{
    let removePerson=guestList.pop()
    console.log(`sorry ${removePerson},i can not invited you to dinner`)}
// now final msg those who invite
//guestList.forEach(guest=>{
    //console.log(`Dear ${guest}, you are still invited to dinner!`)})
//create empty list
//guestList.pop()
//guestList.pop()
console.log(guestList)

//........AS # 18
let places : string[] =["rafah","gazah","lahore","karachi"]
console.log(places)
//console.log(places.sort())
//console.log(places.reverse())
places.sort()
console.log(places)
places.reverse()
console.log(places)

//.......AS # 19
//print a msg indicating no of people are inviting in dinner
console.log(guestList.length+ " " + "guest are invited for dinner.") 

//...........AS # 20
let mountain:string[]=["k2","mount everest","mount elbrus","mount denali"]
mountain.forEach(mount=>{
    console.log(mount)
})