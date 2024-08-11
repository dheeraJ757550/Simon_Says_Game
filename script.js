let gameseq=[];
let userseq=[];

let btns=["yellow","red","green","purple"];

let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);

};
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },300);

};



function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level : ${level}`;
    let randidx=Math.floor(Math.random()*3);
    let randcolor=btns[randidx];
    let randbtn=document.querySelector(`.${randcolor}`);
    // console.log(randidx);
    // console.log(randcolor);
    // console.log(randbtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameflash(randbtn);
};


function checkans(idx){
    // console.log("current level ",level);
    // let idx=level-1;
    if(userseq[idx]===gameseq[idx]){
      if(userseq.length==gameseq.length){
        // levelup();
      setTimeout(levelup,1000);

      }
    }
    else{
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(() => {
            document.querySelector("body").style.backgroundColor="black";
            
        }, 1500);
         
        h2.innerHTML=`GAME OVER !!!  Your score :  ${level}😍<br>press any key to play again `; 
        reset();
    }
}


function btnpress(){
    // console.log(this);
    let btn=this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    console.log(usercolor);
    checkans(userseq.length-1);
}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
} ;
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;

}