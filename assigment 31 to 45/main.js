var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//.........AS # 31
var userNames = ["osama", "hassan"];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    console.log("greet user");
}
// Removing all usernames ensures the message "We need to find some users!" is printed.
var user_names = [];
if (user_names.length === 0) {
    console.log("We need to find some users!");
}
else {
    console.log("greet user");
}
//.........AS # 32
var current_users = ["ali", "ahmed", "hassan", "osama", "ashad"];
var new_users = ["raziq", "hammad", "umer", "asad", "Ashad"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
//........AS # 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log("".concat(number).concat(suffix));
});
//....AS # 34
var pizzas = ["Chicken tikka", "fajita", "hawaiian"];
pizzas.forEach(function (pizza) {
    console.log("I like ".concat(pizza, " pizza."));
});
console.log("I really love pizza!");
//.......AS # 35
var animals = ["dog", "cat", "rabbit"];
animals.forEach(function (animal) {
    console.log("A ".concat(animal, " would make a great pet."));
});
console.log("Any of these animals would make a great pet!");
//..........AS # 36
function make_shirt(size, message) {
    //console.log(`Making a ${size} t-shirt with the message "${message}" printed on it`);
}
make_shirt("medium", "free palestine");
//.....AS # 37
function makeShirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "free palestine"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
makeShirt(); // Default large and message
makeShirt("medium"); // Default message, medium size
makeShirt("small", "all eyes on rafah"); // Custom message, small size
//........AS # 38
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");
//.......AS # 39
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
//.....AS # 40
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title, tracks: tracks };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
console.log(make_album("Asim azhar", "The First Album"));
console.log(make_album("Arigit singh", "The Second Album"));
console.log(make_album("Atif aslam", "The Third Album", 12));
//......AS # 41
var magicians = [" Bat man", " Iron man", " Spider man"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
show_magicians(magicians);
//.......AS # 42
function make_great(magicians) {
    return magicians.map(function (magicians) { return "the Great" + magicians; });
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
//......AS # 43
var great_magicians = make_great(__spreadArray([], magicians, true));
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(great_magicians); // Shows modified names
//.........AS # 44
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('Making a sandwich with:');
    items.forEach(function (item) { return console.log("-" + item); });
}
;
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
//...........AS # 45
function car_info(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (car[key] = value);
    });
    return car;
}
console.log(car_info("Toyota", "Carolla", ["color", "red"], ["year", 2020]));
console.log(car_info("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
