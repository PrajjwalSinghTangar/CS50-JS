document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button').forEach((button)=>{
        button.onclick = () => {
            document.querySelector('#color').style.color = button.dataset.color
        }
    })
})

