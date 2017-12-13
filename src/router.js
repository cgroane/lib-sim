import React from 'react';
import {Switch, Route} from 'react-router-dom';
import BrowseView from './components/Browse/BrowseView/BrowseView';
import BookDetails from './components/BookDetails/BookDetails';

export default(

    <Switch>
        <Route path="/browse" component={BrowseView} />
        <Route path="/:book_id/details" component={BookDetails}/>
    </Switch>

)