import React from 'react';
import BlogSidebar from './BlogSidebar';
import BlogPostsList from './BlogPostsList';

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
            <Switch>
                <Route exact path={path}>
                    <BlogListView />
                </Route>
                <Route path={`${path}/:category`}>
                    <BlogListView />
                </Route>
            </Switch>
        </div>
    );
}

function BlogListView() {

    let { category } = useParams();

    //todo: jesli taka kategoria nie istnieje - powinna byc strona 404???

    return (
        <div>
            <header className={'page-head'}><h1>Blog {category}</h1></header>
            <div className={'width-holder'}>
                <div className={'two-cols-l'}>
                    <BlogPostsList category={category} />
                    <BlogSidebar category={category} />
                </div>
            </div>
        </div>
    );
}

export default Blog;






