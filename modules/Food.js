import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class FoodView extends React.Component {
    render () {
        var AllFood = this.props.AllFood;

        // Creating my food list items as well as a link that takes the user to the individual food item page.
        var FoodList = Object.keys(AllFood).map(function(key) {
            return <li key={AllFood[key].name}>
                        <h2>
                            {AllFood[key].name}
                        </h2>
                        <p>
                            Link: <Link to={"/food/" + AllFood[key].name} activeClassName="active">{AllFood[key].name}</Link>
                        </p>
                        <p>
                            Color: {AllFood[key].color}
                        </p>
                    </li>
        });

        return (
            <div>
                Food list
                <ul>
                    {FoodList}
                </ul>

                {/* This below shows FoodItem.js if the /:parameter is present eg /carrots */}
                {this.props.children}
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

// Need to mapStateToProps to use this up in the FoodView
const Food = connect(
    mapStateToProps
)(FoodView)

export default Food
