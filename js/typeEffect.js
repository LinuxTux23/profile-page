// Script for Header Type Effect
let text = 'CodingSheep';
let velocity = 100;
let i = 0;
let typeArea = document.getElementById('typeEffectArea');
let typeCursor = document.getElementById('typeEffectCursor');

function typeWriter() {
    typeCursor.hidden = false;

    if(i < text.length) {
        typeArea.innerText += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }

}
