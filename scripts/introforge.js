function mousOver(obj) {
    obj.innerHTML = "Click Me";
}

function mousOut(obj) {
    obj.innerHTML = "Talk With Us";
}

// document.querySelector("button").addEventListener("click",function(){
//     alert("sorry!! we're cureently not avilable")
// });

document.querySelector("button").addEventListener("click",myFunction);

function myFunction() {
    alert ("Sorry!! we're currently not available");
}

    