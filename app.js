function randomRBG() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`
}

//To change each letter independently

// Function to change the color of each letter
const letters = document.querySelectorAll('.letter');
const intervalID = setInterval(function() {
    for (let letter of letters) {
        letter.style.color = randomRBG();
    }
},1000);