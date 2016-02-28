import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import transformMonth from '../filters/transformMonth'
import currentMonth from '../filters/currentMonth'

class FoodItem extends React.Component {

    growClick () {
        // need to add
        console.log('clicked the grow button')
    }

    render () {
        var FoodItem  = this.props.state;
        var foodParam = this.props.param;

        // map function to loop through each object item and get the key and value.
        var list = Object.keys(FoodItem[foodParam].monthsActive).map(function(month) {

            // month returns 'January true'
            // FoodItem[foodParam].monthsActive[month] returns the value true or false
            console.log(month, FoodItem[foodParam].monthsActive[month]);

            // 'inSeason' is either true or false
            var inSeason = FoodItem[foodParam].monthsActive[month];
            var type = inSeason == true ? 'in-season' : 'not-in-season';

            return <li key={month} className={type}>{month}</li>
        });

        return (
            <section className="food-item">
                <header>
                    <h1>{FoodItem[foodParam].name}</h1>
                </header>
                <ul className="calendar">
                    {list}
                </ul>
                <p>Color: {FoodItem[foodParam].color}</p>
                <p>Description: {FoodItem[foodParam].description}</p>
                <button type="button" className="grow-me" onClick={this.growClick}>Grow me</button>
            </section>
        )
    }
}

export default FoodItem
