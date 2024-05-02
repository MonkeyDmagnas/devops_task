import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchDate = useCallback(async() => {
    const response = await fetch(url);
    const dataFetch = await response.json();
    // console.log(dataFetch.books);
        setData(dataFetch.books);
        setIsLoading(false);
    }, [url]);

    useEffect(() => {
        fetchDate();
    }, [url, fetchDate]);

    return {isLoading, data};       
};
