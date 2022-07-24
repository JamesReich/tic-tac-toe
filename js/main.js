let tile = document.getElementsByClassName( 'tile' );
let winMsg = document.getElementById('win-msg');
let loseMsg = document.getElementById('lose-msg');
let drawMsg = document.getElementById('draw-msg');
let resetBtn = document.getElementById('reset-btn');

let playerWin = false;
let cpuWin = false;
let isDraw = false;

winMsg.style.visibility = 'hidden';
loseMsg.style.visibility = 'hidden';
drawMsg.style.visibility = 'hidden';

let counter = 0;

for (let i = 0; i < tile.length; i++) {

    tile[i].innerHTML = '';

}


const resetGame = () =>{

    for (let i = 0; i < tile.length; i++) {
        tile[i].innerHTML = '';
        tile[i].classList.remove('winner');
        tile[i].classList.remove('winner-cpu');
        tile[i].classList.remove('disabled');
    }
    counter = 0;
    winMsg.style.visibility = 'hidden';
    loseMsg.style.visibility = 'hidden';
    drawMsg.style.visibility = 'hidden';
    playerWin = false;
    cpuWin = false;
    isDraw = false;

};

resetBtn.addEventListener('click', () => {

    resetGame();

});

[ ...tile ].forEach( element => {

    element.addEventListener( 'click', ( ) => {

        if ( !element.firstChild ) {

            let x = document.createElement( 'span' );
            x.className = 'x';
            x.innerHTML = 'X';
            element.appendChild( x );

            counter++;

            getComputerChoice();


        }

        checkWin();

    } );

} );


function getComputerChoice () {

    let random = Math.floor( Math.random() * tile.length );

    checkWin();

    if ( tile[ random ].firstChild ) {

        if (counter >= 8) {

            return;

        } else {

            getComputerChoice();

        }


    } else if(playerWin !== true) {

        let o = document.createElement( 'span' );
        o.className = 'o';
        o.innerHTML = 'O';

        tile[ random ].appendChild( o );

        counter++;

    }



}

const disableButtons = () =>{

        for (let i = 0; i < tile.length; i++) {

            tile[i].classList.add('disabled');

        }

};

