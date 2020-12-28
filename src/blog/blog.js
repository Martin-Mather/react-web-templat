import React from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect,
    useRouteMatch,
    useParams
} from "react-router-dom";

function Blog() {

    let { path, url } = useRouteMatch();
    /*
      jakies info -  pobierany z api - model page
      tu beda posty pobierane wedlug daty + paginacja - model blog
     * z prawej kategorie
     * kategoria bedzie filtrowac posty
     * bedzie tez odzielna templatka dla postu
     */
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

    //todo: sidebar dodac z nawigacja zaznaczajca sie

    return (
        <div>
            <h3>Post List</h3>
            <PostsList category={category} />
        </div>
    );
}

class PostsList extends React.Component {

    //todo: jesli jest wybrana categoria filtruj posty
    //todo: jesli nie jest wyswietl wszytskie
    //todo: jesli taka kategoria nie istnieje - 404???

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






