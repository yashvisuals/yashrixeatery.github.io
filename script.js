// JavaScript to handle opening and closing chatbot window
document.getElementById('openChatbot').addEventListener('click', function() {
    var chatbotWindow = document.getElementById('chatbotWindow');
    chatbotWindow.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('nav-toggle');
    var menu = document.getElementById('nav-menu');
    const hamburger = document.querySelector('.fas fa-bars');
    const cross = document.querySelector('.fas fa-times');
    const navbar = document.querySelector('.navbar');
    const links = document.querySelectorAll('.nav-menu a'); // Select all navbar links

    toggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });

    hamburger.addEventListener('click', () => {
        navbar.classList.add('nav-active');
    });

    cross.addEventListener('click', () => {
        navbar.classList.remove('nav-active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('nav-active');
        });
    });

});