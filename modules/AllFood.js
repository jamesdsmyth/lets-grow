import React from 'react'
import { Link } from 'react-router'

class AllFood extends React.Component {
    render () {
        return (
            <div>
                Repos
                <ul>
                    <li><Link to="/allfood/rackt/react-router" activeClassName="active">React router</Link></li>
                    <li><Link to="/allfood/facebook/react" activeClassName="active">React</Link></li>
                </ul>
                {/* will render `Repo.js` when at /repos/:userName/:repoName */}
                {this.props.children}
            </div>
        )
    }
}

export default AllFood
