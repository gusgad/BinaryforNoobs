/* Requiring title letters toggling module */
require('./title.es6');
/* Requiring decimals hiding feature */
require('./hide-decimals.es6');

/* DOM caching */
let i = 0;
// Setting the goal
let goalSet = document.getElementById('goalSet');
let goalInput = document.getElementById('goalValue');
let goal = document.getElementById('goal');
let goalValue = [];
    
// Value of the clicked bulb
let bulb = document.getElementsByClassName('decimals');
let bulbValue = document.getElementsByClassName('ind');

// Clicked bulbs array
let clickedBulbs = [];
    
/* Event listeners */

// Listener for setting the goal
goalSet.addEventListener('click', setGoal);

// Listener for clicking on the bulbs
for (i; i < bulb.length; i++) {
    bulb[i].addEventListener('click', returnBulbValue);
};

/* Functions */

// Setting the goal and returning the last number in the array
function setGoal() {
    goal.innerHTML = goalInput.value;
    goalValue.push(goalInput.value);
    
    let goalValueL = goalValue.length;
    
    return Number(goalValue[goalValueL - 1]);
};
    
// Returning the clicked value of bulb
function returnBulbValue() {
    let value = this.className.split(' ').slice(0,1);
    for (i = 0; i < value.length; i++) {
        clickedBulbs.push(value[i]);
    };
    console.log(clickedBulbs);
};