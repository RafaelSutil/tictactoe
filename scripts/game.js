let squares = document.getElementsByClassName("square");
let board = ["1","2","3","4","5","6","7","8","9"];
let player_time = 0;
let acabou = 0;

function clicou(id){
  if(player_time == 0){
    if(board[id] != "X" && board[id] != "O"){
      board[id] = "X"
      player_time = 1;
      printa(board[id], id);
      verifica();
    }
  }else{
    if(board[id] != "X" && board[id] != "O"){
      board[id] = "O"
      player_time = 0;
      printa(board[id], id);
      verifica();
    }
  }

  //console.log(board);
}

function verifica(){
    //horizontal
    if(board[0] == board[1] && board[1] == board[2]){
      finish(board[0]);
    }else if(board[3] == board[4] && board[4] == board[5]){
      finish(board[3]);
    }else if(board[6] == board[7] && board[7] == board[8]){
      finish(board[6]);
    }

    //vertical
    if(board[0] == board[3] && board[3] == board[6]){
      finish(board[0]);
    }else if(board[1] == board[4] && board[4] == board[7]){
      finish(board[1]);
    }else if(board[2] == board[5] && board[5] == board[8]){
      finish(board[2]);
    }

    //diagonal
    if(board[0] == board[4] && board[4] == board[8]){
      finish(board[0]);
    }else if(board[2] == board[4] && board[4] == board[6]){
      finish(board[2]);
    }
    let j = 0;
    for(let i=0; i<9; i++){
      if(board[i] == "X" || board[i] == "O"){
        j++;
      }
    }
    if(j==9 && acabou == 0){
      finish("A");
    }
}

function printa(simbol, position){
  const circle = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Blue_circle_for_diabetes.svg/1024px-Blue_circle_for_diabetes.svg.png";
  const x = "https://www.iconsdb.com/icons/preview/red/x-mark-xxl.png";
  
  if(simbol == "O"){
    var imagem = circle;
  }else{
    var imagem = x;
  }
  square = document.getElementById(position).innerHTML = `<img src=${imagem}></img>`
}

function finish(vencedor){
  if(vencedor == "A"){
    setTimeout(
      function(){ 
        confirm(`Empatou`);
        location.reload(); 
      }, 100);
  }else{
    acabou = 1;
    setTimeout(
      function(){ 
        
        confirm(`Jogador ${vencedor} venceu`);
        location.reload();
      }, 100);
  }
  
}
