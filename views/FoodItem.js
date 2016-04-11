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
        var bbb = moment().month();
        console.log(bbb);
        // map function to loop through each object item and get the key and value.
        var i = 0;
        var list = Object.keys(FoodItem.monthsActive).map(function(month) {
            i++;

            // month returns 'January true'
            // FoodItem[foodParam].monthsActive[month] returns the value true or false
            // 'inSeason' is either true or false
            var inSeason = FoodItem.monthsActive[month];
            var type = inSeason == true ? 'in-season' : 'not-in-season';

            return <li key={month} className={i == bbb ? type + ' current-month' : type}>
                        <span>
                            {month[0]}
                        </span>
                    </li>
        });

        var headerStyle = {
            backgroundImage: 'url(' + FoodItem.backgroundImage + ')'
        };

        return (
            <section className="food-item">
                <div className="content">
                    <header>
                        <h1>{FoodItem.name}</h1>
                    </header>
                    <ul className="calendar">
                        {list}
                    </ul>
                    <div className="description">
                        {!FoodItem.isGrowing ? <button type="click" className="grow button" onClick={growClick}>Grow!</button> : null}
                        {FoodItem.isGrowing ? <button type="click" className="stop-growing button" onClick={stopGrowClick}>Stop growing</button> : null}
                        <p>Color: {FoodItem.color}</p>
                        <p>Description: {FoodItem.description}</p>

                        {FoodItem.isGrowing ? <p>Started growing at {moment(FoodItem.startedGrowing).format("h:mma, dddd MMMM Do")}</p> : null}
                        {!FoodItem.isGrowing && FoodItem.startedGrowing ? <p>Stopped growing at {moment(FoodItem.stoppedGrowing).format("h:mma, dddd MMMM Do")}</p> : null}
                    </div>
                    <div className="image">
                        <img src={FoodItem.backgroundImage} alt={FoodItem.name} />
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
