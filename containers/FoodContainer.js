import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class FoodContainerView extends React.Component {
    render () {
        var AllFood = this.props.AllFood;

        // Creating my food list items as well as a link that takes the user to the individual food item page.
        var FoodList = Object.keys(AllFood).map(function(key) {
            return <li key={AllFood[key].name}>
                        <Link to={"/food/" + AllFood[key].name} className="image-container" activeClassName="active">
                            <img src={AllFood[key].backgroundImage} alt={AllFood[key].name} />
                        </Link>
                        <h3>
                            <Link to={"/food/" + AllFood[key].name} activeClassName="active">{AllFood[key].name}</Link>
                        </h3>
                    </li>
        });

        return (
            <div>
                <h1>Food List</h1>
                <ul className="all-food-list">
                    {FoodList}
                </ul>

                {/* This below shows FoodItemContainer.js if the /:parameter is present eg /carrots */}
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
const FoodContainer = connect(
    mapStateToProps
)(FoodContainerView)

export default FoodContainer
