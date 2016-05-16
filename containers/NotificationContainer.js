import React, { Proptypes } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions/action-creators'

import moment from 'moment'

class NotificationContainerView extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            timer: 0
        }
    }

    tick () {
        this.setState({ timer: this.state.timer + 1000 });
        this.checkPlants();
    }

    // no need to run every second, every 10 seconds will do
    componentDidMount () {
        this.interval = setInterval(
            this.tick.bind(this), 1000);
    }

    checkPlants () {
        // console.log('checking the plants')
        var AllFood = this.props.AllFood;

        var needsWatering = Object.keys(AllFood).map(function (item) {

            if(AllFood[item].isGrowing === true) {

                // NEEDS_WATERING
                var lastWatered = AllFood[item].lastWatered;
                var diff = moment.duration(moment().diff(lastWatered, 'milliseconds'));

                // needs to add a time of when it was last watered. And then the difference between the last watered time and now is measured.
                console.log(diff._milliseconds)
                // var readableDiff = diff.humanize();
                // console.log(diff);
                var whenToWater = AllFood[item].whenToWater * (1000 * 10); // this equates to a minute if AllFood[item].whenToWater is '1'.
                // console.log(whenToWater);

                // diff in milliseconds from the last time you watered the plants to the maximum time (whenToWater) from when next to water them
                if(diff._milliseconds > whenToWater) {
                    this.props.dispatch(actions.needsWatering(AllFood[item]));
                }
            }
        }.bind(this));


    }

    render () {
        var AllFood = this.props.AllFood;
        console.log(AllFood);

        // this needs to be on a timer also

        var water = Object.keys(AllFood).map(function (item) {
            // console.log(item)

            if((AllFood[item].isGrowing === true) && (AllFood[item].isWatered !== true)) {

                // NEEDS_WATERING
                // var lastWatered = AllFood[item].lastWatered;
                // var diff = moment.duration(moment().diff(lastWatered, 'milliseconds'));
                //
                // // needs to add a time of when it was last watered. And then the difference between the last watered time and now is measured.
                // // console.log(diff._milliseconds)
                // // var readableDiff = diff.humanize();
                // // console.log(diff);
                // var whenToWater = AllFood[item].whenToWater * (1000 * 10); // this equates to a minute if AllFood[item].whenToWater is '1'.
                // // console.log(whenToWater);
                //
                // // diff in milliseconds from the last time you watered the plants to the maximum time (whenToWater) from when next to water them
                // if(diff._milliseconds > whenToWater) {
                //     console.log('NEEDS TO BE WATERED NOW!!!!!')
                    return <p key={AllFood[item].name}>{AllFood[item].name}</p>
                // }
            }
        });

        return (
            <div>
                <h1>NOTIFICATION CENTER</h1>
                <p>This need to tell me when to water the plants.</p>
                <p>It needs to be on every page.</p>
                {water}
            </div>
        )
    }
}

const MapStateToProps = (State) => {
    return {
        AllFood: State.FoodState
    }
}

const NotificationContainer = connect(
    MapStateToProps
)(NotificationContainerView)

export default NotificationContainer
