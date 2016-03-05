import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as actions from '../actions/action-creators'

class MyGardenContainerView extends React.Component {
    render () {
        return (
            <div>
                My Garden
                <p>Now need to list the saved items that I am growing.</p>
                <p>Could get back all the food again, do a foreach and list everything that has a value for the key 'isGrowing'</p>
                <p>This would then make this a container</p>
            </div>
        )
    }
}

const mapStateToProps = () => {
    return {
        Food: State.FoodState
    }
}

const MyGardenContainer = connect (
    mapStateToProps
)(MyGardenContainerView)

export default MyGardenContainer
