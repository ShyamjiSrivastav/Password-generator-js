let content=document.querySelector('#sri');
let specialChar="@#$&*-_|/.?"

function pickRandom(max,min){
    return Math.floor(Math.random()*(max-min))+min;
}

function randomSpecChar(){
    
    let no=pickRandom(10,0);
    let text=specialChar.charCodeAt(no);
    let code=String.fromCharCode(text);
    return code;
}

function randomNum(){
    let num=pickRandom(9,0);
    return num;
}
function randomLowerCase(){
    let chr=pickRandom(122,97);
    let ch=String.fromCharCode(chr);
    return ch;
}

function randomUpperCase(){
    let chr=pickRandom(90,65);
    let ch=String.fromCharCode(chr);
    return ch;
}

function password(){
    let n='';
    let k=randomNum();
    n=n+k;
    let l=randomLowerCase();
    n=n+l;
    let m=randomUpperCase();
    n=n+m;
    let b=randomSpecChar();
    n=n+b;
    let e=randomNum();
    n=n+e;
    let w=randomLowerCase();
    n=n+w;
    content.value=n;
}
