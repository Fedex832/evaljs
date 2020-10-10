'use strict';

var MyFormCheck = function MyFormCheck() {

}

MyFormCheck.prototype.run = function() {
  this.form();
  this.check();
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

MyFormCheck.prototype.check = function() {
  var button = document.querySelector(('[type="button"]'));
  var ul = document.createElement('ul');
  button.addEventListener('click', event => {
    ul.innerHTML = '';
    var lastNameCorrect = RegExp(/\w+/);
    var liLastName = document.createElement('li');
    var lastNameValue = document.querySelector('[placeholder="Nom"]').value;
    if(lastNameCorrect.test(lastNameValue)) {
      liLastName.textContent = 'Nom valide';
      liLastName.style.color = 'green';
    }else {
      liLastName.textContent = 'Nom invalide';
      liLastName.style.color = 'red';
    }
    ul.appendChild(liLastName);

    var firstNameCorrect = RegExp(/\w+/);
    var liFirstName = document.createElement('li');
    var firstNameValue = document.querySelector('[placeholder="Prénom"]').value;
    if(firstNameCorrect.test(firstNameValue)) {
      liFirstName.textContent = 'Prénom valide';
      liFirstName.style.color = 'green';
    }else {
      liFirstName.textContent = 'Prénom invalide';
      liFirstName.style.color = 'red';
    }
    ul.appendChild(liFirstName);

    var emailCorrect = RegExp(/[\w.]+@\w+\.(net|com|fr|org)/);
    var liEmail = document.createElement('li');
    var emailValue = document.querySelector('[placeholder="Email"]').value;
    if(emailCorrect.test(emailValue)) {
      liEmail.textContent = 'Email valide';
      liEmail.style.color = 'green';
    }else {
      liEmail.textContent = 'Email invalide';
      liEmail.style.color = 'red';
    }
    ul.appendChild(liEmail);

    var passwordCorrect = RegExp(/\w+/);
    var liPassword = document.createElement('li');
    var passwordValue = document.querySelector('[placeholder="Mot de passe"]').value;
    if(passwordCorrect.test(passwordValue)) {
      liPassword.textContent = 'Mot de passe valide';
      liPassword.style.color = 'green';
    }else {
      liPassword.textContent = 'Mot de passe invalide';
      liPassword.style.color = 'red';
    }
    ul.appendChild(liPassword);
    document.body.appendChild(ul);
  })
}

var form1 = new MyFormCheck();
form1.run();
