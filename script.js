let userscore=0;
let compscore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

let user_score=document.querySelector("#user-score");
let comp_score=document.querySelector("#comp-score")

const gencomputerchoice=()=>{
    const op=["stone","paper","scissors"];
    const ranInd=Math.floor(Math.random()*3);
    return op[ranInd];
}
const drawgame=()=>{
    console.log("game was draw");
    msg.innerText="Game is draw. Play again."
     msg.style.backgroundColor="rgb(8, 8, 55)";
}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        user_score.innerText=userscore;
        msg.innerText=`You win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        comp_score.innerText=compscore;
        msg.innerText=`You lose! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame=(userchoice)=>{
    console.log("user choice =",userchoice);
    let compchoice=gencomputerchoice();
    console.log("computer choice =",compchoice);

    if(userchoice===compchoice){
        drawgame();
    }else{
        let userwin=true;
        if(userchoice==="stone"){
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }else{
            userwin=compchoice==="stone"?false:true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice)
    })
});

