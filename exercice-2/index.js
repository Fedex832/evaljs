'use strict';

var DrawBar = function DrawBar(sum, nbr) {
  this.sum = sum;
  this.nbr = nbr;
}

DrawBar.prototype.run = function() {
  this.bar();
}

DrawBar.prototype.bar = function() {
  var barFull = document.createElement('div');
  var barProgress = document.createElement('div');
  var nbr = this.nbr;
  var sum = this.sum;

  barFull.style.width = '100%';
  barFull.style.height = '30px';
  barFull.style.border = 'solid';
  barProgress.style.width = (nbr / sum) * 100 + '%'
  barProgress.style.height = '100%'
  barProgress.style.backgroundColor = 'purple';
  barFull.appendChild(barProgress);
  document.body.appendChild(barFull);
}

var bar1 = new DrawBar(100, 25);
bar1.run();
