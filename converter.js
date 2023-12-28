function convertText() {
    const inputText = document.getElementById('inputText').value;
    const fromLayout = document.getElementById('fromLayout').value;
    const toLayout = document.getElementById('toLayout').value;

    const convertedText = convertLayout(inputText, fromLayout, toLayout);

    document.getElementById('output').textContent = `Converted Text: ${convertedText}`;
}

function convertLayout(text, fromLayout, toLayout) {
    const layouts = {
        'en': ['qwertyuiop[]\\', 'asdfghjkl;\'', 'zxcvbnm,./?'],
        'ru': ['йцукенгшщзхъ\\', 'фывапролджэё', 'ячсмитьбю.,'],
        'uk': ['йцукенгшщзхї\\', 'фівапролджєґ', 'ячсмитьбю.,']
    };

    const fromLayoutTable = layouts[fromLayout];
    const toLayoutTable = layouts[toLayout];

    return text.split('').map(char => {
        const row = fromLayoutTable.find(row => row.includes(char.toLowerCase()));
        if (row) {
            const index = fromLayoutTable.indexOf(row);
            const newChar = toLayoutTable[index][row.indexOf(char.toLowerCase())];
            return char === char.toLowerCase() ? newChar : newChar.toUpperCase();
        } else {
            return char;
        }
    }).join('');
}
