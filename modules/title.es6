//Toggling the letters
function letterToggle(event) {
    let target = event.target;
    target.innerHTML = numberGenerator();
}
    
let span = document.getElementsByTagName('span');
for(let i = 0; i < span.length; i++) {
    span[i].addEventListener('mouseover', letterToggle);
}
    
//Generating binary numbers
function numberGenerator() {
    return Math.round(Math.random());
}