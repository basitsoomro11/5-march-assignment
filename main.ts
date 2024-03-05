// cammelCase
// snake_case
// PascalCase

let userName :string = "Basit" //e.g. camelCase
let user_name :number = 24 //e.g. snake_case
let UserName : boolean = false //e.g. PascalCase

let isUserExist :String = "Ayaz Soomro";
let is_user_exist : boolean = false;
let IsUserExist : number = 1;

console.log (userName, user_name, UserName);
console.log (isUserExist, is_user_exist, IsUserExist);

// Arrays=>[] => strat index from 0.

let Countries: any[] = ["Pakistan", "Turkey", "Dubai","Eygpt", 1 , false];
console.log(Countries);
console.log(Countries[2])
console.log(Countries[1])
console.log(Countries[0])
console.log(Countries[3])
console.log(Countries[4])
console.log(Countries[5])

let firstCountryName = Countries[0];
console.log (firstCountryName);
console.log (Countries[8]);
console.log(Countries[0], Countries[3]);

let cityName : string = "Karachi"
cityName = "Lahore" 
console.log(cityName);

let vegNames : string[] = ["onion", "potato", "ladyfinger", "tomato"]
vegNames[2] = "Ginger"
console.log (vegNames[1])
console.log (vegNames[8], vegNames[3], vegNames[2])


