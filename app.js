const myHeadingTag = document.getElementById('myHeading');

console.log(myHeadingTag);
console.log(myHeadingTag.innerText);

myHeadingTag.innerText = 'Good morning';

const firstButton = document.getElementById('myFirstButton');

let on = true;
const body = document.getElementsByTagName('body')[0];

function changeHeading() {
    if (on) {
        body.style.backgroundColor = '#fff';
        myHeadingTag.innerText = 'Good day';
    } else {
        body.style.backgroundColor = '#000';
        myHeadingTag.style.color = '#fff';
        myHeadingTag.innerText = 'Good night';
    }
    on = !on;
}
firstButton.addEventListener("click", changeHeading);

const chkMyCheckbox = document.getElementById('chkMyCheckbox');
const spanMyCheckboxState = document.getElementById('spnMyCheckboxState');

chkMyCheckbox.addEventListener('change', showCheckboxState);

function showCheckboxState(event) {
    console.log(event);    
    console.log(event.target);
    console.log(event.target.checked);
    spanMyCheckboxState.innerText = event.target.checked ;
}

const pTech = document.getElementById('pTech');
const rdoTechs = document.getElementsByName('tech')

console.log(rdoTechs);

for(const rdo of rdoTechs) {
    rdo.onchange = event => {
        console.log(event);
        console.log(event.target);     
        pTech.innerText = event.target.value;   
    }
}

const txtMyTextbox = document.getElementById('txtMyTextbox');
const btnSecondButton = document.getElementById('btnSecondButton');
const dTextboxContent = document.getElementById('dTextboxContent');

btnSecondButton.onclick = () => {
    dTextboxContent.innerText = txtMyTextbox.value;
}