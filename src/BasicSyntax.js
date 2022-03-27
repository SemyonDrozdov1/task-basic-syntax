export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    let comparison = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let convert = Object.keys(comparison);
    for (let i = 0; i < str.length; ++i) {
        if (convert.indexOf(str[i]) < convert.indexOf(str[i + 1]))
            result -= comparison[str[i]];
        else result += comparison[str[i]];
    }
    return result;
}
