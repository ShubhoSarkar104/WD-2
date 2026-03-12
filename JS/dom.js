// document.writeIn("Hello,world!");

function result(){
    let inputData=document.getElementById("inputText").value;
    document.getElementById('text').textContent = inputData;
    //valid age for voting
    if(inputData>=18){
        alert("You are eligible to vote");
    }
    else{
        alert("You are not elible of vote");
    }
   let changeColor=document.getElementById('text');
   changeColor.style.color="red";

   let bodyColor=document.getElementsByTagName('body')[0];
   bodyColor.style.backgroundColor="orange";
}

let para=document.getElementById("paratext");
function changetextcolor(){
    para.style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16);
}
para.addEventListener('mouseover',changetextcolor);