export function generateStarArray(rating: number): string[] {
    const starArray: string[] = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            starArray.push("S"); // Full star
        } else if (i - rating < 0.5) {
            starArray.push("H"); // Half star
        } else {
            starArray.push("E"); // Empty star
        }
    }

    return starArray;
}