const naruto = document.querySelector('.naruto');

const jump = () => {
    naruto.classList.add('jump');

    setTimeout(() => {
        naruto.classList.remove('jump')
    }, 500);

}

document.addEventListener('keydown', jump)