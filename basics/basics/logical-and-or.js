
let temp = 55;

if (temp >= 50 && temp <=90){
    console.log('It is pretty nice out!');
}

else if (temp <= 0 || temp >= 120){
    console.log('Do not go outside. It\'s dangerous to go alone.');
}

else{
    console.log('Eh. Do you want');
}

let isGuestOneVegan = true;
let isGuestTwoVegan = false;

if (isGuestOneVegan === true && isGuestTwoVegan === true){ // (isGuestOneVegan && isGuestTwoVegan)
    console.log("Only vegan dishes.");
}

else if (isGuestOneVegan === true || isGuestTwoVegan === true){ //(isGuestOneVegan || isGuestTwoVegan)
    console.log('Offer some vegan options');
}

else {
    console.log('Offer anything on the menu.');
}