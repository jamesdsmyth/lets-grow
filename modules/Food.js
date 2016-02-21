import React from 'react'
import { Link } from 'react-router'

class Food extends React.Component {
    render () {
        return (
            <div>
                Food
                <ul>
                    <li><Link to="/food/carrots" activeClassName="active">Carrots</Link></li>
                    <li><Link to="/food/apples" activeClassName="active">Apples</Link></li>
                </ul>
                {/* will render `Item.js` when at /food/:foodName */}
                {this.props.children}
            </div>
        )
    }
}

export default Food
