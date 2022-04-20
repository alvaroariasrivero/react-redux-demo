import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyBeer} from '../redux'

function HooksBeerContainer() {
  const [number, setNumber] = useState(1)
    const numOfBeers = useSelector(state => state.beer.numOfBeers)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of Beers - {numOfBeers}</h2>
        <input type='text' value={number} onChange={e => setNumber(e.target.value)}/>
        <button onClick={() => dispatch(buyBeer(number))}>Buy {number} Beers</button>
    </div>
  )
}

export default HooksBeerContainer