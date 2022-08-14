// { <button onclick="console.log(65)">Another button</button> }

// option :
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// 2
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;

function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// 3
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}


const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
});


// Option-4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'pink';
})


// another : we will use this 
document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})
