import React from 'react'
import { connect } from 'react-redux'
import { buyBeer, buyCake } from '../redux'

function ItemContainer(props) {
  return (
    <div>
        <h2>Items - {props.item}</h2>
        <button onClick={props.buyItem}>Buy Item</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake 
        ? state.cake.numOfCakes 
        : state.beer.numOfBeers

    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyBeer())

    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)