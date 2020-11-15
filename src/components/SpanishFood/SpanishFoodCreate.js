import React, { useState } from 'react'

const SpanishFoodCreate = (props) => {

  const [nameOfFood, setNameOfFood] = useState('')
  const [isSpicy, setIsSpicy] = useState(false)
  const [numberofIngs, setNumberOfIngs] = useState('')
  const [hasBeans, setHasBeans] = useState(false)
  const [countryOfOrigin, setCountryOfOrigin] = useState('')
  const [doILike, setDoILike] = useState(false)

  const resetForm = () => {
    setNameOfFood('')
    setIsSpicy(false)
    setNumberOfIngs('')
    setHasBeans(false)
    setCountryOfOrigin('')
    setDoILike(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = {
      name: nameOfFood,
      spicy: isSpicy,
      ingredients: parseInt(numberofIngs),
      beans: hasBeans,
      origin: countryOfOrigin,
      like: doILike
    }
    fetch('http://localhost:3000/spanishfood', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': props.sessionToken
      },
      body: JSON.stringify(body)
    }).then(r => r.json())
      .then(rObj => {
        console.log(rObj)
        resetForm()
        props.fetchSpanishFoods()
      })
  }

  return (
    <div>
      <form>
        <label htmlFor="nameOfFood">Name</label>
        <input id="nameOfFood" value={nameOfFood} onChange={e => setNameOfFood(e.target.value)} />
        {/* <br/> */}
        <label htmlFor="isSpicy">Is spicy?</label>
        <input id="isSpicy" type="checkbox" checked={isSpicy} onChange={() => setIsSpicy(!isSpicy)} />
        <br/>
        <label htmlFor="numberofIngs">Number of Ingredients</label>
        <input id="numberofIngs" value={numberofIngs} onChange={e => setNumberOfIngs(e.target.value)} />
        {/* <br/> */}
        <label htmlFor="hasBeans">Has beans?</label>
        <input id="hasBeans" type="checkbox" checked={hasBeans} onChange={() => setHasBeans(!hasBeans)} />
        <br/>
        <label htmlFor="countryOfOrigin">Country of Origin</label>
        <input id="countryOfOrigin" value={countryOfOrigin} onChange={e => setCountryOfOrigin(e.target.value)} />
        {/* <br/> */}
        <label htmlFor="doILike">Do I Like This?</label>
        <input id="doILike" type="checkbox" checked={doILike} onChange={() => setDoILike(!doILike)} />
        <br/>
        <button id="resetForm" onClick={resetForm} type="button">Reset</button>
        <button onClick={handleSubmit}>Create Spanish Food!</button>
      </form>
    </div>
  )
}

export default SpanishFoodCreate