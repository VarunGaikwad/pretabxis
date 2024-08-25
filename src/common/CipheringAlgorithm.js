function CaesarCipher(str, shift) {
    shift = shift % 26;

    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (char.match(/[A-Z]/)) {
            let code = str.charCodeAt(i);
            let shiftedCode = ((code - 65 + shift + 26) % 26) + 65;
            result += String.fromCharCode(shiftedCode);
        } else if (char.match(/[a-z]/)) {
            // Handle lowercase letters
            let code = str.charCodeAt(i);
            let shiftedCode = ((code - 97 + shift + 26) % 26) + 97;
            result += String.fromCharCode(shiftedCode);
        } else {
            result += char;
        }
    }

    return result;
}

export default CaesarCipher;