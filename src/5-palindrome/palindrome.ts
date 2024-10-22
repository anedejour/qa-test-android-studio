export const isPalindrome = (a: string): boolean => {
    const original = a.toString();
    const reversed = original.split('').reverse().join('');
    return original === reversed;
};
