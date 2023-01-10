let screeen = document.querySelector("#calc");
let btn = document.querySelectorAll(".btn");

let screeenValue='';

for(item of btn)
{
    item.addEventListener('click', (e)=>{
        btnText = e.target.innetText;
        screeen.value+=btntext;
    });
}