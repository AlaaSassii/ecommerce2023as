export function generateStarArray(rating: number): string[] {
    const ratingArray: string[] = [];

    for (let i = 0; i < 5; i++) {
        if (rating >= i + 1) {
            ratingArray.push("S");
        } else if (rating >= i + 0.5) {
            ratingArray.push("H");
        } else {
            ratingArray.push("E");
        }
    }

    return ratingArray;
}
// done