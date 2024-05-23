// JavaScript to handle opening and closing chatbot window
document.getElementById('openChatbot').addEventListener('click', function() {
    var chatbotWindow = document.getElementById('chatbotWindow');
    chatbotWindow.classList.toggle('open');
});

document.addEventListener('DOMContentLoaded', function() {
    var toggle = document.getElementById('nav-toggle');
    var menu = document.getElementById('nav-menu');

    toggle.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});