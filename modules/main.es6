/* Requiring title letters toggling module */
require('./title.es6');
/* Requiring decimals hiding feature */
require('./hide-decimals.es6');
/* Requiring bulb color toggling module */
require('./bulb-highlight.es6');
/* Requiring a module for settings panel animations */
require('./settings-panel.es6');



// Clicked bulbs array
let clickedBulbs = [];
let clickedSum = 0;

// Goal values array
let goalValue = [];
let currentGoal = 0;

/* Goal setting module */
let settingGoal = (function () {
    
    /* DOM cache */
    
    let i = 0;
    let goalSet = document.getElementById('goalSet');
    let goalInput = document.getElementById('goalValue');
    let goal = document.getElementById('goal');
    
    
    /* Event listeners */
    
    // Listener for the goal set button
    goalSet.addEventListener('click', setGoal);
    
    
    /* Functions */
    
    // Changing the inner HTML and pushing the value to an array
    function setGoal() {
        
        // Resetting the clicked values on a new goal
        clickedBulbs = [];
        clickedSum = 0;
        
        goal.innerHTML = goalInput.value;
        goalValue.push(goalInput.value);

        currentGoal = Number(goalValue[goalValue.length - 1]);
        
        console.log(currentGoal);
    };
    
    // Global properties
    return {
        currentGoal: currentGoal
    };
    
})();
    
//* Bulb clicking module */
let clickingBulbs = (function () {
    
    /* DOM cache */
    
    let i = 0;
    let bulb = document.getElementsByClassName('decimals');
    let bulbValue = document.getElementsByClassName('ind');
    
    
    /* Event listeners */
    
    // Listener for clicking on the bulbs
    for (i; i < bulb.length; i++) {
        bulb[i].addEventListener('click', returnBulbValue);
    };
    
    
    /* Functions */
        
    // Returning the total value of the cliked bulbs
    function returnBulbValue() {
        let value = this.className.split(' ').slice(0,1);
        for (i = 0; i < value.length; i++) {
            
            // Checking if the value already exist an array
            if (clickedBulbs.indexOf(Number(value[i])) === -1) {
                clickedBulbs.push(Number(value[i]));
            } else if (clickedBulbs.indexOf(Number(value[i])) > -1) {
                clickedBulbs.pop(Number(value[i]));
            };
        };

        clickedSum = clickedBulbs.reduce(function(sum, num) {
            return sum + num;
        }, 0);
        
        console.log(clickedSum);
        // Checking the game conditions
        doMath();
    };
})();

// Checking the game conditions
function doMath() {
    
    // Caching the needed variables
    let cg = currentGoal;
    let cs = clickedSum;
    let result = document.getElementById('result');
    
    if(cs == cg) {
        result.style.visibility = 'visible';
    } else {
        result.style.visibility = 'hidden';
    };
};










