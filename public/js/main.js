//exo1 
let myInp = document.getElementsByTagName('input')[0];

myInp.addEventListener('focus', () => {
    myInp.style.backgroundColor = "blue";
});

//exo2
let myInp2 = document.getElementsByTagName('input')[1];

myInp2.addEventListener('focus', () => {
    myInp2.style.backgroundColor = "blue";
});

myInp2.addEventListener('focusout', () => {
    myInp2.style.backgroundColor = "white";
});

//exo3
let myP1 = document.getElementsByClassName("premierParagraphe")[0];
let myP2 = document.getElementsByClassName("secondParagraphe")[0];
let myP3 = document.getElementsByClassName("dernierParagraphe")[0];
let myBtn = document.getElementsByClassName("buttonExo")[0];

let copierColler = () => {
    myP3.innerText = myP2.innerText;
    myP1.innerText = myP2.innerText;
}

myBtn.addEventListener('click', copierColler);

//exo 4

//methode 1
// let toRename = document.querySelector("#exo4");
// let inpRename = document.querySelector("input.form-control");
// let btnRename = document.querySelectorAll(".buttonExo")[1];

// btnRename.addEventListener('click', () => {
//     if(inpRename.value.length > 0){
//         toRename.textContent = inpRename.value;
//     }
// });

//methode 2 
let myInp3;
let renameValue;
document.body.addEventListener('click', (e) => {
    if(e.target.className == "buttonExo btn btn-primary"){
        myInp3 = document.querySelector(".form-control");
        renameValue = document.querySelector('#exo4');
        renameValue.innerText = myInp3.value;
    }
});

//exo5
let myP4 = document.getElementsByTagName("p")[4];
let myImg = document.getElementsByTagName("img")[0];
let myBtn2 = document.getElementsByTagName("button")[2];
let chemin = myP4.innerText.slice(9);

myBtn2.addEventListener("click", () => {
    myImg.setAttribute("src", chemin);
});

//exo6
let source = document.getElementsByClassName('img-responsive')[1];
let imgResp2 = document.getElementsByClassName('img-responsive')[2];
let srcImg;
source.addEventListener('click', () => {
    srcImg = source.getAttribute("src");
});
imgResp2.addEventListener('click', () => {
    imgResp2.setAttribute("src", srcImg);
});

//exo7
let monP1 = document.getElementsByTagName('p')[5];
let monP2 = document.getElementsByTagName('p')[6];
let monButton = document.getElementsByTagName('button')[3];
let temp;

monButton.addEventListener('click', () => {
    temp = monP1.innerText; //temp = texte 01
    monP1.innerText = monP2.innerText; //monP1.innerText = texte 02
    monP2.innerText = temp; //monP2.innerText = texte 01
});