import React from 'react';
import'./SpanishFoodItem.css'

const SpanishFoodItem = (props) => {

    return(
        <div className="sf-card">
            <h3>{props.sf.nameOfFood}</h3>
            <p>It comes from {props.sf.countryOfOrigin}</p>
            <p>{ props.sf.doILikeThis ? "I do like this!" : "I don't like it." }</p>


        </div>
    )
}

export default SpanishFoodItem;