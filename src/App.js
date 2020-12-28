import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";

/*
   todo: blog sidebar nawigacja zaznaczajca sie
   todo: blog posts lists + podpiecie pod filter sidebar/categorie
   todo: Blog dostaje suffix category name
   todo: paginacja

 * todo Pozniej - zrobic Blog lista + single na obiekcie danych.
 * todo POZNIEJ - texty na stony  na obiekcie danych
 * todo POZNIEJ - Contact
 * todo POZNIEJ - About
 * todo Pozniej Home
 * todo: axios
 */

import Home from './home/home.js';
import Blog from './blog/Blog.js';
import About from './about/about.js';
import Contact from './contact/contact.js';
import Post from './post/Post.js';


class App extends React.Component {
    render() {

        return (
            <Router>
                <div>
                    <nav className={'top-nav'}>
                        <div className={'width-holder'}>
                            <ul>
                                <li>
                                    <NavLink exact to="/" activeClassName="active">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" activeClassName="active">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/blog/:category/:slug">
                            <Post />
                        </Route>
                        <Route path="/blog">
                            <Blog />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="*">
                            <Error404 />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}


function Error404() {


    return (
        <div>
            <header className={'page-head'}><h1>404</h1></header>
            <br/>
            <h3>
                We're sorry nothing has been found.
            </h3>
            <br/>

        </div>
    );
}

export default App;
