import React, {Component} from 'react';
import {connect} from 'react-redux';
import BrowseTile from  './../BrowseTile/BrowseTile';
import * as BookReducer from './../../../ducks/reducer';



class BrowseView extends Component {
    constructor(props) {
        super(props);

    }
    
    componentDidMount() {
        this.props.setBooks()
    }

    render(){
        var bookDisplay = this.props.books.map((cur, ind) => {
            return (
                <BrowseTile key={ind} title={cur.title} id={cur.book_id} />
            )
        })
        return (
            <div>
                {bookDisplay}
            </div>
        )
    }
}
const mapStateToProps = state => state

export default connect(mapStateToProps, BookReducer)(BrowseView)