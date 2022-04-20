import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyBeer} from '../redux'

function HooksBeerContainer() {
    const numOfBeers = useSelector(state => state.beer.numOfBeers)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of Beers - {numOfBeers}</h2>
        <button onClick={() => dispatch(buyBeer())}>Buy Beer</button>
    </div>
  )
}

export default HooksBeerContainer