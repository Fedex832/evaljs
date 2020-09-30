'use strict';

var MyMorpionXO = function MyMorpionXO() {

}

MyMorpionXO.prototype.run = function() {
  this.grid();
}

MyMorpionXO.prototype.grid = function() {
  var grid = document.createElement('table');
  grid.style.width = '500px';
  grid.style.height = '500px';
  for(var i = 1; i <= 3; i++) {
    var tr = document.createElement('tr');
    var abc;
    if(i === 1){abc = 'A'};
    if(i === 2){abc = 'B'};
    if(i === 3){abc = 'C'};
    for(var j = 1; j <= 3; j++) {
      var td = document.createElement('td');
      td.classList.add(abc + j);
      td.style.border = 'solid';
      tr.appendChild(td);
    }
    grid.appendChild(tr);
  }
  document.body.appendChild(grid);
}

var grid1 = new MyMorpionXO();
grid1.run();
