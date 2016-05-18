import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import moment from 'moment'

import * as actions from '../actions/action-creators'

class MyGardenContainerView extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            timer: 0
        }
    }

    tick () {
        this.setState({ timer: this.state.timer + 1000 });
    }

    componentDidMount () {
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount () {
        clearInterval(this.interval);
    }

    stopGrowingClick (foodName) {
        this.props.dispatch(actions.stopGrowingCreator(foodName));
    }

    waterClick (foodName) {
        this.props.dispatch(actions.justWatered(foodName));
    }

    render () {
        var somethingIsgrowing = false;
        var AllFood = this.props.AllFood;

        // getting all food items that have started growing.
        var touchedFoodList = Object.keys(AllFood).map(function (item, i) {

            if(AllFood[item].isGrowing === true) {

                somethingIsgrowing = true;

                var startTime = AllFood[item].startedGrowing;
                var diff = moment.duration(moment().diff(startTime));
                var whenToWater = AllFood[item].whenToWater * (1000 * 5); // this equates to a minute if AllFood[item].whenToWater is '1'.
                var readableDiff = diff.humanize();
                var formattedDate = moment(startTime).format("h:mma, dddd MMMM Do");
                var formattedLastWateredDate =  moment(AllFood[item].lastWatered).format("h:mma, dddd MMMM Do");

                return <li key={i}>
                            <div className="food-header">
                                <h2>{AllFood[item].name}</h2>
                                <img src={AllFood[item].backgroundImage} alt={AllFood[item].name} />
                            </div>
                            <p><span>Planted: </span>{formattedDate}.</p>
                            <p>This item has been growing for {readableDiff}.</p>
                            <p>The last time you watered your {AllFood[item].name} was on {formattedLastWateredDate}</p>

                            <button type="click" className="stop-growing button" onClick={() => this.stopGrowingClick(AllFood[item].name)}>Stop growing</button>
                            {AllFood[item].isWatered == false ? <button type="click" className="water-me button" onClick={() => this.waterClick(AllFood[item].name)}>Water me!</button> : null}
                        </li>
            }

        }.bind(this));

        return (
            <div>
                <h1>My Garden</h1>
                {!somethingIsgrowing ? <p className="intro">You currently do not have any plants growing</p> : null}
                {somethingIsgrowing ? <ul className="currently-growing">{touchedFoodList}</ul> : null}
            </div>
        )
    }
}

const mapStateToProps = (State) => {
    return {
        AllFood: State.FoodState
    }
}

const MyGardenContainer = connect (
    mapStateToProps
)(MyGardenContainerView)

export default MyGardenContainer
