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
                var continuedTime = startTime;
                var latestTime = null;



                // didnt even think. I don't even need this. All I need is the start time and a time.
                // incrementOneSecond();
                // function incrementOneSecond () {
                //     setTimeout(function () {
                //         latestTime = moment(continuedTime).add(1, 'second')//;.format();
                //         continuedTime = latestTime;
                //
                //         console.log(moment(latestTime).format());
                //         incrementOneSecond();
                //     }, 1000);
                // }

                var startCount = 0;
                var continuedCount = startCount;
                var latestCount = startCount;

                incrementOneSecond();
                function incrementOneSecond () {
                    setTimeout(function () {
                        latestCount = moment(continuedCount).add(1, 'second')//;.format();
                        continuedCount = latestCount;

                        console.log(moment(startCount).format());
                        incrementOneSecond();
                    }, 1000);
                }

                return <li key={AllFood[key].name}>
                            <h3>{AllFood[key].name}</h3>
                            <p>Started growing at: {startCount}</p>
                            <p>Has been growing for </p>
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
