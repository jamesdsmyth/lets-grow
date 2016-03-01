import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import FoodItem from '../modules/FoodItem'
import * as actions from '../actions/action-creators'

class FoodItemContainerView extends React.Component {

    startGrowingClick (foodName) {
        console.log('the food name is', foodName)
        this.props.dispatch(actions.startGrowingCreator(foodName));
    }

    render () {
        var param = this.props.params.foodName; // getting the food param from the url
        var FoodItemState  = this.props.FoodItem[param]; // getting the food state from the reducer

        return (
            <FoodItem state={FoodItemState} growClick={() => this.startGrowingClick()} />
        )
    }
}

// State = combined reducers so FoodState is a child reducer and currently contains the food.
// Just testing but below can return multiple states depending on what I want to get.
const mapStateToProps = (State) => {
    return {
        FoodItem: State.FoodState
    }
}

// Need to mapStateToProps to use this up in the FoodItemContainerView
const FoodItemContainer = connect(
    mapStateToProps
)(FoodItemContainerView)

export default FoodItemContainer
