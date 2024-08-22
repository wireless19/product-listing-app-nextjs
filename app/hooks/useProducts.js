"use client";
import { useState, useEffect } from "react";
import AOS from 'aos';
function useProducts() {

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: false, // Whether animation should happen only once - while scrolling down
        });
    }, []);

    const [searchTerm, setSearchTerm] = useState("");

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function getProducts() {
        setLoading(true);

        try {
            const response = await fetch(`https://dummyjson.com/products`);
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);


    function handleChange(e) {
        setSearchTerm(e.target.value);
    }

    const filteredData = data?.products?.filter(d => Object.values(d).join('').toLowerCase().match(searchTerm.toLowerCase()));

    return { filteredData, loading, error, searchTerm, handleChange};
}
export default useProducts;