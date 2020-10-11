'use strict'

var markArray = [];

var MyAverage = function MyAverage(markArray) {
  this.markArray = markArray;
}

MyAverage.prototype.run = function() {
  this.form();
  this.marks();
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

MyAverage.prototype.marks = function() {
  var add = document.querySelector('[type=button]');
  add.addEventListener('click', event => {
    var input = document.querySelector('[type=text]');
    var newMark = input.value;
    markArray.push(newMark);
    input.value = '';
  })
}

var average1 = new MyAverage(markArray);
average1.run();
