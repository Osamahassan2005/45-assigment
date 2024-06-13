//.........AS # 31
let userNames: string[] = ["osama","hassan"];

if(userNames.length === 0){
    console.log( "We need to find some users!");
    
} else {
    console.log("greet user")
}
// Removing all usernames ensures the message "We need to find some users!" is printed.
 let user_names: string[] = [];

if(user_names.length === 0){
    console.log( "We need to find some users!");
    
} else {
    console.log("greet user")
}

//.........AS # 32

let current_users: string[] = ["ali", "ahmed", "hassan", "osama","ashad"];
let new_users: string[] = ["raziq", "hammad", "umer", "asad", "Ashad"];

new_users.forEach((newUser) => {
  if (
    current_users.some(
      (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )
  ) {
    console.log(`${newUser} will need to enter a new username.`);
  } else {
    console.log(`${newUser} is available.`);}
});

//........AS # 33

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((number) => {
  let suffix = "th";
  if (number === 1) {
    suffix = "st";
  } else if (number === 2) {
    suffix = "nd";
  } else if (number === 3) {
    suffix = "rd";
  }
  console.log(`${number}${suffix}`);
});

//....AS # 34

let pizzas: string[] = ["Chicken tikka", "fajita", "hawaiian"];

pizzas.forEach(pizza => {
console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");

//.......AS # 35

let animals: string[] = ["dog", "cat", "rabbit"];

animals.forEach((animal) => {
  console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");

//..........AS # 36

function make_shirt(size: string , message: string ) {
    //console.log(`Making a ${size} t-shirt with the message "${message}" printed on it`);
}
make_shirt("medium","free palestine");

//.....AS # 37
  
function makeShirt(size: string = "large", message: string = "free palestine") {
      console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
      }
      
      makeShirt(); // Default large and message
      makeShirt("medium"); // Default message, medium size
      makeShirt("small", "all eyes on rafah"); // Custom message, small size

//........AS # 38

function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo","Japan");

//.......AS # 39

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  console.log(city_country("Lahore", "Pakistan"));
  console.log(city_country("Tokyo", "Japan"));
  console.log(city_country("Paris","France"));

  //.....AS # 40

function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title , tracks };
    if (tracks) {
      album.tracks = tracks;
    }
    return album;
  }
  
  console.log(make_album("Asim azhar", "The First Album"));
  console.log(make_album("Arigit singh", "The Second Album"));
  console.log(make_album("Atif aslam", "The Third Album",12));

//......AS # 41
let magicians: string[] = [" Bat man", " Iron man", " Spider man"];

function show_magicians(magicians: string[]):void {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}
show_magicians(magicians);

//.......AS # 42

function make_great(magicians: string[]):string[] {
  return magicians.map(magicians => "the Great" + magicians) }

make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names

//......AS # 43
let great_magicians:string[]=make_great([...magicians])

console.log("Original magicians:");
show_magicians(magicians); // Shows original names

console.log("Great magicians:");
show_magicians(great_magicians); // Shows modified names

//.........AS # 44
function make_sandwich(...items: string[]) {
  console.log('Making a sandwich with:')
  items.forEach( item => console.log ("-"+item))
};

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard","mayo");

//...........AS # 45
function car_info(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
) {
  let car = { manufacturer, model};
  options.forEach(([key, value]) => (car[key] = value));
  return car;
}

console.log(car_info("Toyota", "Carolla", ["color", "red"], ["year", 2020]));
console.log(car_info("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));

//.............Alhumdullillah completed........... :)