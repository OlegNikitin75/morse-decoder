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
  let stringDecode = '';
  const arrStr = expr.match(/.{1,10}/g);
  arrStr.forEach(item => {
    if (item[0] === '*') {
      stringDecode += ' ';
    }
    if (item[0] === '0' || item[0] === '1') {
      const trimStr = item.replace(/^0+/, '')
        .match(/.{1,2}/g);
      trimStr.forEach((elem, index) => {
        if (elem === '10') {
          trimStr[index] = '.';
        }
        if (elem === '11') {
          trimStr[index] = '-';
        }
      });
      const codeStr = trimStr.join('');
      for (let key in MORSE_TABLE) {
        if (key === codeStr) {
          stringDecode += MORSE_TABLE[key];
        }
      }
    }
  });
  return stringDecode;
}

module.exports = {
  decode
}