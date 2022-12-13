// let blueBox=document.getElementsByClassName('blue');
// let redBox=document.getElementsByClassName('red');
// let greenBox=document.getElementsByClassName('green');
// let yellowBox=document.getElementsByClassName('yellow');
// let orangeBox=document.getElementsByClassName('yellow');
// let blackBox=document.getElementsByClassName('yellow');
// let element = document.querySelector()
// let elements = document.querySelectorAll()


    document.getElementById("bluebox").style.height=`260px`;
    document.getElementById("bluebox").style.width=`350px`;
    document.getElementById("bluebox").style.border=`2px solid red`;
    document.getElementById("bluebox").style.backgroundColor=`blue`;
    document.getElementById("bluebox").style.margin=`10px`;
    document.getElementById("bluebox").style.float=`left`;
    document.getElementById("bluebox").style.overflow=`hidden`;
    document.getElementById("bluebox").style.borderRadius=`5px`;

    document.getElementById("redbox").style.height=`260px`;
    document.getElementById("redbox").style.width=`350px`;
    document.getElementById("redbox").style.border=`2px solid red`;
    document.getElementById("redbox").style.backgroundColor=`red`;
    document.getElementById("redbox").style.margin=`10px`;
    document.getElementById("redbox").style.float=`left`;
    document.getElementById("redbox").style.overflow=`hidden`;
    document.getElementById("redbox").style.borderRadius=`5px`;

    document.getElementById("greenbox").style.height=`260px`;
    document.getElementById("greenbox").style.width=`350px`;
    document.getElementById("greenbox").style.border=`2px solid red`;
    document.getElementById("greenbox").style.backgroundColor=`green`;
    document.getElementById("greenbox").style.margin=`10px`;
    document.getElementById("greenbox").style.float=`left`;
    document.getElementById("greenbox").style.overflow=`hidden`;
    document.getElementById("greenbox").style.borderRadius=`5px`;
    document.getElementById("greenbox").style.color=`#fff`;
 
    document.getElementById("yellowbox").style.height=`260px`;
    document.getElementById("yellowbox").style.width=`350px`;
    document.getElementById("yellowbox").style.border=`2px solid red`;
    document.getElementById("yellowbox").style.backgroundColor=`yellow`;
    document.getElementById("yellowbox").style.margin=`10px`;
    document.getElementById("yellowbox").style.float=`left`;
    document.getElementById("yellowbox").style.overflow=`hidden`;
    document.getElementById("yellowbox").style.borderRadius=`5px`;
    
    document.getElementById("orangebox").style.height=`260px`;
    document.getElementById("orangebox").style.width=`350px`;
    document.getElementById("orangebox").style.border=`2px solid red`;
    document.getElementById("orangebox").style.backgroundColor=`orange`;
    document.getElementById("orangebox").style.margin=`10px`;
    document.getElementById("orangebox").style.float=`left`;
    document.getElementById("orangebox").style.overflow=`hidden`;
    document.getElementById("orangebox").style.borderRadius=`5px`;

    document.getElementById("blackbox").style.height=`260px`;
    document.getElementById("blackbox").style.width=`350px`;
    document.getElementById("blackbox").style.border=`2px solid red`;
    document.getElementById("blackbox").style.backgroundColor=`black`;
    document.getElementById("blackbox").style.margin=`10px`;
    document.getElementById("blackbox").style.float=`left`;
    document.getElementById("blackbox").style.overflow=`hidden`;
    document.getElementById("blackbox").style.borderRadius=`5px`;
  

    document.querySelector("#greenbox").addEventListener("mousemove",myFunction);

    function myFunction() {
        document.querySelector("#random").innerHTML = Math.random();    
    }

    function removeHandler() {
        document.querySelector("#greenbox").removeEventListener("mousemove",myFunction);
    }

    function upperCase() {
        const text = document.querySelector("#details");
        text.value = text.value.toUpperCase();
    }


    // console.log(redBox);
    // console.log(greenBox);
    // console.log(yellowBox);
    // console.log(orangeBox);
    // console.log(blackBox);

// const element = document.getElementsByClassName("box");

// console.log(element);

