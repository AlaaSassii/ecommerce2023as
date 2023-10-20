import { productsUserCart } from "../types/productsUserCart";

export const calculateTotalAmount = (products: productsUserCart): number => {

    let totalAmount = 0;

    for (const product of products) {
        if (product.amount) {
            totalAmount += product.amount;
        }
    }

    return totalAmount;
}