exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit(num, bit) {
    return parseInt((('00000000'+(+num).toString(2)).substr(-8)).split('').reverse().join('').substr(bit - 1, 1));
  },

  base10(str) {
    return parseInt(str, 2);
  },

  convertToBinary(num) {
    return ('00000000'+(+num).toString(2)).substr(-8);
  },

  multiply(a, b) {
    const lenA = a.toString().length;
    const lenB = b.toString().length;
    const positionA = a.toString().indexOf('.');
    const positionB = b.toString().indexOf('.');
    let newA = a;
    let newB = b;
    let finalPower = 0;
    if(positionA != -1) {
      newA = a * Math.pow(10, lenA - positionA - 1);
      finalPower += (lenA - positionA - 1);
    }
    console.log(finalPower);
    if(positionB != -1) {
      newB = b * Math.pow(10, lenB - positionB - 1);
      finalPower += (lenB - positionB - 1);
    }
    console.log(a);
    console.log(b);
    console.log(newA);
    console.log(newB);
    console.log(finalPower);
    return (newA * newB) / Math.pow(10, finalPower);
  }
};
