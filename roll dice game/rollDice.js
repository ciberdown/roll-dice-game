let rnd;
let scores = {p1:0,p2:0};
let totalScores = {p1:0,p2:0};
let p1orP2 = "";//1 , 2

document.querySelector("#p1C").addEventListener('click',selectP1);
document.querySelector("#p2C").addEventListener('click',selectP2);
document.querySelector("#rollDice").addEventListener('click',clickRoll);
document.querySelector("#hold").addEventListener('click',hold);
document.querySelector("#start").addEventListener('click',startFunc);

function clickRoll(){
    for(i=0;i<6;i++){
        document.querySelectorAll(".images")[i].classList.add('hidden');
    }
    if(document.getElementById("p1C").textContent=='p1: disabled' && document.getElementById("p2C").textContent=='p2: disabled'){
        if(totalScores.p1 > totalScores.p2){
            document.querySelector('#rollDice').disabled = true;
            document.querySelector("#p1Total").textContent += ' => You Won';
            document.querySelector("#p2Total").style.backgroundColor = 'red';
            document.getElementById("p1C").style.backgroundColor = '#d0ad94';
            document.getElementById("p2C").style.backgroundColor = '#d0ad94';
            p1orP2 = '';
        }else{
            document.querySelector('#rollDice').disabled = true;
            document.querySelector("#p2Total").textContent += ' => You Won';
            document.querySelector("#p1Total").style.backgroundColor = 'red';
            document.getElementById("p1C").style.backgroundColor = '#d0ad94';
            document.getElementById("p2C").style.backgroundColor = '#d0ad94';
            p1orP2 = '';
        }
    }else if(p1orP2 == ""){
        alert("select palyer!");
    }else{
        rnd  = Math.floor(Math.random()*6);
        document.querySelectorAll(".images")[rnd].classList.remove('hidden');
        if(rnd == 0){
            if(p1orP2 == 1){
                scores.p1 = 1;
                document.querySelector("#p1").textContent = scores.p1;
                hold();
            }else if(p1orP2 == 2){
                scores.p2 = 1;
                document.querySelector("#p2").textContent = scores.p2;
                hold();
            }
        }else{
            if(p1orP2 == 1){
                scores.p1 += (rnd+1);
                document.querySelector("#p1").textContent = scores.p1;
            }else if(p1orP2 == 2){
                scores.p2 += (rnd+1);
                document.querySelector("#p2").textContent = scores.p2;
            }
            console.log(scores)
        }
        
    }
    
}
function hold(){
    if(p1orP2 == ""){
        alert("select palyer!");
    }else if(p1orP2 == 1){
        totalScores.p1 = scores.p1;
        document.querySelector("#p1Total").textContent = totalScores.p1;
        scores.p1 =0;scores.p2 =0;
        document.querySelector("#p1").textContent = scores.p1;
        document.querySelector("#p2").textContent = scores.p2;
        document.querySelector('#p1C').disabled = true;
        document.getElementById("p1C").textContent = 'p1: disabled';
        document.querySelector("#p1Total").style.backgroundColor = 'green';
        p1orP2 ='';
        p1orP2 =2;
        if(totalScores.p2 == 0){selectP2()}
    }else if(p1orP2 == 2){
        totalScores.p2 = scores.p2;
        document.querySelector("#p2Total").textContent = totalScores.p2;
        scores.p1 =0;scores.p2 =0;
        document.querySelector("#p1").textContent = scores.p1;
        document.querySelector("#p2").textContent = scores.p2;
        document.querySelector('#p2C').disabled = true;
        document.getElementById("p2C").textContent = 'p2: disabled';
        document.querySelector("#p2Total").style.backgroundColor = 'green';
        p1orP2 ='';
        if(totalScores.p1 == 0){selectP1()}
    }
    if(document.getElementById("p1C").textContent=='p1: disabled' && document.getElementById("p2C").textContent=='p2: disabled'){
        if(totalScores.p1 > totalScores.p2){
            p1orP2 = '';
            document.querySelector("#p1Total").textContent += ' => You Won';
            document.querySelector("#p2Total").style.backgroundColor = 'red';
            document.getElementById("p1C").style.backgroundColor = '#d0ad94';
            document.getElementById("p2C").style.backgroundColor = '#d0ad94';
        }else{
            p1orP2 = '';
            document.querySelector("#p2Total").textContent += ' => You Won';
            document.querySelector("#p1Total").style.backgroundColor = 'red';
            document.getElementById("p1C").style.backgroundColor = '#d0ad94';
            document.getElementById("p2C").style.backgroundColor = '#d0ad94';
        }
    }
}
function startFunc(){
    scores = {p1:0,p2:0};
    totalScores = {p1:0,p2:0};
    p1orP2 = '';//1 , 2
    document.getElementById("p1C").style.backgroundColor = '#d0ad94';
    document.getElementById("p2C").style.backgroundColor = '#d0ad94';
    document.getElementById("p1Total").style.backgroundColor = '#d0ad94';
    document.getElementById("p2Total").style.backgroundColor = '#d0ad94';
    document.querySelector("#p1").textContent = 0;
    document.querySelector("#p2").textContent = 0;
    document.querySelector("#p1Total").textContent = 0;
    document.querySelector("#p2Total").textContent = 0;
    document.querySelector('#p1C').disabled = false;
    document.querySelector('#p2C').disabled = false;
    document.querySelector('#rollDice').disabled = false;
    document.getElementById("p1C").textContent = 'select player 1';
    document.getElementById("p2C").textContent = 'select player 2';


    for(i=0;i<6;i++){
        document.querySelectorAll(".images")[i].classList.add('hidden');
    }
}
function selectP1(){
    if(scores.p2 != 0){hold()}
    p1orP2 = 1;
    document.getElementById("p1C").style.backgroundColor = 'red';
    document.getElementById("p2C").style.backgroundColor = '#d0ad94';
    
}
function selectP2(){
    if(scores.p1 != 0){hold()}
    p1orP2 = 2;
    document.getElementById("p2C").style.backgroundColor = 'red';
    document.getElementById("p1C").style.backgroundColor = '#d0ad94';
    
}