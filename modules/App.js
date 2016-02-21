import React from 'react'
import{ Link, IndexLink } from 'react-router'

export default React.createClass({
  render() {
    return (
        <div>
            <h1>React router tutorial</h1>
            <ul role="nav">
                <li>
                    <IndexLink to="/" activeClassName="active">Home</IndexLink>
                </li>
                <li>
                    <Link to="/about" activeClassName="active">About</Link>
                </li>
                <li>
                    <Link to="/all-food" activeClassName="active">Food</Link>
                </li>
            </ul>

            {this.props.children}
        </div>
    )
  }
})
