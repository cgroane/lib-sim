import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as BookReducer from './../../ducks/reducer';
import { Link } from 'react-router-dom'

class Nav extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <nav>
                <Link to="/browse" >Browse</Link>
                <Link to="/shelf" >My Shelf</Link>
                <Link to="/cart" >Cart</Link>

            </nav>
        )
    }
}

export default Nav;