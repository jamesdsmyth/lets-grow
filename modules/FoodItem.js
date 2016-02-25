import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import transformMonth from '../filters/transformMonth'
import currentMonth from '../filters/currentMonth'

class FoodItemView extends React.Component {
    render () {
        var FoodItem  = this.props.FoodItem;
        // getting the food param from the url then in my rendered item I am referencing the param to get the correct object
        var param = this.props.params.foodName;
        console.log(FoodItem, FoodItem[param]);

        return (
            <div className={currentMonth(FoodItem[param].monthsActive)}>
                <h2>{FoodItem[param].name}</h2>
                <p>Color: {FoodItem[param].color}</p>
                <p>Description: {FoodItem[param].description}</p>
                <p>Months active:
                    {
                        FoodItem[param].monthsActive.map(function(month){
                            return transformMonth(month)
                        })
                    }
                </p>
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
