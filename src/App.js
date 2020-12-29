import React from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    Switch,
    Route,
    NavLink,
    Link,
} from "react-router-dom";


/*

   todo: dodac gallery/portfolio https://getbootstrap.com/docs/5.0/examples/album/
   todo: podlaczyc breadcrumb
   todo: dodac krotkei description pod kazdym page header
   todo: blog loading ladniejsze
   todo: blog posts lists + podpiecie pod filter sidebar/categorie
   todo: Blog dostaje suffix category name

   todo: paginacja

   todo: stwozyc model PAGES, posts etc symulujace API

 * todo Pozniej - zrobic Blog lista + single na obiekcie danych.
 * todo POZNIEJ - texty na stony  na obiekcie danych
 * todo POZNIEJ - Contact
 * todo POZNIEJ - About
 * todo Pozniej Home
 * todo: axios
 *
 * todo: footer
 */

import Home from './home/home.js';
import Blog from './blog/Blog.js';
import About from './about/about.js';
import Contact from './contact/contact.js';
import Post from './post/Post.js';


class App extends React.Component {
    render() {

        return (
            <HashRouter>

                <header>
                    <div class="collapse bg-dark" id="navbarHeader">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-8 col-md-7 py-4">
                                    <h4 class="text-white">About</h4>
                                    <p class="text-muted">Add some information about the album below, the author, or any other background context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off to some social networking sites or contact information.</p>
                                </div>
                                <div class="col-sm-4 offset-md-1 py-4">
                                    <h4 class="text-white">Menu</h4>
                                    <ul class="list-unstyled">
                                        <li>
                                            <NavLink exact to="/" className={'text-white'} activeClassName="active">Home</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/about" className={'text-white'} activeClassName="active">About</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/blog" className={'text-white'} activeClassName="active">Blog</NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/contact" className={'text-white'} activeClassName="active">Contact</NavLink>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="navbar navbar-dark bg-dark shadow-sm">
                        <div class="container">

                            <Link exact to="/" className={'navbar-brand d-flex align-items-center'} activeClassName="active">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
                                <strong>Your Logo</strong>
                            </Link>


                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                </header>

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

                <div className="container pt-4">
                    <hr className="featurette-divider"/>
                </div>

                <footer className="text-muted py-5">
                    <div className="container">
                        <p className="float-end mb-1">
                            <a href="#">Back to top</a>
                        </p>
                        <p className="mb-1">Album example is © Bootstrap, but please download and customize it for yourself!</p>
                        <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.0/getting-started/introduction/">getting started guide</a>.</p>
                    </div>
                </footer>

            </HashRouter>
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
