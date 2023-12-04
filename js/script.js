const questions = document.querySelectorAll('.accordion');

// система гармошки питання - відповідь
questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling; // Отримуємо наступний елемент (відповідь)
        const images = question.querySelector('.quest-img'); // Отримуємо обидві картинки
        console.log(images[0])
        
        question.classList.toggle('active');
        
        // Перевіряємо, чи відповідь відображена і відповідно змінюємо текст на плюс або мінус
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null; // Закрити відповідь
            images.src = '/img/plus-circle.svg'; // Змінити на плюс
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px'; // Відкрити відповідь
            images.src = '/img/Icon wrap.svg'; // Змінити на мінус
        }
    });
});


// LOGIN
// відкриваємо вікно логіну по кліку на кнопку
const login = document.getElementById('login');
const buttonLogin = document.getElementById('buttonLogin');
const mainSite = document.getElementById('mainSite');
const loginEmail = document.getElementById('loginEmail');
const logInButtonWindow = document.getElementById('logInButtonWindow');
const dowloadsSignIN = document.getElementById('dowloadsSignIN');

buttonLogin.addEventListener('click', () =>{
    mainSite.style.display = 'none';
    login.style.display = 'block';
})


// робимо кнопку клікабельною при введенні чогось в input
loginEmail.addEventListener('input', (event) =>{
    const text = event.target.value;
    if (text.trim() !== '') {
        logInButtonWindow.removeAttribute('disabled');
        logInButtonWindow.classList.add('active')
      } else {
        logInButtonWindow.setAttribute('disabled', true);
        logInButtonWindow.classList.remove('active')
      }
})

// після кліку на кнопку login в вікні логіну відкриваємо загрузку
logInButtonWindow.addEventListener('click', () =>{
    login.style.display = "none";
    mainSite.style.display = 'none';
    dowloadsSignIN.style.display = "flex";
})

// відсліджуємо загрузку щоб по закінченню відкрити платформу
const platform = document.getElementById('platform');
const progressBar = document.querySelector('.progress');
progressBar.addEventListener('animationend', () => {
    dowloadsSignIN.style.display = "none";
    platform.style.display = 'block'
});

// FORGOT PASSWORD
// При кліку на кнопку "забцла пароль" в вікні логіну відкриваємо вікно зміни паролю
const forgotPasswordButton = document.getElementById('forgot-password');
const resetPasswordWindow = document.getElementById('resetPasswordWindow');
forgotPasswordButton.addEventListener('click', () =>{
    login.style.display = "none";
    mainSite.style.display = 'none';
    resetPasswordWindow.style.display = "block";
})

// При введені в inputForgotPassword робимо її клікабельною
const resetPasswordInput = document.getElementById('resetPasswordInput');
const resetPasswordButton = document.getElementById('resetPasswordButton');
resetPasswordInput.addEventListener('input', (event) =>{
    const text = event.target.value;
    if (text.trim() !== '') {
        resetPasswordButton.removeAttribute('disabled');
        resetPasswordButton.classList.add('active')
      } else {
        resetPasswordButton.setAttribute('disabled', true);
        resetPasswordButton.classList.remove('active')
      }
})

// При введені в inputForgotPassword натискаємо на Reset password і показуємо емейл
const emailResetPasswordWindow = document.getElementById('email-reset-password');
resetPasswordButton.addEventListener('click', () =>{
    resetPasswordWindow.style.display = "none";
    emailResetPasswordWindow.style.display = 'flex'
})

// В емейлі натискаємо кнопку reset password i відкриваємо вікно для збросу пароля
const resetPasswordEmailButton = document.getElementById('reset-password-email-button');
const addNewPasswordWindow = document.getElementById('add-new-password-window');
resetPasswordEmailButton.addEventListener('click', () =>{
    emailResetPasswordWindow.style.display = 'none';
    addNewPasswordWindow.style.display = 'block';
})

// Вводимо нові паролі, звіряємо їх на схожість і кількість символів і робимо кнопку клікабельною
const newPasswordInput = document.querySelectorAll('.new-password-input');
newPasswordInput.forEach(input => {
    input.addEventListener('input', () => {
        const input1 = newPasswordInput[0].value;
        const input2 = newPasswordInput[1].value;

        if (input1.length >= 8 && input2.length >= 8) {
            resetNewPasswordButton.removeAttribute('disabled');
            resetNewPasswordButton.classList.add('active');
        } else {
            resetNewPasswordButton.setAttribute('disabled', true);
            resetNewPasswordButton.classList.remove('active');
        }
    });
});

// Після того як кнопка стала клкбельна, відкриваємо вікно про успішне змінення паролю
const resetNewPasswordButton = document.getElementById('resetNewPasswordButton');
const SuccsesSetNewPassword = document.getElementById('succses-set-new-password');
resetNewPasswordButton.addEventListener('click', () => {
    addNewPasswordWindow.style.display = 'none';
    SuccsesSetNewPassword.style.display = 'block';
})

// По кліку на логін після скидування паролю, відкриваємо вікно логіну
const resetNewPasswordLoginButton = document.getElementById('resetNewPasswordLoginButton');
resetNewPasswordLoginButton.addEventListener('click', () => {
    SuccsesSetNewPassword.style.display = 'none';
    login.style.display = "block";
})