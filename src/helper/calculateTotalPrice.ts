import { productsUserCart } from "../types/productsUserCart";

export const calculateTotalPrice = (products: productsUserCart): number => {
    let totalPrice = 0;
    for (const product of products) {
        if (product.price && product.amount) {
            totalPrice += product.price * product.amount;
        }
    }

    return totalPrice;
}