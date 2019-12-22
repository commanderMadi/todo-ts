import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ReduxStoreState } from '../reducers';
import { Auth, checkAuthentication } from '../actions';
import { connect } from 'react-redux';

export interface HeaderProps {
    isAuthenticated: Auth;
    checkAuthentication: typeof checkAuthentication;
}

export class Header extends React.Component<HeaderProps> {
    onLogoutclick = () => {
        this.props.checkAuthentication(this.props.isAuthenticated);
    };

    render() {
        return (
            <div className='row'>
                <div className='col-sm'>
                    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
                        <Link className='navbar-brand' to='/'>
                            Tasks App
                        </Link>
                        <button
                            className='navbar-toggler'
                            type='button'
                            data-toggle='collapse'
                            data-target='#navbarNav'
                            aria-controls='navbarNav'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                        >
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div
                            className='collapse navbar-collapse'
                            id='navbarNav'
                        >
                            <ul id='nav-mobile' className='navbar-nav'>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/'>
                                        Home
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/tasks'>
                                        Tasks
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink className='nav-link' to='/profile'>
                                        Profile
                                    </NavLink>
                                </li>

                                {!this.props.isAuthenticated.auth && (
                                    <li className='nav-item'>
                                        <NavLink
                                            className='nav-link text-success'
                                            to='/login'
                                        >
                                            Login
                                        </NavLink>
                                    </li>
                                )}
                            </ul>
                            {this.props.isAuthenticated.auth && (
                                <button
                                    className='btn btn-sm btn-danger ml-auto'
                                    onClick={this.onLogoutclick}
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: ReduxStoreState) => {
    return {
        isAuthenticated: state.isAuthenticated
    };
};

export default connect(mapStateToProps, { checkAuthentication })(Header);
