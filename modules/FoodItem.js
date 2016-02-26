import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import transformMonth from '../filters/transformMonth'
import currentMonth from '../filters/currentMonth'

class FoodItem extends React.Component {
    render () {
        var FoodItem  = this.props.state;
        var foodParam = this.props.param;
        console.log(FoodItem, foodParam);

        return (
            <div className={currentMonth(FoodItem[foodParam].monthsActive)}>
                <h2>{FoodItem[foodParam].name}</h2>
                <p>Color: {FoodItem[foodParam].color}</p>
                <p>Description: {FoodItem[foodParam].description}</p>
                <p>Months active:
                    {
                        FoodItem[foodParam].monthsActive.map(function(month){
                            return transformMonth(month)
                        })
                    }
                </p>
            </div>
        )
    }
}

export default FoodItem
