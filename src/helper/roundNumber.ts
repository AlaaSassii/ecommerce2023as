export const roundNumber = (number: number): number => {
    const decimalPart = number - Math.floor(number);

    if (decimalPart === 0.5) {
        return number;
    } else if (decimalPart >= 0.9) {
        return Math.ceil(number);
    } else if (decimalPart >= 0.6) {
        return Math.floor(number) + 0.5;
    } else if (decimalPart >= 0.3) {
        return Math.floor(number) + 0.5;
    } else if (decimalPart >= 0.1) {
        return Math.floor(number);
    } else {
        return Math.floor(number) - 1.0;
    }
}



