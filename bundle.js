/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* Generated by Babel */
	/* Requiring title letters toggling module */
	'use strict';

	__webpack_require__(1);
	/* Requiring decimals hiding feature */
	__webpack_require__(2);
	/* Requiring bulb color toggling module */
	__webpack_require__(3);
	/* Requiring a module for settings panel animations */
	__webpack_require__(4);

	// Clicked bulbs array
	var clickedBulbs = [];
	var clickedSum = 0;

	// Goal values array
	var goalValue = [];
	var currentGoal = 0;

	/* Goal setting module */
	var settingGoal = (function () {

	    /* DOM cache */

	    var i = 0;
	    var goalSet = document.getElementById('goalSet');
	    var goalInput = document.getElementById('goalValue');
	    var goal = document.getElementById('goal');

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
	var clickingBulbs = (function () {

	    /* DOM cache */

	    var i = 0;
	    var bulb = document.getElementsByClassName('decimals');
	    var bulbValue = document.getElementsByClassName('ind');

	    /* Event listeners */

	    // Listener for clicking on the bulbs
	    for (i; i < bulb.length; i++) {
	        bulb[i].addEventListener('click', returnBulbValue);
	    };

	    /* Functions */

	    // Returning the total value of the cliked bulbs
	    function returnBulbValue() {
	        var value = this.className.split(' ').slice(0, 1);
	        for (i = 0; i < value.length; i++) {

	            // Checking if the value already exist an array
	            if (clickedBulbs.indexOf(Number(value[i])) === -1) {
	                clickedBulbs.push(Number(value[i]));
	            } else if (clickedBulbs.indexOf(Number(value[i])) > -1) {
	                clickedBulbs.pop(Number(value[i]));
	            };
	        };

	        clickedSum = clickedBulbs.reduce(function (sum, num) {
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
	    var cg = currentGoal;
	    var cs = clickedSum;
	    var result = document.getElementById('result');

	    if (cs == cg) {
	        result.style.visibility = 'visible';
	    } else {
	        result.style.visibility = 'hidden';
	    };
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	/* Toggling the letters */

	/* DOM caching */
	// Caching spans
	let span = document.getElementsByTagName('span');

	/* Event listeners */
	// Listening for hovers
	for(let i = 0; i < span.length; i++) {
	    span[i].addEventListener('mouseover', letterToggle);
	}

	/* Functions */
	// Toggling
	function letterToggle(event) {
	    let target = event.target;
	    target.innerHTML = numberGenerator();
	}
	    
	//Generating random binary numbers
	function numberGenerator() {
	    return Math.round(Math.random());
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	/* Decimals hide */

	// DOM cache
	let i = 0;
	let hideCheckbox = document.getElementById('hide');
	let index = document.getElementsByClassName('ind');
	    
	//Event listeners
	hideCheckbox.addEventListener('change', hideDecimals);

	// Checkbox checking
	function hideDecimals(){
	    for (i = 0; i < index.length; i++) {
	        if (hideCheckbox.checked) {
	            index[i].style.visibility = 'hidden';
	        } else {
	            index[i].style.visibility = 'visible';
	        }
	    }
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	/* Toggling the bulb colors */

	/* DOM caching */
	let i = 0;

	let bulb = document.getElementsByClassName('decimals');

	/* Event listeners */
	for (i = 0; i < bulb.length; i++) {
	    bulb[i].addEventListener('click', toggleColors);
	};

	/* Functions */
	function toggleColors(e) {
	    let target = e.target;
	    if( target.style.color != 'forestgreen') {
	        target.style.color = 'forestgreen';
	    } else {
	        target.style.color = 'black';
	    };
	    
	    if (target.className == 'ind') {
	        target.style.color = 'black';
	    };
	};

/***/ },
/* 4 */
/***/ function(module, exports) {

	/* Setting panel animations */

	/* DOM cache */

	let hamburger = document.getElementById('hamburger');
	let settingsPanel = document.getElementById('settings');

	/* Event listeners */
	hamburger.addEventListener('click', animate);


	/* Functions */

	function animate() {
	    hamburger.classList.toggle('ninety');
	    if (settingsPanel.style.height != '5%') {
	        settingsPanel.style.height = '5%';
	        hamburger.style.paddingTop = '5px';
	    } else {
	        settingsPanel.style.height = '15%';
	    }
	};



/***/ }
/******/ ]);