  {
    const playGame= function(playerImput) {
    clearMessages();
    const getMoveName= function(argMoveId){
      if(argMoveId == 1){return 'kamień';} 
      else if(argMoveId==2){return 'papier';}
      else if(argMoveId==3){return 'nożyce';}
      else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
      }
   }
    const displayResult= function(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
    console.log('moves:', argComputerMove, argPlayerMove);
    if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
    }
    else if( computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Wygrywa komputer!');
    }
    else if( computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis!');
    }
    if( computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Wygrywa komputer');
    }
    else if( computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
    }
    else if( computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis');
    }
    else if( computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Wygrywa Komputer!');
    }
    else if( computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
    }
    else if( computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis');
    }
    else if( computerMove == 'nożyce' && playerMove == 'nieznany ruch'){
    printMessage('Nieznany wynik');
    }
   }


    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    const computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' +computerMove);

    const playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove,playerMove);
}
  document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
  });
  document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
  });
  document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
  });
}