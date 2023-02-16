const container = document.querySelector('#container');
const buttonSquareSize = document.querySelector('#button-square-size');
let promptResult = 256;
var mousePresionado = false;

/*função para detectar se o mouse esta'sendo presionado*/
document.addEventListener('mousedown', () => {
    mousePresionado = true;
});
document.addEventListener('mouseup', () => {
    mousePresionado = false;
});

function drawDivs(numberOfDivs){
    for (let index = 0; index < (numberOfDivs*numberOfDivs); index++) {
        const div = document.createElement('div');
        div.classList.add('blank');
        div.classList.remove('change-background-color-on-hover');
        container.appendChild(div);
    }
};
function drawnColors() {
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
}
drawDivs(16);
drawnColors();
buttonSquareSize.addEventListener('click', () => {
    let divSize = '1fr ';
    let promptResult = prompt('Write the number of squares per side.(maximum of 100)');
    container.style.gridTemplateColumns = divSize.repeat(promptResult);
    container.style.gridTemplateRows = divSize.repeat(promptResult);
    container.replaceChildren();
    drawDivs(promptResult);
    drawnColors();
});

