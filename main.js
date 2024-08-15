turnInidicator = document.getElementById("turn");
turn="x";
turnInidicator.textContent = turn.toUpperCase();

board=[[null, null, null],
       [null, null, null],
       [null, null, null]
    ];


var l = document.getElementsByClassName("box")
for(i=0;i<l.length;i++){
    l[i].addEventListener("click", (e)=>{
        if(e.target.textContent=="" ) {(e.target.textContent=turn.toUpperCase())}
        else {alert("square is already taken up!");return;}
        
        board[e.target.id[0]][e.target.id[1]]=turn;

        checkWin();

        (turn == "x" ? turn="o" : turn="x") //reset turn
        turnInidicator.textContent = turn.toUpperCase(); //change turn indicator
    })
}

function checkWin(){
    for(var i=0;i<3;i++){
        //downard 3 in a row
        if(board[0][i]==board[1][i] && board[1][i]==board[2][i] && board[0][i]!=null){
            alert("3 in a row vert!")
        }
    }
    for(var i=0;i<3;i++){
        if(board[i][0]==board[i][1] && board[i][1]==board[i][2] && board[i][0]!=null){
            alert("3 in a row horiz!")
        }
    }
    if(board[0][0]==board[1][1] && board[1][1]==board[2][2] && board[0][0]!=null){
        //left top to bottom right diagonal
        alert("3 in a row diag!")
    }
    if(board[0][2]==board[1][1] && board[1][1]==board[2][0] && board[0][0]!=null){
        //right top to bottom left diagonal
        alert("3 in a row diag!")
    }
}
