document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        const name = document.querySelector('.jjj').value;
        alert(`Hello ${name}`);
    }
})