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
    if( target.style.color != 'mediumseagreen') {
        target.style.color = 'mediumseagreen';
    } else {
        target.style.color = 'black';
    };
    
    if (target.className == 'ind') {
        target.style.color = 'black';
    };
};