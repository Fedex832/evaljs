'use strict';

/*
 * Grid
 * @param {number} xAxis
 * @param {mumber} yAxis
 */

var Grid = function Grid(xAxis, yAxis) {
  this.xAxis = xAxis;
  this.yAxis = yAxis;
}

/*
 * run
 * @return this
 */

Grid.prototype.run = function() {
  this.matrix();
  setInterval(this.randColor, Math.floor(Math.random() * 2 + 1)* 1000);
  return this;
}

/*
 * matrix
 */

 Grid.prototype.matrix = function() {
    var matrix = document.createElement('table');

    for(var i = 1; i <= this.xAxis; i++) {
        var tr = document.createElement('tr');
        for(var j = 1; j <= this.yAxis; j++) {
            var td = document.createElement('td');
            td.style.border = 'solid';
            td.style.width = '20px';
            td.style.height = '20px';
            tr.appendChild(td);
        }
        matrix.appendChild(tr);
    }
    document.body.appendChild(matrix);
}

/*
 * randColor
 */

Grid.prototype.randColor = function() {
  var cell = document.querySelectorAll('td');
  cell.forEach(function(cell) {
    var randColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    cell.style.backgroundColor = randColor;
  });
}

var grid1 = new Grid(5, 5);
grid1.run();
