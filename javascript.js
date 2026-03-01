const words = ["Web Developer","UI Designer","Programmer"];

let i=0;
let j=0;
let currentWord="";
let isDeleting=false;

function type(){

currentWord = words[i];

if(!isDeleting){

document.querySelector(".typing").textContent =
currentWord.substring(0,j+1);

j++;

if(j==currentWord.length){

isDeleting=true;

}

}

else{

document.querySelector(".typing").textContent =
currentWord.substring(0,j-1);

j--;

if(j==0){

isDeleting=false;

i++;

if(i==words.length){

i=0;

}

}

}

setTimeout(type,120);

}

type();