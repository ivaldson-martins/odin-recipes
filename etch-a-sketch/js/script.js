const container = document.querySelector('#container');

/*
função para detectar se o mouse esta'sendo presionado
*/
var mousePresionado = false;

document.addEventListener('mousedown', () => {
    mousePresionado = true;
});
document.addEventListener('mouseup', () => {
    mousePresionado = false;
});




for (let index = 0; index < 256; index++) {
    const div = document.createElement('div');
    div.classList.add('blank');
    container.appendChild(div);
}
const divsInsideContainer = document.querySelectorAll('.blank');
divsInsideContainer.forEach(div => {

    div.addEventListener('mousedown', () => {
        div.classList.add('change-background-color-on-hover');
    });

    div.addEventListener('mouseover', () => {
        if (mousePresionado){
            div.classList.add('change-background-color-on-hover');
        };

    })
});