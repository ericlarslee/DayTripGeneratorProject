'use strict'

function randomSelect(entry, nameOfEntry) {
        let randomNumber = Math.floor(Math.random() * entry.length);
        let option = entry[randomNumber];
        let decision = "";
        do {
        decision = prompt(`How do you feel about ${option} as the option for ${nameOfEntry} for the day trip? Answer "yes" or "no"`);randomNumber = Math.floor(Math.random() * entry.length);
        option = entry[randomNumber];
        }
        while(decision != "yes")
        console.log(`You picked ${option} for ${nameOfEntry}.`)
        return option;
}
function letUsGoOnADayTrip() { 

    let cities = ["International Falls", "Duluth", "Fort Francis", "Fargo", "Grand Marais"];
    let restaurantOptions = ["Dairy King", "MacDons", "A&W"];
    let transportOptions = ["car", "local Amish taxi-service", "plane"];
    let entertainmentOptions = ["go hiking", "go shopping", "visit friends", "view local church architecture"];

    let city = randomSelect(cities, "cities");
    let restaurant = randomSelect(restaurantOptions, "restaurant");
    let transport = randomSelect(transportOptions, "transport");
    let entertainment = randomSelect(entertainmentOptions, "entertainment");

    console.log(`It looks like the details of your trip are decided. You will go to ${city} via ${transport} and will ${entertainment}. After, you will eat at ${restaurant} while you are there.`);
}

letUsGoOnADayTrip();