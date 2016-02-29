import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import FoodItem from './FoodItem'
import transformMonth from '../filters/transformMonth'
import currentMonth from '../filters/currentMonth'

class FoodItemComponentView extends React.Component {

    clickingSpan (word) {
        this.props.dispatch({
            type: 'TO_DO',
            name: word
        })
    }
    render () {
        const props = this.props;
        const { store } = this.context;
        // console.log(store);

        var FoodItemState  = this.props.FoodItem;
        // getting the food param from the url then in my rendered item I am referencing the param to get the correct object
        var param = this.props.params.foodName;
        // console.log(FoodItem, FoodItem[param]);
        return (
            <div>
            <span onClick={() => this.clickingSpan('hiyaaaaa')}>CLICK ME YEHHHH</span>
            <FoodItem param={param} state={FoodItemState} />
            </div>
        )
    }
}

// State = combined reducers so FoodState is a child reducer and currently contains the food.
// Just testing but below can return multiple states depending on what I want to get.
const mapStateToProps = (State) => {
    return {
        FoodItem: State.FoodState,
        James: State
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

// Need to mapStateToProps to use this up in the FoodView
const FoodItemComponent = connect(
    mapStateToProps
)(FoodItemComponentView)

export default FoodItemComponent
