import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import moment from 'moment'

class FoodItem extends React.Component {

    render () {
        var FoodItem  = this.props.state; // passing the state from FoodItemContainer
        console.log(FoodItem);
        var growClick = this.props.growClick; // passing the click event from FoodItemContainer
        var stopGrowClick = this.props.stopGrowClick;
        var currentMonth = moment().month() + 1;

        // map function to loop through each object item and get the key and value.
        var i = 0;
        var calendarMonths = Object.keys(FoodItem.monthsActive).map(function(month) {
            i++;

            // month returns 'January true'
            // FoodItem[foodParam].monthsActive[month] returns the value true or false
            // 'inSeason' is either true or false
            var inSeason = FoodItem.monthsActive[month];
            var type = inSeason == true ? 'in-season' : 'not-in-season';

            return <li key={month} className={i == currentMonth ? type + ' current-month' : type}>
                        <span>
                            {month[0]}
                        </span>
                    </li>
        });

        var x = 0;
        var instructions = FoodItem.instructions.map(function (item) {
            x++;
            return <li  key={x}>
                        <span>
                            {item}
                        </span>
                    </li>
        });
        var y = 999;
        var harvestInstructions = FoodItem.harvestInstructions.map(function (item) {
            y++;
            return <li  key={y}>
                        <span>
                            {item}
                        </span>
                    </li>
        });

        return (
            <section className="food-item">
                <div className="content">
                    <header>
                        <h1>{FoodItem.name}</h1>
                    </header>
                    <ul className="calendar">
                        {calendarMonths}
                    </ul>
                    <div className="image">
                        <div className="inner">
                            <img src={FoodItem.backgroundImage} alt={FoodItem.name} />
                        </div>
                    </div>
                    <div className="description">
                        <div className="inner">
                            {!FoodItem.isGrowing ? <button type="click" className="grow button" onClick={growClick}>Grow!</button>
                            : <button type="click" className="stop-growing button" onClick={stopGrowClick}>Stop growing</button>}
                            {FoodItem.isGrowing ? <p>Started growing at {moment(FoodItem.startedGrowing).format("h:mma, dddd MMMM Do")}</p> : null}
                            {!FoodItem.isGrowing && FoodItem.startedGrowing ? <p>Stopped growing at {moment(FoodItem.stoppedGrowing).format("h:mma, dddd MMMM Do")}</p> : null}
                            <p>Plant type: {FoodItem.type}</p>
                            <h3>How long until I can harvest them?</h3>
                            <p>Around {FoodItem.lengthOfGrowth} weeks</p>
                            <h3>What are they?</h3>
                            <p>{FoodItem.description}</p>
                            <h3>How to grow</h3>
                            <ol className="ordered-list">{instructions}</ol>
                            <h3>When to water</h3>
                            <p>You should water this every {FoodItem.whenToWater} {FoodItem.whenToWater == 1 ? 'day' : 'days'}</p>
                            <h3>When to harvest</h3>
                            <ul className="unordered-list">{harvestInstructions}</ul>
                            <h3>Sun exposure</h3>
                            <p>{FoodItem.sunExposure}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

FoodItem.PropTypes = {
    growClick: PropTypes.func.isRequired,
    stopGrowingClick: PropTypes.func.isRequired
}

export default FoodItem
