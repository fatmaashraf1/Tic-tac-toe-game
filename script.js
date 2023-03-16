
// Check the winner function
function is_winner() {
    let square = [];
    for (let i = 1; i < 10; i++) {
        square[i] = document.getElementById(i).innerText;
    }

    // For rows
    if ((square[1] != "" && square[2] == square[3] && square[1] == square[2]) ||
        (square[4] != "" && square[4] == square[5] && square[5] == square[6]) ||
        (square[7] != "" && square[7] == square[8] && square[8] == square[9])
    ) {
        return true;
    }

    // For columns
    if ((square[1] != "" && square[1] == square[4] && square[4] == square[7]) ||
        (square[2] != "" && square[2] == square[5] && square[5] == square[8]) ||
        (square[3] != "" && square[3] == square[6] && square[6] == square[9])
    ) {
        return true;
    }

    // For diagonals
    if ((square[1] != "" && square[1] == square[5] && square[5] == square[9]) ||
        (square[3] != "" && square[3] == square[5] && square[5] == square[7])
    ) {
        return true;
    }

}


//Draw function

function is_draw(){
    return ( moves == 9 && !is_winner() );
}


document.getElementById("play-button").addEventListener("click", function(){
    document.getElementById("click").play();
    document.body.style.background = "url(5509862.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.getElementById("welcome-page").style.display = "none";
    document.getElementById("loader").style.display = "flex";

    setTimeout(function(){ 
        document.getElementById("loader").style.display = "none";
        document.getElementById("back").style.display = "flex"; 
        },1000);
        
    });



// Main Function play_game

let moves = 0;  // for check moves in is_draw function
let turn = 1; // X turn
function game(id) {
    let box = document.getElementById(id);
    document.getElementById("play").style.display ="none";
    if (turn == 1 && box.innerText == "" && !is_winner()) {
        document.getElementById("player").innerText = "O";
        box.innerText = "X";
        turn--;
        moves++;
    }
    else if (turn == 0 && box.innerText == "" && !is_winner()) {
        box.style.color = "slateblue";
        document.getElementById("player").innerText = "X";
        box.innerText = "O";
        turn++;
        moves++;
    }
    if(is_winner()){
        document.getElementById("turn").style.display ="none";
        document.getElementById("result").style.display = "block";
        if (turn){
            document.getElementById("back").muted = true;
            document.getElementById("result").innerText = "Woohoo! Player O wins🥳";
            document.getElementById("party").play();
            document.getElementById("poppers").style.display ="block";
            setTimeout(function(){
                document.getElementById("poppers").style.display ="none";
            },2000);
           
            
        } 
        else {
            document.getElementById("back").muted = true;
            document.getElementById("result").innerText = " Woohoo! Player X wins🥳";
            document.getElementById("party").play();
            document.getElementById("poppers").style.display ="block";
            setTimeout(function(){
                document.getElementById("poppers").style.display ="none";
            },2000);
        }
        
    }

    if(is_draw()){
        document.getElementById("back").muted = true;
        document.getElementById("turn").style.display ="none";
        document.getElementById("result").style.display = "block";
        document.getElementById("result").innerHTML = "Game is draw..<br>Lets play again😆";
        document.getElementById("reset").innerText = "Play Again";
    }
}

document.getElementById("reset").addEventListener("click",function(){
    document.getElementById("click").play();
    document.getElementById("back").style.display = "none"; 
    document.getElementById("loader").style.display = "flex";
    
    setTimeout(function(){ 
    document.getElementById("loader").style.display = "none";
     location.reload();
    },1000);
    
});

