import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import moment from 'moment'

import currentMonth from '../filters/currentMonth'

class FoodItem extends React.Component {

    render () {
        var FoodItem  = this.props.state; // passing the state from FoodItemContainer
        console.log(FoodItem);
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
                <ul className="calendar">
                    {list}
                </ul>
                <h1>{FoodItem.name}</h1>
                {/*<header style={headerStyle}>
                    <h1>{FoodItem.name}</h1>
                </header>*/}

                <p>Color: {FoodItem.color}</p>
                <p>Description: {FoodItem.description}</p>

                {!FoodItem.isGrowing ? <button type="click" onClick={growClick}>Grow!</button> : null}
                {FoodItem.isGrowing ? <button type="click" onClick={stopGrowClick}>Stop growing</button> : null}
                {FoodItem.isGrowing ? <p>Started growing at {moment(FoodItem.startedGrowing).format("h:mma, dddd MMMM Do")}</p> : null}
                {!FoodItem.isGrowing && FoodItem.startedGrowing ? <p>Stopped growing at {moment(FoodItem.stoppedGrowing).format("h:mma, dddd MMMM Do")}</p> : null}
            </section>
        )
    }
}

FoodItem.PropTypes = {
    growClick: PropTypes.func.isRequired,
    stopGrowingClick: PropTypes.func.isRequired
}

export default FoodItem
