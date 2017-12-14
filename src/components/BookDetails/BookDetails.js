import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import * as BookReducer from './../../ducks/reducer';


class BookDetails extends Component {
    constructor(props, history) {
        super(props);

    }

    componentDidMount() {
        this.props.setBook(this.props.match.params.book_id)
    }

    render() {
        return (
            <div>
                {this.props.selectedBook.title}, {this.props.selectedBook.author}
                <button onClick={() => this.props.addBookToCart(this.props.selectedBook)} >
                    Add to Cart
                </button>
                
            </div>
        )
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, BookReducer)(BookDetails);