import { useState, useEffect } from 'react'
import axios, { AxiosResponse, AxiosError } from 'axios'
import { singleProduct } from '../types/singleProduct';
const useGetSingleProduct = (id: string) => {
    const [product, setProduct] = useState<singleProduct | undefined>(undefined);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        setLoading(true)
        axios(`https://fakestoreapi.com/products/${id}`)
            .then((response: AxiosResponse) => {
                setLoading(false);
                setProduct(response.data);
            })
            .catch((error: AxiosError) => {
                setLoading(false);
                setError(error.message);
            })
    }, []);

    return { product, error, loading };
}

export default useGetSingleProduct