import React from 'react';
import BlogSidebar from './BlogSidebar';

import {
    Switch,
    Route,
    useRouteMatch,
    useParams
} from "react-router-dom";

function Blog() {

    let { path } = useRouteMatch();

    return (
        <div>
            <header className={'page-head'}><h1>Blog</h1></header>
            <Switch>
                <Route exact path={path}>
                    <PostsListView />
                </Route>
                <Route path={`${path}/:category`}>
                    <PostsListView />
                </Route>
            </Switch>
        </div>
    );
}

function PostsListView() {

    let { category } = useParams();

    //todo: jesli taka kategoria nie istnieje - powinna byc strona 404???

    return (
        <div className={'width-holder'}>
            <h3>Post List</h3>
            <div className={'two-cols-l'}>
                <PostsList category={category} />
                <BlogSidebar category={category} />
            </div>
        </div>
    );
}

class PostsList extends React.Component {

    constructor(props) {
        super(props);
        this.category = this.props.category;
    }

    render() {

        if(this.category){

            return(
                <div>
                    <b>Category: {this.category}</b>
                    <p>Here is the list of category posts <b>{this.category}</b> </p>
                </div>
            );

        }else {

            return(
                <div>
                    <p>Here is the list of all posts</p>
                </div>
            );
        }

    }
}


export default Blog;






