import { useState } from "react";

const useFetch = (fetchFunction) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async (...args) => {
        setError(null);
        try {
            const response = await fetchFunction(...args);
            setData(response);
        } catch (err) {
            console.error("Ошибка при загрузке данных:", err);
            setError("Произошла ошибка при загрузке данных");
            setData(null);
        }
    };

    return { data, error, fetchData };
};

export default useFetch;
