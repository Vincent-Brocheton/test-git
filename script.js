let sexe = prompt("Entrez votre sexe (H/F");
let age = prompt("Entrez votre age");


if (((sexe == "H") && (age > 20)) || ((sexe == "F") && ((age >= 18) && (age <= 35)))) {
    console.log("Vous êtes imposable!");
} else {
    console.log("Vous n'êtes pas imposable");
}