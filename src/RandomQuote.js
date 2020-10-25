import useApiData from './useApiData';
import './RandomQuoteStyle.css';

const RandomQuote = () => {

    const initialUrl = `https://programming-quotes-api.herokuapp.com/quotes/random`;
    const [quoteData, setUrl] = useApiData(initialUrl);

    return (
            <div className="RandomQuoteStyle">
                { quoteData && 
                        <blockquote>
                            <p>{quoteData.en}</p>
                            <p>Author: {quoteData.author}</p>
                        </blockquote>
                }
                <button className="btn" onClick={() => setUrl(initialUrl)}>Refresh</button>
            </div>
    )
}

export default RandomQuote;