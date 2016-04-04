import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import moment from 'moment'

import * as actions from '../actions/action-creators'

class MyGardenContainerView extends React.Component {
    render () {
        var AllFood = this.props.AllFood;

        // getting all food items that have started growing.
        // I need to create a different list
        var touchedFoodList = Object.keys(AllFood).map(function (key) {
            console.log(AllFood[key].isGrowing)
            if(AllFood[key].isGrowing === true) {

                var startTime = AllFood[key].startedGrowing;
                var diff,duration,momentObj,incrementOneSecond;

                var incrementOneSecond = function () {
                    setTimeout(function () {
                        diff = moment().diff(startTime);
                        var dcdcdc = moment.duration(diff).humanize();
                        momentObj = moment(diff);
                        console.log(diff, dcdcdc, momentObj)

                        {duration}
                        incrementOneSecond();
                        return dcdcdc;
                    }, 1000);
                }

                return <li key={AllFood[key].name}>
                            <h3>{AllFood[key].name}</h3>
                            <p>Started growing at: {startTime}</p>

                            <p>duration issssssaa


                                {incrementOneSecond()}
                            </p>
                        </li>
            }
        });

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
