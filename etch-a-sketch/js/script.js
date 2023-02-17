const container = document.querySelector('#container');
const buttonSquareSize = document.querySelector('#button-square-size');
const rangeSquareSize = document.querySelector('#range-square');
const rangeSquareValue = document.querySelector('#range-value');
rangeSquareSize.value = 16;
rangeSquareValue.textContent = 16;


function drawDivs(numberOfDivs){
    let divSize = '1fr ';
    container.style.gridTemplateColumns = divSize.repeat(numberOfDivs);
    container.style.gridTemplateRows = divSize.repeat(numberOfDivs);
    for (let index = 0; index < (numberOfDivs*numberOfDivs); index++) {
        const div = document.createElement('div');
        div.classList.add('blank');
        div.classList.remove('change-background-color-on-hover');
        container.appendChild(div);
    }
};
function drawnColors() {
    let mousePresionado = false;
    document.addEventListener('mousedown', () => {
        mousePresionado = true;
    });
    document.addEventListener('mouseup', () => {
        mousePresionado = false;
    });
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
    let promptResult = prompt('Write the number of squares per side.(maximum of 100)');
    container.replaceChildren();
    drawDivs(promptResult);
    drawnColors();
});


rangeSquareSize.addEventListener('input', (e) => {
    rangeSquareValue.textContent = rangeSquareSize.value;
});

rangeSquareSize.addEventListener('mouseup', (e) => {
    container.replaceChildren();
    drawDivs(rangeSquareSize.value);
    drawnColors();
});

