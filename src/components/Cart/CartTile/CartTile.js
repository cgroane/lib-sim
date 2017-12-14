import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import * as BookReducer from './../../../ducks/reducer';

class CartTile extends Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div>
                <Link to={`/${this.props.id}/details`} >{this.props.title}</Link>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, BookReducer)(CartTile)