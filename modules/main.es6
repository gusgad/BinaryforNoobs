/* Requiring title letters toggling module */
require('./title.es6');
/* Requiring decimals hiding feature */
require('./hide-decimals.es6');
/* Requiring bulb color toggling module */
require('./bulb-highlight.es6');


// Setting the goal and returning the last number in the array
let settingGoal = (function () {
    let i = 0;
    // Setting the goal
    let goalSet = document.getElementById('goalSet');
    let goalInput = document.getElementById('goalValue');
    let goal = document.getElementById('goal');
    let goalValue = [];
    let currentGoal = 0;
    
    // Listener for setting the goal
    goalSet.addEventListener('click', setGoal);
    
    function setGoal() { 
        goal.innerHTML = goalInput.value;
        goalValue.push(goalInput.value);

        currentGoal = Number(goalValue[goalValue.length - 1]);

        console.log(currentGoal);
    };
    
    return {
        currentGoal: currentGoal
    };
    
})();
    
// Returning the clicked value of bulb
let clickingBulbs = (function () {
    let i = 0;
    // Value of the clicked bulb
    let bulb = document.getElementsByClassName('decimals');
    let bulbValue = document.getElementsByClassName('ind');
    
    // Clicked bulbs array
    let clickedBulbs = [];
    let clickedSum = 0;
    
    let goalSet = document.getElementById('goalSet');
    
    goalSet.addEventListener('click', clear);
    
    function clear() {
        clickedBulbs = [];
    };
    
    // Listener for clicking on the bulbs
    for (i; i < bulb.length; i++) {
        bulb[i].addEventListener('click', returnBulbValue);
    };
    
    function returnBulbValue() {
        let value = this.className.split(' ').slice(0,1);
        for (i = 0; i < value.length; i++) {
            clickedBulbs.push(Number(value[i]));
        };

        clickedSum = clickedBulbs.reduce(function(sum, num) {
            return sum + num;
        }, 0);

        console.log(clickedSum);
        doMath();
    };
    
    return {
        clickedSum: clickedSum,
        clickedBulbs: clickedBulbs
    };
    
})();

function doMath() {
    if (clickingBulbs.clickedSum > settingGoal.currentGoal) {
        alert('mehr');
    };
};





