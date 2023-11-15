document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
        event.preventDefault();

        let email = document.getElementById('email');
        let fullName = document.getElementById('fullName');
        let password = document.getElementById('password');
        let confirmPassword = document.getElementById('confirmPassword');
        let agree = document.getElementById('agree');

        /*let emailError = document.getElementById('emailError');*/
        let emailError = document.createElement('div');
        emailError.className = 'form-control__error';
        email.parentNode.insertBefore(emailError, email.nextSibling);
        /*let fullNameError = document.getElementById('fullNameError');*/
        let fullNameError = document.createElement('div');
        fullNameError.className = 'form-control__error';
        fullName.parentNode.insertBefore(fullNameError, fullName.nextSibling);
        /*let passwordError = document.getElementById('passwordError');*/
        let passwordError = document.createElement('div');
        passwordError.className = 'form-control__error';
        password.parentNode.insertBefore(passwordError, password.nextSibling);
        /*let confirmPasswordError = document.getElementById('confirmPasswordError');*/
        let confirmPasswordError = document.createElement('div');
        confirmPasswordError.className = 'form-control__error';
        confirmPassword.parentNode.insertBefore(confirmPasswordError, confirmPassword.nextSibling);
        /*let agreeError = document.getElementById('agreeError');*/
        let agreeError = document.createElement('div');
        agreeError.className = 'form-control__error';
        agree.parentNode.insertBefore(agreeError, agree.nextSibling);

        let isValid = true;

        if (!email.validity.valid) {
            emailError.textContent = 'Некорректный email';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            emailError.textContent = '';
            emailError.style.display = 'none';
        }

        if (!fullName.validity.valid) {
            fullNameError.textContent = 'Минимально допустимый размер ФИО 3 символа Максимально допустимый размер ФИО 150 символов';
            fullNameError.style.display = 'block';
            isValid = false;
        } else {
            fullNameError.textContent = '';
            fullNameError.style.display = 'none';
        }

        if (!password.validity.valid || !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&]).{8,}$/.test(password.value)) {
            passwordError.textContent = 'Пароль должен содержать как минимум 8 символов, включая одну цифру, одну строчную букву, одну прописную букву и один специальный символ';
            passwordError.style.display = 'block';
            isValid = false;
        } else {
            passwordError.textContent = '';
            passwordError.style.display = 'none';
        }

        if (password.value !== confirmPassword.value) {
            confirmPasswordError.textContent = 'Пароли не совпадают';
            emailError.style.display = 'block';
            isValid = false;
        } else {
            confirmPasswordError.textContent = '';
            confirmPasswordError.style.display = 'none';
        }

        if (!agree.checked) {
            agreeError.textContent = 'Вы обязаны подтвердить, что хотите зарегистрироваться';
            agreeError.style.display = 'block';
            isValid = false;
        } else {
            agreeError.textContent = '';
            agreeError.style.display = 'none';
        }

        if (isValid) {
            localStorage.setItem('email', email.value);
            localStorage.setItem('fullName', fullName.value);
            localStorage.setItem('password', password.value);
            alert('Вы успешно создали аккаунт');
        }

        agree.addEventListener('change', function() {
            if (!agree.checked) {
                agreeError.textContent = 'Вы обязаны подтвердить, что хотите зарегистрироваться';
            } else {
                agreeError.textContent = '';
            }
        });
    })
});