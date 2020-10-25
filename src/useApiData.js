import { useEffect, useState} from 'react';

function useApiData(initialUrl) {
    const [quoteData, setQuoteData] = useState([]);
    const [url, setUrl] = useState(initialUrl);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url);
            const parsedData = await response.json();
            setQuoteData(parsedData);
            setUrl(undefined);
        }
        if(url) {
            fetchData();
        }
    }, [url])

    return [quoteData, setUrl];
}

export default useApiData;