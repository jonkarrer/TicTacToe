class Player {
    constructor(name, marker) {
        this.name = name;
        this.marker = marker;
    }
}
      
(function(){
    const player1 = new Player('Jon', 'X');
    const player2 = new Player('Cassie', 'O');
    var i = 1;
    var gameFlow = {
        
        init: function(){ 
            this.cacheDom();
            this.placeMarker();
            },
        
        cacheDom: function(){
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
        placeMarker: function() {
            this.board.forEach(item => item.addEventListener('click', () => {
                item.innerHTML = gameFlow.switchPlayer();
                gameFlow.cacheDom();
                gameFlow.render();
            }))
        },
        render: function() {
            
           return this.top[0] === this.top[1] && this.top[0] === this.top[2] && this.top[0] !== '' ? this.declareWinner()//Row
                : this.mid[0] === this.mid[1] && this.mid[0] === this.mid[2] && this.mid[0] !== '' ? this.declareWinner()//Row
                : this.bot[0] === this.bot[1] && this.bot[0] === this.bot[2] && this.bot[0] !== '' ? this.declareWinner()//Row
                : this.top[0] === this.mid[0] && this.top[0] === this.bot[0] && this.top[0] !== '' ? this.declareWinner()//Column
                : this.top[1] === this.mid[1] && this.top[1] === this.bot[1] && this.top[1] !== '' ? this.declareWinner()//Column
                : this.top[2] === this.mid[2] && this.top[2] === this.bot[2] && this.top[2] !== '' ? this.declareWinner()//Column
                : this.top[0] === this.mid[1] && this.top[0] === this.bot[2] && this.top[0] !== '' ? this.declareWinner()//Diagnol
                : this.top[2] === this.mid[1] && this.top[2] === this.bot[0] && this.top[2] !== '' ? this.declareWinner()//Diagnol
                : console.log('Keep Playing');
        },
        switchPlayer: function() {
            if (i % 2 != 0){
                i+=1;
                return player1.marker;
            }else {
                i+=1;
                return player2.marker;
            }
        },
        declareWinner: function() {
            document.getElementById('gridParent').style.color = "red";
        }
    }
        
        gameFlow.init();
})()





