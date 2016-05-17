import React from 'react'
import{ Link, IndexLink } from 'react-router'
import NotificationContainer from '../containers/NotificationContainer'

export default React.createClass({
    render() {
        return (
            <div>
                <header className="main-header">
                    <ul id="main-navigation">
                        <li>
                            <Link to="/food" activeClassName="active">
                                Food
                            </Link>
                        </li>
                        <li>
                            <Link to="/my-garden" activeClassName="active">
                                My Garden
                            </Link>
                        </li>
                    </ul>
                </header>

                <main className="main">
                    {this.props.children}
                </main>

                <NotificationContainer />
            </div>
        )
    }
});
