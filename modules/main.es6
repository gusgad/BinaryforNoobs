require('./title.es6');
require('./hide-decimals.es6');

let goalSet = {
    init: function() {
        this.domCache();
        this.eventBinder();
    },
    
    domCache: function() {
        this.goalSet = document.getElementById('goalSet');
        this.goalInput = document.getElementById('goalValue');
        this.goal = document.getElementById('goal');
    },
    
    eventBinder: function() {
        this.goalSet.addEventListener('click', this.setGoal.bind(this));
    },
    
    setGoal: function() {
        this.goal.innerHTML = this.goalInput.value;
    }
};

goalSet.init();
