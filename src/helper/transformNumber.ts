function transformNumber(input: string): number {
    const [numberPart, decimalPart] = input.split('.');
    const number = parseFloat(numberPart);

    if (number >= 0.6 && number <= 0.9) {
        return Number((Math.ceil(number) + 1).toFixed(1));
    } else if (number >= 0.1 && number <= 0.4) {
        return Number(`${Math.floor(number)}.5`);
    } else if (number === 3) {
        return 3.5;
    } else {
        return Number(input);
    }
}