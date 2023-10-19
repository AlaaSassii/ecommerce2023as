import { singleProduct } from "./singleProduct"

export type productUserCart = singleProduct & { amount: number }

export type productsUserCart = productUserCart[]

