let btn1 = document.querySelector('#btnp1');
let btn2 = document.querySelector('#btnp2');
let p1value = document.querySelector('#p1value');
let p2value = document.querySelector('#p2value');

let player1Arr = [];
let player2Arr = [];
let Objfinally = {};

function genarateScors() {

    function generateRandom() {
        let randomNumber = (Math.random()*100)+1;
        let result = (Math.floor(randomNumber)); 
        return result;
    }


    function arraySum(numArr) {
        let sum=0;
        for(let i=0; i<5; i++){
            
            sum+=numArr[i];
        }
        return sum;  
    }

    
        btn1.addEventListener('click', () =>{
        let player1Score = generateRandom();
        player1Arr.push(player1Score);
        p1value.innerText = player1Score;
        console.log(player1Arr);
        document.getElementById("plr1").innerText = arraySum(player1Arr);
        
    });
    
        let p1score =  arraySum(player2Arr);
    
        btn2.addEventListener('click', () =>{
        let player2Score = generateRandom();
        player2Arr.push(player2Score);
        p2value.innerText = player2Score;
        console.log(player2Arr);
        document.getElementById("plr2").innerText = arraySum(player2Arr);
    
    });
    
        let p2score =  arraySum(player2Arr);
    
    if(p1score>p2score){
        console.log("player1 wins")
    }
    else{
        console.log("player2 wins")
    }
}

genarateScors();



// let p1total = arraySum(player1Arr);
// let p2total = arraySum(player2Arr);


/* function ranDome1() {
    document.querySelector("#p1value").innerHTML= Math.floor(Math.random()*100+1);

}
function ranDome2() {
    document.querySelector("#p2value").innerHTML= Math.floor(Math.random()*100+1);
} */
