'use strict'

var markArray = [];

var MyAverage = function MyAverage(markArray) {
  this.markArray = markArray;
}

MyAverage.prototype.run = function() {
  this.form();
  this.marks();
  this.compute();
}

MyAverage.prototype.form = function() {
  var form = document.createElement('form');
  var mark = document.createElement('input');
  mark.setAttribute('type', 'text');
  mark.setAttribute('placeholder', 'Note');
  form.appendChild(mark);
  var submit = document.createElement('input');
  submit.value = 'Ajouter';
  submit.setAttribute('type', 'button');
  form.appendChild(submit);
  var cal = document.createElement('input');
  cal.value = 'Moyenne';
  cal.setAttribute('type', 'button');
  form.appendChild(cal);
  document.body.appendChild(form);
}

MyAverage.prototype.marks = function() {
  var add = document.querySelector('[type=button]');
  add.addEventListener('click', event => {
    var input = document.querySelector('[type=text]');
    var newMark = input.value;
    markArray.push(newMark);
    input.value = '';
  })
}

MyAverage.prototype.compute = function() {
  var button = document.querySelector('[value=Moyenne]');
  var p = document.createElement('p');
  var average = 0;
  button.addEventListener('click', event => {
    for (var i = 0; i < markArray.length; i++) {
      average += markArray[i] / markArray.length;
    }
    p.textContent = 'Moyenne: ' + average;
    document.body.appendChild(p);
  })
}

var average1 = new MyAverage(markArray);
average1.run();
