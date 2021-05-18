import React, { useState } from 'react';
import Button from '../components/quote/Button';
import Quote from '../components/quote/Quote';
import { getQuote } from '../services/simpsons-api';

const SimpsonsQuote = () => {
    const [quote, setQuote] = useState({});

    const handleClick = async () => {
        const quote = await getQuote();
        setQuote(quote);
    }

    return (
        <main>
            <Button onClick={handleClick}/>
            <Quote {...quote}/>
        </main>
    )
}

export default SimpsonsQuote;