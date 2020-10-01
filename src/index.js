let first = ['', 'one ', 'two ', 'three ', 'four ','five ', 'six ', "seven ", 'eight ',
        'nine ', 'ten ', 'eleven ', 'twelve ','thirteen ', 'fourteen ', 'fifteen ',
        'sixteen ', 'seventeen ', 'eighteen ','nineteen '];
    
let second = ['', '', 'twenty ', 'thirty ', 'forty ','fifty ',
                'sixty ', 'seventy ', 'eighty ','ninety '];

module.exports = function toReadable (number) {
    if (number != '') {
        let a = '';
        a += toWords((parseInt((number / 100) % 10)), "hundred ");
        a += toWords(parseInt((number % 100)), "");
        return a.substr(0, a.length - 1);
    } else{
        return 'zero';
    }
}

function toWords(number, res) {
    let a = '';
    if (number > 19)
        a += second[parseInt(number / 10)] + first[number % 10];
    else
        a += first[number];
    if (number)
        a += res;

    return a;
}
