'use strict';

var MyNumberCheck = function MyNumberCheck() {

}

MyNumberCheck.prototype.run = function() {
  this.form();
  this.check();
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

MyNumberCheck.prototype.check = function() {
  var button = document.querySelector(('[type="button"]'));
  var p = document.createElement('p');
  button.addEventListener('click', event => {
    p.innerHTML = '';
    var numberCorrect = RegExp(/(06|07|01)\d{8}/);
    var numberValue = document.querySelector('[placeholder="Numero"]').value;
    if(numberCorrect.test(numberValue)) {
      p.textContent = 'Numero valide';
      p.style.color = 'green';
    }else {
      p.textContent = 'Numero invalide';
      p.style.color = 'red';
    }
    document.body.appendChild(p);
  })
}

var number1 = new MyNumberCheck();
number1.run();
