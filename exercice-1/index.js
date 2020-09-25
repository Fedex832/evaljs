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

var grid1 = new Grid(5, 5);
grid1.run();
