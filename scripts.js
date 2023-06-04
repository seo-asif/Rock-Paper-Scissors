function rpsGame(yourChoice){
//console.log(yourChoice);
let humanChoice,botChoice;
humanChoice=yourChoice.id;
botChoice=numberTochoice(randToRpsInt());
//console.log(botChoice);
results= decideWinner(humanChoice,botChoice);
console.log(results);
message=finalMessage(results);
console.log(message);
rpsFrontEnd(humanChoice,botChoice,message);


}

function randToRpsInt(){
    return Math.floor(Math.random()*3)
}

function numberTochoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice,computerChoice){
    const rpsDatabase ={
        'rock':{'scissors':1,'rock':0.5,'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0},
    }

    const yourScore=rpsDatabase[yourChoice][computerChoice];
    const botScore=rpsDatabase[computerChoice][yourChoice];

    return [yourScore,botScore] ;
}


function finalMessage([yourScore,botScore]){
    if(yourScore===0){
        return {'message':'You Lost!','color':'red'};
    }else if (yourScore===0.5){
        return {'message':'You Tied!','color':'blue'};
    }else{
        return {'message':'You Won!','color':'green'};
    }

}


function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){

    let imageDatabase={
        'rock' :document.getElementById('rock').src,
        'paper' :document.getElementById('paper').src,
        'scissors' :document.getElementById('scissors').src,
    }

    //Remove all the image
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();



    //Creation result

    const humanDiv=document.createElement('div');
    const botDiv=document.createElement('div');
    const messagediv=document.createElement('div');


    humanDiv.innerHTML="<img src='"+imageDatabase[humanImageChoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'>";
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);

    messagediv.innerHTML="<h1 style='color:"+finalMessage['color']+"; font-size:60px; padding:30px; '>"+finalMessage['message'] +"</h1>"
    document.getElementById('flex-box-rps-div').appendChild(messagediv);
    
    
    botDiv.innerHTML="<img src='"+imageDatabase[botImageChoice]+"'height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243,38,24,1);'>";
    document.getElementById('flex-box-rps-div').appendChild(botDiv);

}



function reload(){
    location.reload();
}