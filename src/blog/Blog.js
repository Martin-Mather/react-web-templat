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
            <header className={'page-head'}>
                <div className={'container'}>
                    <h1>Blog {category}</h1>
                </div>
            </header>

            <main className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-8'}>
                        <BlogPostsList category={category} />

                        <nav className={'py-3'} aria-label="...">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                </li>
                                <li className="page-item"><a class="page-link" href="#">1</a></li>
                                <li className="page-item active" aria-current="page">
                                    <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                    <div className={'col-md-4'}>
                        <BlogSidebar category={category} />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Blog;






