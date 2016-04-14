/* Requiring title letters toggling module */
require('./title.es6');
/* Requiring decimals hiding feature */
require('./hide-decimals.es6');

/* DOM caching */

// Setting the goal
let goalSet = document.getElementById('goalSet');
let goalInput = document.getElementById('goalValue');
let goal = document.getElementById('goal');
let goalValue = [];
    
/* Event listeners */

// Listener for setting the goal
goalSet.addEventListener('click', setGoal);

/* Functions */

// Setting the goal and returning the last number in the array
function setGoal() {
    goal.innerHTML = goalInput.value;
    goalValue.push(goalInput.value);
    
    let goalValueL = goalValue.length;
    
    return Number(goalValue[goalValueL - 1]));
};





