'use strict'

var board = [[0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
            [0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];

var colorShot = '';

var PanPanPlouf = function PanPanPlouf() {
}

PanPanPlouf.prototype.run = function() {
  this.grid();
  this.select();
}

PanPanPlouf.prototype.grid = function() {
  var grid = document.createElement('table');
  grid.style.width = '500px';
  grid.style.height = '500px';
  for (var i = 0; i < board.length; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < board[i].length; j++) {
      var td = document.createElement('td');
      td.style.border = 'solid';
      if(board[i][j] == 1) {
        td.classList.add('ship1')
      }else if(board[i][j] == 2) {
        td.classList.add('ship2')
      }else if(board[i][j] == 3) {
        td.classList.add('ship3')
      }else if(board[i][j] == 4) {
        td.classList.add('ship4')
      }else if(board[i][j] == 4) {
        td.classList.add('ship4')
      }else if(board[i][j] == 5) {
        td.classList.add('ship5')
      }else {
        td.classList.add('sea')
      }

      tr.appendChild(td);
    }
    grid.appendChild(tr);
  }
  document.body.appendChild(grid);
}

PanPanPlouf.prototype.select = function() {
  var td = document.querySelectorAll('td');
  td.forEach(function(item){
    item.addEventListener('click', event => {
      event.target.classList.contains('sea') ? colorShot = 'blue' : colorShot = 'red';
      event.target.style.backgroundColor = colorShot;
      event.target.classList.add('shot');
    })
  });

}

var boat1 = new PanPanPlouf();
boat1.run();
