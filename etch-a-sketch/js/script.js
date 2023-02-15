const container = document.querySelector('#container');

for (let index = 0; index < 256; index++) {
    const div = document.createElement('div');
    div.classList.add('blank');
    container.appendChild(div);
}
const divsInsideContainer = document.querySelectorAll('.blank');
divsInsideContainer.forEach(div => {
    div.addEventListener('mouseover', () => {
        div.classList.add('change-background-color-on-hover');
    })
});