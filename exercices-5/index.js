'use strict';

var MyFormCheck = function MyFormCheck() {

}

MyFormCheck.prototype.run = function() {
  this.form();
}

MyFormCheck.prototype.form = function() {
  var form = document.createElement('form');
  var lastName = document.createElement('input');
  lastName.setAttribute('type', 'text');
  lastName.setAttribute('placeholder', 'Nom');
  form.appendChild(lastName);
  var firstName = document.createElement('input');
  firstName.setAttribute('type', 'text');
  firstName.setAttribute('placeholder', 'Prénom');
  form.appendChild(firstName);
  var email = document.createElement('input');
  email.setAttribute('type', 'text');
  email.setAttribute('placeholder', 'Email');
  form.appendChild(email);
  var password = document.createElement('input');
  password.setAttribute('type', 'text');
  password.setAttribute('placeholder', 'Mot de passe');
  form.appendChild(password);
  var submit = document.createElement('input');
  submit.value = 'Confirmer';
  submit.setAttribute('type', 'button');
  form.appendChild(submit);
  document.body.appendChild(form);
}

var form1 = new MyFormCheck();
form1.run();
