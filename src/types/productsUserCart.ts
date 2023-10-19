export type Product = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: { rate: number; count: number };
    title: string;
};

export type productUserCart = Product & { amount: number }

export type productsUserCart = productUserCart[]

