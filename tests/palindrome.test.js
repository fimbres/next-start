function palindrome(string){
    return typeof string === "string" ? string.split('').reverse().join('') : undefined;
}

describe('palindrome', () => {
    test('empty string', () => {
        const result = palindrome('');
        expect(result).toBe('');
    });
    
    test('undefined', () => {
        const result = palindrome();
        expect(result).toBe(undefined);
    });

    test('number', () => {
        const result = palindrome(8);
        expect(result).toBe(undefined);
    });
});
