import React, {Component} from 'react';
import {connect} from 'react-redux';
import CartTile from  './../CartTile/CartTile';
import * as BookReducer from './../../../ducks/reducer';



class CartView extends Component {
    constructor(props) {
        super(props);

    }
    
    componentDidMount() {
        this.props.setBooks()
    }

    render(){
        var cartDisplay = this.props.cart.map((cur, ind) => {
            return (
                <CartTile key={ind} title={cur.title} id={cur.book_id} />
            )
        })
        return (
            <div>
                {cartDisplay}
            </div>
        )
    }
}
const mapStateToProps = state => state

export default connect(mapStateToProps, BookReducer)(CartView)