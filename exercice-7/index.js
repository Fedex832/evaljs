'use strict'

var markArray = [];

var MyAverage = function MyAverage(markArray) {
  this.markArray = markArray;
}

MyAverage.prototype.run = function() {
  this.form();
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
  cal.value = 'Confirmer';
  cal.setAttribute('type', 'button');
  form.appendChild(cal);
  document.body.appendChild(form);
}

var average1 = new MyAverage(markArray);
average1.run();
