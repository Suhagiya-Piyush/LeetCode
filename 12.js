// Integer to Roman Converter

var intToRoman = function(num) {
    const romanNumber = [
        { value : 1000, word : 'M'},
        { value : 900, word : 'CM'},
        { value : 500, word : 'D'},
        { value : 400, word : 'CD'},
        { value : 100, word : 'C'},
        { value : 90, word : 'XC'},
        { value : 50, word : 'L'},
        { value : 40, word : 'XL'},
        { value : 10, word : 'X'},
        { value : 9, word : 'IX'},
        { value : 5, word : 'V'},
        { value : 4, word : 'IV'},
        { value : 1, word : 'I'},
    ];
    if(num === 0){
            return '';
        }
        let romanWord = '';
        for(let i = 0; i < romanNumber.length; i++){
            while(num >= romanNumber[i].value){
                romanWord = romanWord + romanNumber[i].word;
                num = num - romanNumber[i].value;
            }
        }return romanWord;
};

console.log(intToRoman(10234));      //MMMMMMMMMMCCXXXIV