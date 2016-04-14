module.exports = (function() {
    
    let goalSet = document.getElementById('goalSet');
    let goalInput = document.getElementById('goalValue');
    let goal = document.getElementById('goal');
    let goalValue = [];
    
    goalSet.addEventListener('click', setGoal);
    
    function setGoal() {
        goal.innerHTML = goalInput.value;
        goalValue.push(goalInput.value);
        console.log(goalValue);
        let goalValueL = goalValue.length;
        return Number(goalValue[goalValueL - 1]);
    }
    
    return {
        setGoal: setGoal
    }
    
})();