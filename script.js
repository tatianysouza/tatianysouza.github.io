const texto = document.getElementById('texto');
const palavra = 'HELLOO';
const binario = palavra.split('').map(char => char.charCodeAt(0).toString(2)).join(' ');

let i = 0;
let decodificado = '';

const intervalo = setInterval(() => {
    if (binario[i] === ' ') {
        decodificado += String.fromCharCode(parseInt(binario.slice(i - 7, i), 2));
        i++; 
    }

    texto.textContent = decodificado + binario.slice(i);

    i++;

    if (i > binario.length) {
        clearInterval(intervalo);
        texto.textContent = decodificado;
    }
}, 75);


  
