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
        // console.log('ticking');
        this.setState({ timer: this.state.timer + 1000 })
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

    render () {
        var somethingIsgrowing = false;
        var AllFood = this.props.AllFood;

        // getting all food items that have started growing.
        var touchedFoodList = Object.keys(AllFood).map(function (key) {

            if(AllFood[key].isGrowing === true) {

                somethingIsgrowing = true;

                var startTime = AllFood[key].startedGrowing;
                var diff = moment.duration(moment().diff(startTime)).humanize();
                var formattedDate = moment(startTime).format("h:mma, dddd MMMM Do");

                return <li key={AllFood[key].name}>
                            <h2>{AllFood[key].name}</h2>
                            <p>Started growing at {formattedDate}</p>
                            <p>Been growing for {diff}</p>
                            <button type="click" className="stop-growing button" onClick={() => this.stopGrowingClick(AllFood[key].name)}>Stop growing</button>
                        </li>
            }

        }.bind(this));

        return (
            <div>
                <h1>My Garden</h1>

                {!somethingIsgrowing ? <p>You currently do not have any plants growing.</p> : null}
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
