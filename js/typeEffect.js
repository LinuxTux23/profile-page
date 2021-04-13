// Script for Header Type Effect
let text = 'CodingSheep';
let velocity = 100;
let i = 0;

function typeWriter() {
    let typeArea = document.getElementById('typeEffectArea');
    let typeCursor = document.getElementById('typeEffectCursor');
    typeCursor.hidden = false;

    if(i < text.length) {
        typeArea.innerText += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}
