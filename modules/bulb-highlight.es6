/* Toggling the bulb colors */

/* DOM caching */

let bulb = document.getElementsByClassName('decimals');

/* Event listeners */
for (i = 0; i < bulb.length; i++) {
    bulb[i].addEventListener('click', dosmt);
};

/* Functions */
function dosmt(e) {
    let target = e.target;
    if(target.style.color != 'blue') {
        target.style.color = 'blue';
    } else {
        target.style.color = 'black';
    };
};