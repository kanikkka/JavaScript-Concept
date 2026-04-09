// excersie in which we have to make buisness name generaotr by combining list of adjectives and shop name and another word
//crazy,amazing,fire
//withour array using 
//shop name - engine,foods,garments
// another word -bros ,limited,hub
// Adjectives
let adj;
let rand1 = Math.random();

if (rand1 < 0.33) {
    adj = "Crazy";
} else if (rand1 < 0.66) {
    adj = "Amazing";
} else {
    adj = "Fire";
}

// Shop Names
let shop;
let rand2 = Math.random();

if (rand2 < 0.33) {
    shop = "Engine";
} else if (rand2 < 0.66) {
    shop = "Foods";
} else {
    shop = "Garments";
}

// Ending Words
let end;
let rand3 = Math.random();

if (rand3 < 0.33) {
    end = "Bros";
} else if (rand3 < 0.66) {
    end = "Limited";
} else {
    end = "Hub";
}

// Final Business Name
let businessName = adj + " " + shop + " " + end;

console.log("Your Business Name is: " + businessName);