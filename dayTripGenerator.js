

let cities = ["International Falls", "Duluth", "Fort Francis", "Fargo", "Grand Marais"];

function randomSelect(entry, nameOfEntry) {
    let randomNumber = Math.floor(Math.random() * entry.length);
    let option = entry[randomNumber];
    let decision = prompt(`How do you feel about ${option} as the option for ${nameOfEntry} for the day trip? Answer "yes" or "no"`);
        if(decision !== "yes"){
            randomNumber = Math.floor(Math.random() * entry.length);
            return entry[randomNumber];
        }
        else {
            return option;
        }
        
}

console.log(randomSelect(cities, "cities"));


/* function acceptRandomSelect() {
    let decision = prompt(`Are you alright with going to ${city}`)
} */

function letUsGoOnADayTrip() {

    let cities = ["International Falls", "Duluth", "Fort Francis", "Fargo", "Grand Marais"];
    let restaurantOptions = ["Dairy King", "MacDons", "A&W"];
    let transportOptions = ["car", "local Amish taxi-service", "plane"];
    let entertainmentOptions = ["go hiking", "go shopping", "visit friends", "view local church architecture"];

    let city = randomSelect(cities, "cities");
    let restaurant = randomSelect(restaurantOptions, "restaurant");
    let transport = randomSelect(transportOptions, "transport");
    let entertainment = randomSelect(entertainmentOptions, "entertainment");

    console.log(`It looks like the details of your trip are decided. You will go to ${city} via ${transport} and will ${entertainment}. After, eat at ${restaurant} while you are there.`);
}

letUsGoOnADayTrip();