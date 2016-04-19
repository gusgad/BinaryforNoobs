/* Generated by Babel */
/* Toggling the bulb colors */

/* DOM caching */

'use strict';

var bulb = document.getElementsByClassName('decimals');

/* Event listeners */
for (i = 0; i < bulb.length; i++) {
    bulb[i].addEventListener('click', dosmt);
};

/* Functions */
function dosmt(e) {
    var target = e.target;
    if (target.style.color != 'blue') {
        target.style.color = 'blue';
    } else {
        target.style.color = 'black';
    };
};