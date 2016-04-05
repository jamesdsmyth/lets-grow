import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import moment from 'moment'

import * as actions from '../actions/action-creators'

class MyGardenContainerView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allFood: props.AllFood,
            timer: 0
        };
    }

    tick() {
        this.setState({ timer: this.state.timer + 1000 })
    }

    componentDidMount() {
        this.interval = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render () {
        var AllFood = this.state.allFood;
        // getting all food items that have started growing.
        var touchedFoodList = Object.keys(AllFood).map(function (key) {

            if(AllFood[key].isGrowing === true) {

                var startTime = AllFood[key].startedGrowing;
                var diff,duration,momentObj,incrementOneSecond;

                var diff = moment.duration(moment().diff(startTime)).humanize();

                return <li key={AllFood[key].name}>
                            <h3>{AllFood[key].name}</h3>
                            <p>Started growing at: {startTime}</p>
                            <p>duration is {diff}</p>
                        </li>
            }
        }.bind(this));

        return (
            <div>
                My Garden
                <ul>
                    {touchedFoodList}
                </ul>
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
