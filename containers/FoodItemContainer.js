import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import FoodItem from '../views/FoodItem'
import * as actions from '../actions/action-creators'

class FoodItemContainerView extends React.Component {

    startGrowingClick (foodName) {
        console.log('click to start growing', foodName)
        this.props.dispatch(actions.startGrowingCreator(foodName));
    }

    stopGrowingClick (foodName) {
        console.log('click to stop growing', foodName);
        this.props.dispatch(actions.stopGrowingCreator(foodName));
    }
    
    render () {
        var param = this.props.params.foodName; // getting the food param from the url
        var FoodItemState  = this.props.Food[param]; // getting the state from the reducer and just saving the individual foodItem

        return (
            <FoodItem
                state={FoodItemState}
                growClick={() => this.startGrowingClick(param)}
                stopGrowClick={() => this.stopGrowingClick(param)}
            />
        )
    }
}

// State = combined reducers so FoodState is a child reducer and currently contains the food.
// Just testing but below can return multiple states depending on what I want to get.
const mapStateToProps = (State) => {
    return {
        Food: State.FoodState
    }
}

// Need to mapStateToProps to use this up in the FoodItemContainerView
const FoodItemContainer = connect(
    mapStateToProps
)(FoodItemContainerView)

export default FoodItemContainer
