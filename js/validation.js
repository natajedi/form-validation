document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      let email = document.getElementById('email');
      let fullName = document.getElementById('fullName');
      let password = document.getElementById('password');
      let confirmPassword = document.getElementById('confirmPassword');
      let agree = document.getElementById('agree');
  
      let emailError = document.getElementById('emailError');
      let fullNameError = document.getElementById('fullNameError');
      let passwordError = document.getElementById('passwordError');
      let confirmPasswordError = document.getElementById('confirmPasswordError');
      let agreeError = document.getElementById('agreeError');
  
      let isValid = true;
  
      if (!email.validity.valid) {
          emailError.textContent = 'Некорректный email';
          isValid = false;
      } else {
          emailError.textContent = '';
      }
  
      if (!fullName.validity.valid) {
          fullNameError.textContent = 'Максимально допустимый размер ФИО 150 символов';
          isValid = false;
      } else {
          fullNameError.textContent = '';
      }
  
      if (!password.validity.valid || !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(password.value)) {
          passwordError.textContent = 'Пароль должен содержать как минимум 8 символов, включая одну цифру и одну букву';
          isValid = false;
      } else {
          passwordError.textContent = '';
      }
  
      if (password.value !== confirmPassword.value) {
          confirmPasswordError.textContent = 'Пароли не совпадают';
          isValid = false;
      } else {
          confirmPasswordError.textContent = '';
      }
  
      if (!agree.checked) {
          agreeError.textContent = 'Вы обязаны подтвердить, что хотите зарегистрироваться';
          isValid = false;
      } else {
          agreeError.textContent = '';
      }
  
      if (isValid) {
          localStorage.setItem('email', email.value);
          localStorage.setItem('fullName', fullName.value);
          localStorage.setItem('password', password.value);
          alert('Вы успешно создали аккаунт');
      }
    });
  });
  