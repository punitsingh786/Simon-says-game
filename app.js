let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;

let btns=['red','yellow','green','purple'];

//to start the game press any key 
document.addEventListener('keypress',function(){
    if(started==false){
        console.log('game started');
        started=true;
        levelUp();
    }
    
});
// to flash btn 
 function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
 };

//step two for level 1 and flash
let h2=document.querySelector('h2');
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;

    //random button choose and flash
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randBtn);
}
//for checking ans 
function checkAns(idx){
    
    if(gameSeq[idx]===userSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML=`game over ! your score was <b>${level} </b> <br>press any key to start the game `;
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        },250);
        reset();
        
    }
}

//next step to press btn and get data 
function btnPress(){
    let btn=this;
    btnFlash(btn);
    let userColor=btn.getAttribute('id');
    
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll('.btn');
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}