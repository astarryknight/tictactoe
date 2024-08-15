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

        // (turn == "x" ? turn="o" : turn="x") //reset turn
        // turnInidicator.textContent = turn.toUpperCase(); //change turn indicator
        
        //bot moves

        moveBot();

        checkWin();
    })
}

function moveBot(){
    for(var i=0;i<3;i++){
        //downard 3 in a row
        if(board[0][i]==board[1][i] && board[0][i]=="x" && board[2][i]==null){
            board[2][i]="o";
            document.getElementById("2"+i).textContent="O";
            return;
        } else if(board[0][i]==board[2][i] && board[0][i]=="x" && board[1][i]==null){
            board[1][i]="o";
            document.getElementById("1"+i).textContent="O";
            return;
        } else if(board[1][i]==board[2][i] && board[1][i]=="x" && board[0][i]==null){
            board[0][i]="o";
            document.getElementById("0"+i).textContent="O";
            return;
        } else if(board[i][0]==board[i][1] && board[i][0]=="x" && board[i][2]==null){
            board[i][2]="o";
            document.getElementById(i+"2").textContent="O";
            return;
        } else if(board[i][0]==board[i][2] && board[i][0]=="x" && board[i][1]==null){
            board[i][1]="o";
            document.getElementById(i+"1").textContent="O";
            return;
        } else if(board[i][1]==board[i][2] && board[i][1]=="x" && board[i][0]==null){
            board[i][0]="o";
            document.getElementById(i+"0").textContent="O";
            return;
        }
    }
    if(board[0][0]==board[1][1] && board[0][0]=="x" && board[2][2]==null){
        board[2][2]="o";
        document.getElementById("22").textContent="O";
        return;
    } else if(board[0][0]==board[2][2] && board[0][0]=="x" && board[1][1]==null){
        board[1][1]="o";
        document.getElementById("11").textContent="O";
        return;
    } else if(board[1][1]==board[2][2] && board[1][1]=="x" && board[0][0]==null){
        board[0][0]="o";
        document.getElementById("00").textContent="O";
        return;
    }
    if(board[0][2]==board[1][1] && board[0][2]=="x" && board[2][0]==null){
        board[2][0]="o";
        document.getElementById("20").textContent="O";
        return;
    } else if(board[0][2]==board[2][0] && board[0][2]=="x" && board[1][1]==null){
        board[1][1]="o";
        document.getElementById("11").textContent="O";
        return;
    } else if(board[1][1]==board[2][0] && board[1][1]=="x" && board[0][2]==null){
        board[0][2]="o";
        document.getElementById("02").textContent="O";
        return;
    }

    for(var i=0;i<board.length;i++){
        for(var j=0;j<board.length;j++){
            if(board[i][j]==null){
                board[i][j]="o";
                document.getElementById(""+i+j).textContent="O";
                return;
            }
        }
    }
    alert("no more space!")
    location.reload();
}

function checkWin(){
    for(var i=0;i<3;i++){
        //downard 3 in a row
        if(board[0][i]==board[1][i] && board[1][i]==board[2][i] && board[0][i]!=null){
            alert(board[0][i].toUpperCase()+" wins!");
            location.reload();
        } else if(board[i][0]==board[i][1] && board[i][1]==board[i][2] && board[i][0]!=null){
            alert(board[i][0].toUpperCase()+" wins!");
            location.reload();
        }
    }
    if(board[0][0]==board[1][1] && board[1][1]==board[2][2] && board[0][0]!=null){
        //left top to bottom right diagonal
        alert(board[0][0].toUpperCase()+" wins!");
        location.reload();
    }
    if(board[0][2]==board[1][1] && board[1][1]==board[2][0] && board[0][2]!=null){
        //right top to bottom left diagonal
        alert(board[0][2].toUpperCase()+" wins!");
        location.reload();
    }
}
