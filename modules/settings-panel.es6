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