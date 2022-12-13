let btn = document.querySelector('button');
let output = document.querySelector('h2');

function generateRandom() {
    let randomNumber = Math.random()*10;
    let result = (Math.floor(randomNumber)); 

    return result;
}

btn.addEventListener('click', () =>{
    output.innerText = generateRandom();
})

