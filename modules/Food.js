import React from 'react'

class Food extends React.Component {
    render () {
        console.log(this.props.params)
        return (
            <div>
                <h2>{this.props.params.repoName}</h2>
            </div>
        )
    }
}

export default Food
