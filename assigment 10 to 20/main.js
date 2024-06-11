//......AS # 11
var friendsName = ["osama", "fawaz", "ashad", "ahmed"];
console.log(friendsName[0]);
console.log(friendsName[1]);
console.log(friendsName[2]);
console.log(friendsName[3]);
//....AS # 12
friendsName.forEach(function (name) {
    console.log("Dear".concat(name, ", have a nice day!"));
});
//.....AS # 13
var transportation = ["bike", "aeroplane", "bus", "car", "rikshaw"];
transportation.forEach(function (name) {
    console.log("\u201CI would like to own a ".concat(name, ".\u201D"));
});
//......AS # 14
var guestList = ["ali", "ahsan", "taha", "ashad"];
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",you are invited to dinner!"));
});
//.......AS # 15
//(PERSON WHO CANNOT ATTEND DINNER)
var canNotCome = "ali";
console.log(canNotCome + " " + "can not come to dinner");
//( person who attend dinner)
var canCome = "khushal";
guestList[guestList.indexOf(canNotCome)] = canCome;
//new guestlist
guestList.forEach(function (guest) {
    console.log("Hello ".concat(guest, ",you are invited to dinner!"));
});
//...........AS # 16
guestList.forEach(function (guest) {
    console.log("Hi ".concat(guest, ", i found a bigger dinner table so i invited more guest."));
});
//beggining
var guest1 = "abdullah";
guestList.unshift(guest1);
console.log(guestList);
//middle
var guest2 = "hassan";
var index = guestList.length / 2;
guestList.splice(index, 0, guest2);
console.log(guestList);
//end
var guest3 = "tayyab";
guestList.push(guest3);
console.log(guestList);
//now print msg
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you are invited for new dinner guest list."));
});
//........AS # 17
console.log(guestList);
//console.log("i have space only two guests")
//while(guestList.length>2)
{
    var removePerson = guestList.pop();
    console.log("sorry ".concat(removePerson, ",i can not invited you to dinner"));
}
// now final msg those who invite
//guestList.forEach(guest=>{
//console.log(`Dear ${guest}, you are still invited to dinner!`)})
//create empty list
//guestList.pop()
//guestList.pop()
console.log(guestList);
//........AS # 18
var places = ["rafah", "gazah", "lahore", "karachi"];
console.log(places);
//console.log(places.sort())
//console.log(places.reverse())
places.sort();
console.log(places);
places.reverse();
console.log(places);
//.......AS # 19
//print a msg indicating no of people are inviting in dinner
console.log(guestList.length + " " + "guest are invited for dinner.");
