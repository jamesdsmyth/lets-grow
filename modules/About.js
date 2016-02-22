import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

class AboutView extends React.Component {
    render () {
        var AllFood = this.props.AllFood;

        console.log(AllFood)
        return (
            <div>
                About
                <p>
                    {AllFood[0].type}
                </p>
            </div>
        )
    }
}

// State = combined reducers so FoodState is a child reducer and current contains the food.
const mapStateToProps = (State) => {
    return {
        AllFood: State.FoodState
    }
}

// Need to mapStateToProps to use this up in the AboutView
const About = connect(
    mapStateToProps
)(AboutView)

export default About
