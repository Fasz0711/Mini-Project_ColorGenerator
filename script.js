const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

const color = document.querySelector('.color');
const rgb_value = document.querySelector('.rgb_value');
const button1= document.getElementById('copy_boton');
const button2= document.getElementById('background_boton');

red.addEventListener('input', changeColor );
green.addEventListener('input', changeColor );
blue.addEventListener('input', changeColor );

button1.addEventListener('click', function(){
    const rgb = rgb_value.textContent;
    navigator.clipboard.writeText(rgb);
    alert('Copied: ' + rgb);
}
);

button2.addEventListener('click', function(){
    const rgb = rgb_value.textContent;
    document.body.style.backgroundColor = rgb;
}
);

function changeColor(){
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    const rgb = `RGB(${r},${g},${b})`;

    rgb_value.textContent = rgb;
    color.style.backgroundColor = rgb;
    // document.body.style.backgroundColor = rgb;
}