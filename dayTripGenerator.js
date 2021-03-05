'use strict'

let destination = ["International Falls", "Duluth", "Fort Francis", "Fargo", "Grand Marais"];
let restaurant = ["Dairy King", "MacDons", "A&W"];
let transport = ["car", "local Amish taxi-service", "plane"];
let entertainment = ["go hiking", "go shopping", "visit friends", "view local church architecture"];

function randomSelect(entry) {
 return entry[Math.floor(Math.random() * entry.length)];
}
console.log(randomSelect(destination));
console.log(randomSelect(restaurant));
console.log(randomSelect(transport));
console.log(randomSelect(entertainment));