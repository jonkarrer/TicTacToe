class Player {
    constructor(marker) {
        this.marker = marker;
    }
    computerPlayer(){
        
    }
}
function unoPlayer() {
    const firstPage = document.getElementById('start');
    firstPage.remove();
    const gamePage = document.getElementById('gridParent');
    gamePage.className = "toggle";
    return onePlayer();
}
function onePlayer() {
    const player1 = new Player('X');
    const player2 = new Player('O');
    var i = 1;
    var tieTicker = 0;
    var gameFlow = {
        
        init: function(){ 
            this.cacheDom();
            this.placeMarker();
            },
        
        cacheDom: function(){ //Build 3 arrays. They are the rows.
            this.board = document.querySelectorAll('#gridParent > div');

            this.top = [
                document.getElementById('topLeft').innerHTML,
                document.getElementById('topMid').innerHTML,
                document.getElementById('topRight').innerHTML,
            ]
            this.mid = [
                document.getElementById('midLeft').innerHTML,
                document.getElementById('midMid').innerHTML,
                document.getElementById('midRight').innerHTML,
            ]
            this.bot = [
                document.getElementById('botLeft').innerHTML,
                document.getElementById('botMid').innerHTML,
                document.getElementById('botRight').innerHTML,
            ]
        },
        placeMarker: function() { //Puts Marker on Grid. Executes 3 functions on click.
            this.board.forEach(item => item.addEventListener('click', () => {
                item.innerHTML = gameFlow.switchPlayer();
                gameFlow.cacheDom();
                gameFlow.playGame();
            }))
        },
        playGame: function() { //Runs interior of grid through a logic if/else checking for similarities
           return this.top[0] === this.top[1] && this.top[0] === this.top[2] && this.top[0] !== '' ? this.declareWinner()//Row
                : this.mid[0] === this.mid[1] && this.mid[0] === this.mid[2] && this.mid[0] !== '' ? this.declareWinner()//Row
                : this.bot[0] === this.bot[1] && this.bot[0] === this.bot[2] && this.bot[0] !== '' ? this.declareWinner()//Row
                : this.top[0] === this.mid[0] && this.top[0] === this.bot[0] && this.top[0] !== '' ? this.declareWinner()//Column
                : this.top[1] === this.mid[1] && this.top[1] === this.bot[1] && this.top[1] !== '' ? this.declareWinner()//Column
                : this.top[2] === this.mid[2] && this.top[2] === this.bot[2] && this.top[2] !== '' ? this.declareWinner()//Column
                : this.top[0] === this.mid[1] && this.top[0] === this.bot[2] && this.top[0] !== '' ? this.declareWinner()//Diagnol
                : this.top[2] === this.mid[1] && this.top[2] === this.bot[0] && this.top[2] !== '' ? this.declareWinner()//Diagnol
                : this.declareTie();
        },
        switchPlayer: function() { //Flips the marker from X to 0
            if (i % 2 != 0){
                i+=1;
                return player1.marker;
            }else {
                i+=1;
                return player2.marker;
            }
        },
        declareWinner: function() {
            i-=1; //Switches to last person who placed a marker
            
            const grid = document.getElementById('gridParent');
            setTimeout(function() {grid.id = 'showMe'}, 1500);
            
            const winner = `${this.switchPlayer()} Wins`;
            setTimeout(function() {grid.innerHTML = winner}, 1500);
        },
        declareTie: function () {
            if (tieTicker === 8){
                const grid = document.getElementById('gridParent');
                setTimeout(function() {grid.id= 'showMe'}, 1500);

                const winner = 'Fricken Tie';
                setTimeout(function() {grid.innerHTML = winner}, 1500);

            }else {tieTicker+=1;
            };
        }
    }
        
        return gameFlow.init();
}



//Start 2 player Game
function dosPlayer() {
    const firstPage = document.getElementById('start');
    firstPage.remove();
    const gamePage = document.getElementById('gridParent');
    gamePage.className = "toggle";
    return twoPlayer();
} 
function twoPlayer() {
    const player1 = new Player('X');
    const player2 = new Player('O');
    var i = 1;
    var tieTicker = 0;
    var gameFlow = {
        
        init: function(){ 
            this.cacheDom();
            this.placeMarker();
            },
        
        cacheDom: function(){ //Build 3 arrays. They are the rows.
            this.board = document.querySelectorAll('#gridParent > div');

            this.top = [
                document.getElementById('topLeft').innerHTML,
                document.getElementById('topMid').innerHTML,
                document.getElementById('topRight').innerHTML,
            ]
            this.mid = [
                document.getElementById('midLeft').innerHTML,
                document.getElementById('midMid').innerHTML,
                document.getElementById('midRight').innerHTML,
            ]
            this.bot = [
                document.getElementById('botLeft').innerHTML,
                document.getElementById('botMid').innerHTML,
                document.getElementById('botRight').innerHTML,
            ]
        },
        placeMarker: function() { //Puts Marker on Grid. Executes 3 functions on click.
            this.board.forEach(item => item.addEventListener('click', () => {
                item.innerHTML = gameFlow.switchPlayer();
                gameFlow.cacheDom();
                gameFlow.playGame();
            }))
        },
        playGame: function() { //Runs interior of grid through a logic if/else checking for similarities
           return this.top[0] === this.top[1] && this.top[0] === this.top[2] && this.top[0] !== '' ? this.declareWinner()//Row
                : this.mid[0] === this.mid[1] && this.mid[0] === this.mid[2] && this.mid[0] !== '' ? this.declareWinner()//Row
                : this.bot[0] === this.bot[1] && this.bot[0] === this.bot[2] && this.bot[0] !== '' ? this.declareWinner()//Row
                : this.top[0] === this.mid[0] && this.top[0] === this.bot[0] && this.top[0] !== '' ? this.declareWinner()//Column
                : this.top[1] === this.mid[1] && this.top[1] === this.bot[1] && this.top[1] !== '' ? this.declareWinner()//Column
                : this.top[2] === this.mid[2] && this.top[2] === this.bot[2] && this.top[2] !== '' ? this.declareWinner()//Column
                : this.top[0] === this.mid[1] && this.top[0] === this.bot[2] && this.top[0] !== '' ? this.declareWinner()//Diagnol
                : this.top[2] === this.mid[1] && this.top[2] === this.bot[0] && this.top[2] !== '' ? this.declareWinner()//Diagnol
                : this.declareTie();
        },
        switchPlayer: function() { //Flips the marker from X to 0
            if (i % 2 != 0){
                i+=1;
                return player1.marker;
            }else {
                i+=1;
                return player2.marker;
            }
        },
        declareWinner: function() {
            i-=1; //Switches to last person who placed a marker
            
            const grid = document.getElementById('gridParent');
            setTimeout(function() {grid.id = 'showMe'}, 1500);
            
            const winner = `${this.switchPlayer()} Wins`;
            setTimeout(function() {grid.innerHTML = winner}, 1500);
        },
        declareTie: function () {
            if (tieTicker === 8){
                const grid = document.getElementById('gridParent');
                setTimeout(function() {grid.id= 'showMe'}, 1500);

                const winner = 'Fricken Tie';
                setTimeout(function() {grid.innerHTML = winner}, 1500);

            }else {tieTicker+=1;
            };
        }
    }
        
        return gameFlow.init();
}





