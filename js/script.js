const questions = document.querySelectorAll('.accordion');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling; // Отримуємо наступний елемент (відповідь)
        const images = question.querySelector('.quest-img'); // Отримуємо обидві картинки
        console.log(images[0])
        
        
        // Змінюємо клас активності для плюса/мінуса
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

// login
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

logInButtonWindow.addEventListener('click', () =>{
    login.style.display = "none";
    mainSite.style.display = 'none';
    dowloadsSignIN.style.display = "flex";
    console.log('restart')
})