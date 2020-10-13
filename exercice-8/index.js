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

var PanPanPlouf = function PanPanPlouf() {
}

PanPanPlouf.prototype.run = function() {
  this.grid();
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
      tr.appendChild(td);
    }
    grid.appendChild(tr);
  }
  document.body.appendChild(grid);
}

var boat1 = new PanPanPlouf();
boat1.run();
