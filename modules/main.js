/* Generated by Babel */
'use strict';

require('./title.es6');
require('./hide-decimals.es6');

var goalSet = {
    init: function init() {
        this.domCache();
        this.eventBinder();
    },

    domCache: function domCache() {
        this.goalSet = document.getElementById('goalSet');
        this.goalInput = document.getElementById('goalValue');
        this.goal = document.getElementById('goal');
    },

    eventBinder: function eventBinder() {
        this.goalSet.addEventListener('click', this.setGoal.bind(this));
    },

    setGoal: function setGoal() {
        this.goal.innerHTML = this.goalInput.value;
    }
};

goalSet.init();