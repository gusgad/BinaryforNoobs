/* Decimals hide */

// DOM cache
let i = 0;
const hideCheckbox = document.getElementById('hide');
const index = document.getElementsByClassName('ind');
    
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