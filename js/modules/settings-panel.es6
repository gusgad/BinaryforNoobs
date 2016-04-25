/* Setting panel animations */

/* DOM cache */

const hamburger = document.getElementById('hamburger');
const settingsPanel = document.getElementById('settings');

/* Event listeners */
hamburger.addEventListener('click', animate);


/* Functions */

function animate() {
    hamburger.classList.toggle('ninety');
    if (settingsPanel.style.height != '30px') {
        settingsPanel.style.height = '30px';
    } else {
        settingsPanel.style.height = '100px';
    }
};