import React from 'react';
import SpanishFoodItem from './SpanishFoodItem'

const SpanishFoodList = (props) => {

    return (
        <div>
           {props.spanishFoods.map((sfObj, i) => <SpanishFoodItem sf={sfObj} key={i} />)}
        </div>
    )
}

export default SpanishFoodList;