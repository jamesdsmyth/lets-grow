import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as actions from '../actions/action-creators'

class MyGardenContainerView extends React.Component {
    render () {
        var AllFood = this.props.AllFood;

        // getting all food items that have started growing.
        // I need to create a different list
        var touchedFoodList = Object.keys(AllFood).map(function (key) {
            console.log(AllFood[key].isGrowing)
            if(AllFood[key].isGrowing === true) {
                return <li key={AllFood[key].name}>
                        {AllFood[key].name}
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
