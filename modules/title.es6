/* Toggling the letters */

/* DOM caching */
// Caching spans
let span = document.getElementsByTagName('span');

/* Event listeners */
// Listening for hovers
for(let i = 0; i < span.length; i++) {
    span[i].addEventListener('mouseover', letterToggle);
};

/* Functions */
// Toggling
function letterToggle(event) {
    let target = event.target;
    target.innerHTML = numberGenerator();
};
    
//Generating random binary numbers
function numberGenerator() {
    return Math.round(Math.random());
};