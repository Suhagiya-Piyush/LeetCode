//  Roman to Integer Converter

function romantoInt(num){
    const intNumber = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000,
    }
    let romanWord = 0;
    for(let i = 0; i < num.length; i++){
        let current = intNumber[num[i]];
        let next = intNumber[num[i + 1]];

        if(current < next){
            romanWord += next - current;
            i++;
        }else{
            romanWord += current;
        }
    }return romanWord;
}

let Word = 'CLIV';     // 154

console.log(romantoInt(Word));