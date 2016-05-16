import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class FoodContainerView extends React.Component {
    render () {
        var AllFood = this.props.AllFood;

        // Creating my food list items as well as a link that takes the user to the individual food item page.
        var FoodList = Object.keys(AllFood).map(function(item) {
            return <li key={AllFood[item].name}>
                        <Link to={"/food/" + AllFood[item].name} className="image-container" activeClassName="active">
                            <img src={AllFood[item].backgroundImage} alt={AllFood[item].name} />
                        </Link>
                    </li>
        });

        return (
            <div>
                {!this.props.children ? <h1>What shall we grow?</h1> : null}
                <ul className={!this.props.children ? 'all-food-list' : 'all-food-list slim'}>
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
