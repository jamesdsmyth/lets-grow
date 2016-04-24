import React, { Proptypes } from 'react'
import { connect } from 'react-redux'

class NotificationContainerView extends React.Component {
    render () {
        var AllFood = this.props.AllFood;
        console.log(AllFood);

        var needsWatering = Object.keys(AllFood).map(function (item) {
            if(AllFood[item].isWatered == false) {
                return <p key={AllFood[item].name}>{AllFood[item].name}</p>
            }
        }.bind(this));

        return (
            <div>
                <h1>NOTIFICATION CENTER</h1>
                <p>This need to tell me when to water the plants.</p>
                <p>It needs to be on every page.</p>
                {needsWatering}
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
