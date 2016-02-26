import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import FoodItem from './FoodItem'
import transformMonth from '../filters/transformMonth'
import currentMonth from '../filters/currentMonth'

class FoodItemComponentView extends React.Component {
    render () {
        var FoodItemState  = this.props.FoodItem;
        // getting the food param from the url then in my rendered item I am referencing the param to get the correct object
        var param = this.props.params.foodName;
        console.log(FoodItem, FoodItem[param]);

        return (
            <FoodItem param={param} state={FoodItemState} />
        )
    }
}

// State = combined reducers so FoodState is a child reducer and current contains the food.
const mapStateToProps = (State) => {
    return {
        FoodItem: State.FoodState
    }
}

// Need to mapStateToProps to use this up in the FoodView
const FoodItemComponent = connect(
    mapStateToProps
)(FoodItemComponentView)

export default FoodItemComponent
