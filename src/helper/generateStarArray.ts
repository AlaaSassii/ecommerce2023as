export const generateStarArray = (input: number): string[] => {
    const result: string[] = [];
    const roundNumber = Math.round(input)
    let remainingFraction = roundNumber - Math.floor(roundNumber);

    for (let i = 0; i < 5; i++) {
        if (i === 0) {
            if (remainingFraction >= 0.5) {
                result.push("H");
                remainingFraction -= 0.5;
            } else {
                result.push("E");
            }
        } else if (remainingFraction >= 0.5) {
            result.push("H");
            remainingFraction -= 0.5;
        } else {
            result.push("E");
        }
    }

    return result;
}