function caesarCipher(s, k) {
    // Write your code here
    return s.split('').map(char => {
        // handle lowercase letters
        if (char >= 'a' && char <= 'z') {
            return String.fromCharCode(
                (char.charCodeAt(0) - 97 + k) % 26 + 97
            );
        }
        // handle uppercase letters
        if (char >= 'A' && char <= 'Z') {
            return String.fromCharCode(
                (char.charCodeAt(0) - 65 + k) % 26 + 65
            );
        }
        // keep other characters unchanged
        return char;
    }).join('');
}