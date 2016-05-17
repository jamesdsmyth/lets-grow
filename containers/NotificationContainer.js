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

    waterClick (foodName) {
        this.props.dispatch(actions.justWatered(foodName));
    }

    checkPlants () {
        var AllFood = this.props.AllFood;

        var needsWatering = Object.keys(AllFood).map(function (item) {

            if(AllFood[item].isGrowing === true) {
                var lastWatered = AllFood[item].lastWatered;
                var diff = moment.duration(moment().diff(lastWatered, 'milliseconds'));

                // needs to add a time of when it was last watered. And then the difference between the last watered time and now is measured.
                var whenToWater = AllFood[item].whenToWater * (1000 * 10); // this equates to a minute if AllFood[item].whenToWater is '1'.

                // diff in milliseconds from the last time you watered the plants to the maximum time (whenToWater) from when next to water them
                if(diff._milliseconds > whenToWater) {
                    this.props.dispatch(actions.needsWatering(AllFood[item].name));
                }
            }
        }.bind(this));
    }

    render () {
        var AllFood = this.props.AllFood;
        var notificationClasses = 'notifications';
        var toWater = Object.keys(AllFood).map(function (item, i) {

            if((AllFood[item].isGrowing === true) && (AllFood[item].isWatered !== true)) {
                notificationClasses = 'notifications action-required';
                return <div key={i}>
                        <p key={i}>{AllFood[item].name}</p>
                        <button type="click" className="water-me button" onClick={() => this.waterClick(AllFood[item].name)}>Water me!</button>
                    </div>
            }
        }.bind(this));

        return (
            <section className={notificationClasses}>
                <span className="exclaimation">!</span>
                <div className="notification-items">
                    {toWater}
                </div>
            </section>
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
