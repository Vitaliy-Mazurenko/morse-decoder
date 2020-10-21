const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let final = '';
    //   let newArray = expr.match(/[\s\S]{1,10}/g) || [];
    //   for (let i = 0, charsLength = expr.length; i < charsLength; i += 10)
    for (let i = 0; i <= expr.length; i += 10) {
        let morse = '';
        for (let j = 0; j <= (expr.substring(i, i + 10)).length; j += 2) {
            if ((expr.substring(i, i + 10)).slice(j, j + 2) === '**') {
                morse = morse + ' ' + '*';
            } else if ((expr.substring(i, i + 10)).slice(j, j + 2) === '11') {
                morse = morse + '-';
            } else if ((expr.substring(i, i + 10)).slice(j, j + 2) === '10') {
                morse = morse + '.';
            }
        }
        morse = morse.split(' ');
        for (let i = 0; i < morse.length; i++) {
            if (!!morse[i] && morse[i] !== '*') {
                final = final + MORSE_TABLE[morse[i]]
            } else if (morse[i] === '*') {
                final = final + ' '
            }
        }
    }
    return final.replace(/\s+/g, ' ') // заменить длинные пробелы одним
}

module.exports = {
    decode
}