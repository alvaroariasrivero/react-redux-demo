import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux'

function HooksIceCreamContainer() {
  const [number, setNumber] = useState(1)
    const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCreams)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of Icecreams - {numOfIceCreams}</h2>
        <input type='text' value={number} onChange={e => setNumber(e.target.value)}/>
        <button onClick={() => dispatch(buyIceCream(number))}>Buy {number} Icecreams</button>
    </div>
  )
}

export default HooksIceCreamContainer