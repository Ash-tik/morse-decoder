const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    var code = [];
    var string = [];
    var codeString = [];

    for (let i=0; i < expr.length; i += 10) {
        codeString.push(expr.slice((0 + i), (10 + i)));
    }

    for (let i=0; i < codeString.length; i++) {
        if (codeString[i] === '**********') {
            code[i] = ' ';
        } else {
            let a = [];
            a.length = 0;
            for (let j = 0; j < codeString[i].length; j += 2) {
                if (codeString[i].slice((0 + j), (2 + j)) === '00') {
                    continue;
                } else if (codeString[i].slice((0 + j), (2 + j)) === '10') {
                       a.push('.');
                } else if (codeString[i].slice((0 + j), (2 + j)) === '11') {
                    a.push('-');
                }
             }
            code[i] = a.join('');
        }
    }

    for (let i = 0; i < code.length; i++) {
        if (code[i] === ' ') {
            string.push(' ');
        } else {
            for (var key in MORSE_TABLE) {
                if (key === code[i]) {
                    string.push(MORSE_TABLE[key]);
                }
            }
        }
    }

    return string.join('');
}

module.exports = {
    decode
}