'use strict';
var player;
var cross = [];
var cercle = [];

var MyMorpionXO = function MyMorpionXO() {

}

MyMorpionXO.prototype.run = function() {
  this.grid();
  this.check();
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
      td.addEventListener('click', event => {
        event.target.style.backgroundImage = "url(" + player + ".png)";
        player === 'croix'
        ? cross.push(event.target.className)
        : cercle.push(event.target.className);
        console.log(j);
        this.check();
      });
      tr.appendChild(td);
    }
    grid.appendChild(tr);
  }
  document.body.appendChild(grid);
}

MyMorpionXO.prototype.check = function() {

  var score = document.createElement('p');
  score.textContent = 'Le joueur ' + player + ' gagne !';

  player === 'croix' ? player = 'rond' : player = 'croix';

  if(Object.values(cross).indexOf("A1") > -1
  && Object.values(cross).indexOf("A2") > -1
  && Object.values(cross).indexOf("A3") > -1) {
    document.body.appendChild(score);
  }
  if(Object.values(cross).indexOf("B1") > -1
  && Object.values(cross).indexOf("B2") > -1
  && Object.values(cross).indexOf("B3") > -1) {
    document.body.appendChild(score);
  }
  if(Object.values(cross).indexOf("C1") > -1
  && Object.values(cross).indexOf("C2") > -1
  && Object.values(cross).indexOf("C3") > -1) {
    document.body.appendChild(score);
  }
  if(Object.values(cross).indexOf("A1") > -1
  && Object.values(cross).indexOf("B1") > -1
  && Object.values(cross).indexOf("C1") > -1) {
    document.body.appendChild(score);
  }
  if(Object.values(cross).indexOf("A2") > -1
  && Object.values(cross).indexOf("B2") > -1
  && Object.values(cross).indexOf("C2") > -1) {
    document.body.appendChild(score);
  }
  if(Object.values(cross).indexOf("A3") > -1
  && Object.values(cross).indexOf("B3") > -1
  && Object.values(cross).indexOf("C3") > -1) {
    document.body.appendChild(score);
  }
  if(Object.values(cross).indexOf("A1") > -1
  && Object.values(cross).indexOf("B2") > -1
  && Object.values(cross).indexOf("C3") > -1) {
    document.body.appendChild(score);
  }
  if(Object.values(cross).indexOf("A3") > -1
  && Object.values(cross).indexOf("B2") > -1
  && Object.values(cross).indexOf("C1") > -1) {
    document.body.appendChild(score);
  }
  if(Object.values(cercle).indexOf("A1") > -1
  && Object.values(cercle).indexOf("A2") > -1
  && Object.values(cercle).indexOf("A3") > -1) {
    document.body.appendChild(score);
  }
  if(Object.values(cercle).indexOf("B1") > -1
  && Object.values(cercle).indexOf("B2") > -1
  && Object.values(cercle).indexOf("B3") > -1) {
    document.body.appendChild(score);
  }
  if(Object.values(cercle).indexOf("C1") > -1
  && Object.values(cercle).indexOf("C2") > -1
  && Object.values(cercle).indexOf("C3") > -1) {
    document.body.appendChild(score);
  }
  if(Object.values(cercle).indexOf("A1") > -1
  && Object.values(cercle).indexOf("B1") > -1
  && Object.values(cercle).indexOf("C1") > -1) {
    document.body.appendChild(score);
  }
  if(Object.values(cercle).indexOf("A2") > -1
  && Object.values(cercle).indexOf("B2") > -1
  && Object.values(cercle).indexOf("C2") > -1) {
    document.body.appendChild(score);
  }
  if(Object.values(cercle).indexOf("A3") > -1
  && Object.values(cercle).indexOf("B3") > -1
  && Object.values(cercle).indexOf("C3") > -1) {
    document.body.appendChild(score);
  }
  if(Object.values(cercle).indexOf("A1") > -1
  && Object.values(cercle).indexOf("B2") > -1
  && Object.values(cercle).indexOf("C3") > -1) {
    document.body.appendChild(score);
  }
  if(Object.values(cercle).indexOf("A3") > -1
  && Object.values(cercle).indexOf("B2") > -1
  && Object.values(cercle).indexOf("C1") > -1) {
    document.body.appendChild(score);
  }
}

var grid1 = new MyMorpionXO();
grid1.run();
