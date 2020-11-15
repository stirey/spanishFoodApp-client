import React, { useState, useEffect }from 'react';
import SpanishFoodCreate from './SpanishFoodCreate'
import SpanishFoodList from './SpanishFoodList'

const SpanishFood = (props) => {

    const [spanishFoods, setSpanishFoods] = useState([])

    useEffect(
        () => {
            fetchSpanishFoods()
        }, []
    )

    const fetchSpanishFoods = () => {
        fetch('http://localhost:3000/spanishfood/', {
            method: 'GET'
        }) .then(r => r.json())
           .then(rArr => setSpanishFoods(rArr))
    }

     return (
         <div>
             <SpanishFoodCreate sessionToken={props.sessionToken} fetchSpanishFoods={fetchSpanishFoods} />
             <hr/>
             <SpanishFoodList spanishFoods={spanishFoods} />
         </div>
     )
}

export default SpanishFood;
