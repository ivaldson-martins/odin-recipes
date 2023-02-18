const container = document.querySelector('#container');
const buttonSquareSize = document.querySelector('#eraser-button');
const rangeSquareSize = document.querySelector('#range-square');
const rangeSquareValue = document.querySelector('#range-value');
const colorPicker = document.querySelector('#input-color')
const drawnButton = document.querySelector('#drawn-button')

rangeSquareValue.textContent = `Grid edge size: ${rangeSquareSize.value}`;

function mouseIsPressed() {
    
};

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
            div.style.backgroundColor = colorPicker.value;
        });
    
        div.addEventListener('mouseover', () => {
            if (mousePresionado){
                div.style.backgroundColor = colorPicker.value;
            };
    
        })
    });
}
function eraseColors() {
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
            div.style.backgroundColor = "#ffffff";
        });
    
        div.addEventListener('mouseover', () => {
            if (mousePresionado){
                div.style.backgroundColor = "#ffffff";
            };
    
        })
    });
};
drawDivs(16);
drawnColors();
rangeSquareSize.addEventListener('input', (e) => {
        rangeSquareValue.textContent = `Grid edge size: ${rangeSquareSize.value}`;
    });
rangeSquareSize.addEventListener('mouseup', (e) => {
    container.replaceChildren();
    drawDivs(rangeSquareSize.value);
    drawnColors();
});


buttonSquareSize.addEventListener('click', () => {
    eraseColors();
});
drawnButton.addEventListener('click', () => {
    drawnColors();
});
