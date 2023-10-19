import { useState, useEffect } from 'react'
import { Products } from '../types/products';
import axios from 'axios';

export const useGetProductsByCategory = (category: string) => {
    const [products, setProducts] = useState<Products>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoading(true)
        axios.get<Products>(`https://fakestoreapi.com/products/category/${category}`)
            .then(response => {
                setLoading(false);
                setProducts(response.data);
            })
            .catch(error => {
                setLoading(false);
                setError(error.message);
            })

    }, [])
    return { products, loading, error }
}