'use strict';

var MyNumberCheck = function MyNumberCheck() {

}

MyNumberCheck.prototype.run = function() {
  this.form();
}

MyNumberCheck.prototype.form = function() {
  var form = document.createElement('form');
  var number = document.createElement('input');
  number.setAttribute('type', 'text');
  number.setAttribute('placeholder', 'Numero');
  form.appendChild(number);
  var submit = document.createElement('input');
  submit.value = 'Confirmer';
  submit.setAttribute('type', 'button');
  form.appendChild(submit);
  document.body.appendChild(form);
}

var number1 = new MyNumberCheck();
number1.run();
