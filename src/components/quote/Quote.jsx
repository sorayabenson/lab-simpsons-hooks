import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ image, character, quote }) => (
    <figure aria-label='simpsons quote'>
        <img src={image} alt={character}/>
        <p>{quote}</p>
    </figure>
)

Quote.propTypes = {
    image: PropTypes.string,
    character: PropTypes.string,
    quote: PropTypes.string,
}

export default Quote;
