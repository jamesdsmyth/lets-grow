import React from 'react'

class FoodItem extends React.Component {
    render () {
        console.log(this.props.params)
        return (
            <div>
                <h2>{this.props.params.foodName}</h2>
            </div>
        )
    }
}

export default FoodItem
