import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class FoodItemView extends React.Component {
    render () {
        var FoodItem  = this.props.FoodItem;
        // getting the food param from the url then in my rendered item I am referencing the param to get the correct object
        var param = this.props.params.foodName;
        console.log(FoodItem, FoodItem[param]);

        return (
            <div>
                <h2>{FoodItem[param].name}</h2>
                <p>{FoodItem[param].description}</p>
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
