import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {white} from 'material-ui/styles/colors'
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="header-container">
            <div className="header__content">
                <Link className="header__title" to="/scroll">
                    <h1>Headscroll</h1>
                </Link>
                <div className="header__content header__content--profile">
                    <div className="">
                        <FontIcon className="fa fa-address-card header__icon" color={white}/>
                        <span className="button__badge">2</span>
                    </div>
                    <FontIcon className="material-icons header__icon" color={white}>account_circle</FontIcon>
                    <button className="button button--link" onClick={startLogout}>Logout</button>
                </div>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);