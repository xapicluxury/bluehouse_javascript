 //#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}
//var experiencePoints = winBattle() ? 10 : 1;




//Using this function, answer the questions below:
function moveCommand(direction) { 
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommant("forward");// answer is you encounter a monster


//#3 return value when moveCommant("back");// answer is you arrived home

//#4 return value when moveCommant("right");// answer is you found a river

//#5 return value when moveCommant("left");// answer is you run into a troll

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!