import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Header extends Component {
    
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                 return [
                    <li key="1"><a href="/auth/google">Login With Google</a></li>,
                    // // first piece indicate top and bottom margin
                    // // second piece idicate let and right hand margin
                    // <li key="3" style={{margin: '0 10px'}}>
                    //     Credits: {this.props.auth.credits}
                    // </li>,
                    <li key="2"><a href="/auth/facebook">Login With Facebook</a></li>
                ];
            default:
                return (
                    <li><a href="/api/logout">Logout</a></li>
                );
        }
    }
    
    render() {
        return (
                <nav>
                    <div className="nav-wrapper">
                        <Link 
                            to={this.props.auth ? '/todo' : '/'}
                            className="left brand-logo"
                        >
                            Todo
                        </Link>
                        <ul className = "right">
                            { this.renderContent() }
                        </ul>
                    </div>
                </nav>
            );
    }
}

function mapStateToProps( { auth } ) {
    return { auth };
}
export default connect(mapStateToProps) (Header);
