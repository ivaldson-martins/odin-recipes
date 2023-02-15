const container = document.querySelector('#container');

for (let index = 0; index < 256; index++) {
    const div = document.createElement('div');
    container.appendChild(div);
}