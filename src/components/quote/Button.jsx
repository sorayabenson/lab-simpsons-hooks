import React from 'react';
import PropTypes from 'prop-types';
import style from './quote.css';

const Button = ({ onClick }) => (
    <section className={style.button_wrapper}>
        <h3>press the button</h3>
        <p>*do it*</p>
        <button 
            aria-label='fetch'
            onClick={onClick}    
        >fetch!</button>
    </section>
)

Button.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Button;
