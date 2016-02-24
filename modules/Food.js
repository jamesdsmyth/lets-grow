import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class FoodView extends React.Component {
    render () {
        var AllFood = this.props.AllFood;

        // Creating my food list items as well as a link that takes the user to the individual food item page.
        var foodList = AllFood.map(function (item) {
            return <li key={item.name}>
                        <h2>
                            {item.name}
                        </h2>
                        <p>
                            Link: <Link to={"/food/" + item.name} activeClassName="active">{item.name}</Link>
                        </p>
                        <p>
                            Color: {item.color}
                        </p>
                    </li>
        });

        return (
            <div>
                Food list
                <ul>
                    {foodList}
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
