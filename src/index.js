module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
        return false;
    }
    else {
        for (let i = str.length - 1; i >= 0; i--) { //проверка совпадения элемента строки и элемента конфига скобок
            for (let j = 0; j < bracketsConfig.length; j++)
                if (str[i] === bracketsConfig[j][0]) { //берем первый элемент матрицы - это массив а в нем берем первый элемент массива
                    str = str.replace(bracketsConfig[j].join(''), ''); //собираем снова в строку получившийся массив
                }
            }
        }

        return str === '';

    }
}
