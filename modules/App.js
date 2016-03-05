import React from 'react'
import{ Link, IndexLink } from 'react-router'

export default React.createClass({
  render() {
    return (
        <div>
            <ul role="nav">
                <li>
                    <IndexLink to="/" activeClassName="active">Home</IndexLink>
                </li>
                <li>
                    <Link to="/my-garden" activeClassName="active">My Garden</Link>
                </li>
                <li>
                    <Link to="/food" activeClassName="active">Food</Link>
                </li>
            </ul>

            {this.props.children}
        </div>
    )
  }
});
