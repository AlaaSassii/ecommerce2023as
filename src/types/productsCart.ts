import { Product } from "./singleProduct"

export type productCart = Product & { amount: number }

export type productsCart = productCart[]