function checkWin () {

    // Top across
    if ( tile[ 0 ].innerHTML.includes('X') && tile[ 1 ].innerHTML.includes('X') && tile[ 2 ].innerHTML.includes('X') ) {

        tile[0].classList.add('winner');
        tile[1].classList.add('winner');
        tile[2].classList.add('winner');

        winMsg.style.visibility = 'visible';

        winMsg.innerHTML = 'WINNER';

        playerWin = true;

        disableButtons();


        //Middle Across
    } else if ( tile[ 3 ].innerHTML.includes('X') && tile[ 4 ].innerHTML.includes('X') && tile[ 5 ].innerHTML.includes('X') ) {

        tile[3].classList.add('winner');
        tile[4].classList.add('winner');
        tile[5].classList.add('winner');

        winMsg.style.visibility = 'visible';

        winMsg.innerHTML = 'WINNER';

        playerWin = true;

        disableButtons();

        //Bottom Across
    } else if ( tile[ 6 ].innerHTML.includes('X') && tile[ 7 ].innerHTML.includes('X') && tile[ 8 ].innerHTML.includes('X') ) {

        tile[6].classList.add('winner');
        tile[7].classList.add('winner');
        tile[8].classList.add('winner');

        winMsg.style.visibility = 'visible';

        winMsg.innerHTML = 'WINNER';

        playerWin = true;

        disableButtons();
        //Left side down
    } else if ( tile[ 0 ].innerHTML.includes('X') && tile[ 3 ].innerHTML.includes(`X`) && tile[ 6 ].innerHTML.includes('X') ) {

        tile[0].classList.add('winner');
        tile[3].classList.add('winner');
        tile[6].classList.add('winner');

        winMsg.style.visibility = 'visible';

        winMsg.innerHTML = 'WINNER';

        playerWin = true;

        disableButtons();
        //Middle Side Down
    } else if ( tile[ 1 ].innerHTML.includes('X') && tile[ 4 ].innerHTML.includes('X') && tile[ 7 ].innerHTML.includes('X') ) {

        tile[1].classList.add('winner');
        tile[4].classList.add('winner');
        tile[7].classList.add('winner');

        winMsg.style.visibility = 'visible';

        winMsg.innerHTML = 'WINNER';

        playerWin = true;

        disableButtons();
        //Right Side Down
    } else if ( tile[ 2 ].innerHTML.includes('X') && tile[ 5 ].innerHTML.includes('X') && tile[ 8 ].innerHTML.includes('X') ) {

        tile[2].classList.add('winner');
        tile[5].classList.add('winner');
        tile[8].classList.add('winner');

        winMsg.style.visibility = 'visible';

        winMsg.innerHTML = 'WINNER';

        playerWin = true;

        disableButtons();
        //Diagonal top left to bottom right
    } else if ( tile[ 0 ].innerHTML.includes('X') && tile[ 4 ].innerHTML.includes('X') && tile[ 8 ].innerHTML.includes('X') ) {

        tile[0].classList.add('winner');
        tile[4].classList.add('winner');
        tile[8].classList.add('winner');

        winMsg.style.visibility = 'visible';

        winMsg.innerHTML = 'WINNER';

        playerWin = true;

        disableButtons();
        //Diagonal top right to bottom left
    } else if ( tile[ 2 ].innerHTML.includes('X') && tile[ 4 ].innerHTML.includes('X') && tile[ 6 ].innerHTML.includes('X') ) {

        tile[2].classList.add('winner');
        tile[4].classList.add('winner');
        tile[6].classList.add('winner');

        winMsg.style.visibility = 'visible';

        winMsg.innerHTML = 'WINNER';

        playerWin = true;

        disableButtons();

    }

//    O win logic

    if ( tile[ 0 ].innerHTML.includes('O') && tile[ 1 ].innerHTML.includes('O') && tile[ 2 ].innerHTML.includes('O') ) {

        tile[0].classList.add('winner-cpu');
        tile[1].classList.add('winner-cpu');
        tile[2].classList.add('winner-cpu');

        loseMsg.style.visibility = 'visible';

        loseMsg.innerHTML = 'YOU LOSE';

        cpuWin = true;

        disableButtons();
        //Middle Across
    } else if ( tile[ 3 ].innerHTML.includes('O') && tile[ 4 ].innerHTML.includes('O') && tile[ 5 ].innerHTML.includes('O') ) {

        tile[3].classList.add('winner-cpu');
        tile[4].classList.add('winner-cpu');
        tile[5].classList.add('winner-cpu');

        loseMsg.style.visibility = 'visible';

        loseMsg.innerHTML = 'YOU LOSE';

        cpuWin = true;

        disableButtons();
        //Bottom Across
    } else if ( tile[ 6 ].innerHTML.includes('O') && tile[ 7 ].innerHTML.includes('O') && tile[ 8 ].innerHTML.includes('O') ) {

        tile[6].classList.add('winner-cpu');
        tile[7].classList.add('winner-cpu');
        tile[8].classList.add('winner-cpu');

        loseMsg.style.visibility = 'visible';

        loseMsg.innerHTML = 'YOU LOSE';

        cpuWin = true;

        disableButtons();

        //Left side down
    } else if ( tile[ 0 ].innerHTML.includes('O') && tile[ 3 ].innerHTML.includes('O') && tile[ 6 ].innerHTML.includes('O') ) {

        tile[0].classList.add('winner-cpu');
        tile[3].classList.add('winner-cpu');
        tile[6].classList.add('winner-cpu');

        loseMsg.style.visibility = 'visible';

        loseMsg.innerHTML = 'YOU LOSE';

        cpuWin = true;

        disableButtons();

        //Middle Side Down
    } else if ( tile[ 1 ].innerHTML.includes('O') && tile[ 4 ].innerHTML.includes('O') && tile[ 7 ].innerHTML.includes('O') ) {

        tile[1].classList.add('winner-cpu');
        tile[4].classList.add('winner-cpu');
        tile[7].classList.add('winner-cpu');

        loseMsg.style.visibility = 'visible';

        loseMsg.innerHTML = 'YOU LOSE';

        cpuWin = true;

        disableButtons();

        //Right Side Down
    } else if ( tile[ 2 ].innerHTML.includes('O') && tile[ 5 ].innerHTML.includes('O') && tile[ 8 ].innerHTML.includes('O') ) {

        tile[2].classList.add('winner-cpu');
        tile[5].classList.add('winner-cpu');
        tile[8].classList.add('winner-cpu');

        loseMsg.style.visibility = 'visible';

        loseMsg.innerHTML = 'YOU LOSE';

        cpuWin = true;

        disableButtons();

        //Diagonal top left to bottom right
    } else if ( tile[ 0 ].innerHTML.includes('O') && tile[ 4 ].innerHTML.includes('O') && tile[ 8 ].innerHTML.includes('O') ) {

        tile[0].classList.add('winner-cpu');
        tile[4].classList.add('winner-cpu');
        tile[8].classList.add('winner-cpu');

        loseMsg.style.visibility = 'visible';

        loseMsg.innerHTML = 'YOU LOSE';

        cpuWin = true;

        disableButtons();
        //Diagonal top right to bottom left
    } else if ( tile[ 2 ].innerHTML.includes('O') && tile[ 4 ].innerHTML.includes('O') && tile[ 6 ].innerHTML.includes('O') ) {

        tile[2].classList.add('winner-cpu');
        tile[4].classList.add('winner-cpu');
        tile[6].classList.add('winner-cpu');

        loseMsg.style.visibility = 'visible';

        loseMsg.innerHTML = 'YOU LOSE';

        cpuWin = true;

        disableButtons();
    }

        if(tile[0].innerHTML !== '' &&
            tile[1].innerHTML !== '' &&
            tile[2].innerHTML !== '' &&
            tile[3].innerHTML !== '' &&
            tile[4].innerHTML !== '' &&
            tile[5].innerHTML !== '' &&
            tile[6].innerHTML !== '' &&
            tile[7].innerHTML !== '' &&
            tile[8].innerHTML !== ''){

            isDraw = true;

        }

        if(cpuWin === false && playerWin === false && isDraw === true){

            drawMsg.style.visibility = 'visible';
            drawMsg.innerHTML = "IT'S A DRAW!"

            disableButtons();

        }


}



