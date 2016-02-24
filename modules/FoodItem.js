import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class FoodItemView extends React.Component {
    render () {
        var FoodItem  = this.props.FoodItem;
        console.log(FoodItem)
        return (
            <div>
                <h2>{this.props.params.foodName}</h2>
            </div>
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
const FoodItem = connect(
    mapStateToProps
)(FoodItemView)

export default FoodItem
