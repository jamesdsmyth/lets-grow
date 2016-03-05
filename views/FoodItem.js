import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import currentMonth from '../filters/currentMonth'

class FoodItem extends React.Component {

    render () {
        var FoodItem  = this.props.state; // passing the state from FoodItemContainer
        var growClick = this.props.growClick; // passing the click event from FoodItemContainer
        var stopGrowClick = this.props.stopGrowClick
        // map function to loop through each object item and get the key and value.
        var list = Object.keys(FoodItem.monthsActive).map(function(month) {

            // month returns 'January true'
            // FoodItem[foodParam].monthsActive[month] returns the value true or false
            // 'inSeason' is either true or false
            var inSeason = FoodItem.monthsActive[month];
            var type = inSeason == true ? 'in-season' : 'not-in-season';

            return <li key={month} className={type}>{month}</li>
        });

        var headerStyle = {
            backgroundImage: 'url(' + FoodItem.backgroundImage + ')'
        };

        return (
            <section className="food-item">
                <header style={headerStyle}>
                    <h1>{FoodItem.name}</h1>
                </header>
                <ul className="calendar">
                    {list}
                </ul>
                <span onClick={growClick}>Start growing this item</span>
                <span onClick={stopGrowClick}>Stop growing this item</span>
                <p>Color: {FoodItem.color}</p>
                <p>Description: {FoodItem.description}</p>
                <p>Started growing on: {FoodItem.startedGrowing}</p>
                <p>Stopped growing on: {FoodItem.stoppedGrowing}</p>
            </section>
        )
    }
}

FoodItem.PropTypes = {
    growClick: PropTypes.func.isRequired,
    stopGrowingClick: PropTypes.func.isRequired
}

export default FoodItem
