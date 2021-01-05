import React from 'react';
import {
    HashRouter,
    Switch,
    Route,
    NavLink,
    Link,
} from "react-router-dom";


/*

   todo: stwozyc pusty model PAGES i POSTS symulujacy pobieranie z API.
   tak samo jak bloglist jest zrobione na reducer
   kazda stona bedzie miala uniwersalne
   {id:1, type:page or category, title: fdasdf, description:fdasdfas, content:dsafasdfasd}
    todo: dac page info tez menu gornym
   todo: meta title i description zmieniac



   todo: kazdy post podobnie model
   {id:1, title: fdasdf, description:fdasdfas, content:dsafasdfasd, rating: 4.5, comments: {...}}


   todo: blog posts lists + podpiecie pod filter sidebar/categorie
   todo: breadrumb pownien pobierac post name i catrgory name zamiast slug
   todo: Blog - Kategoria - Nagłówek powinien pobierac category name zamiast slug.


   todo: fix 404 page
   todo: fix active links
   todo: dodac krotkei description pod kazdym page header
   todo: blog loading ladniejsze
   todo: pst w blogu powinien miec opcje lajka lub unlike oraz ilosc komentarzy
   tu opis jak przypinac handlery w funkacjach (https://www.educative.io/module/lesson/react-fundamentals/39VMDWKZzW9)

   todo: dodac gallery/portfolio page https://getbootstrap.com/docs/5.0/examples/album/
   todo: paginacja
   todo: blog search dodac z prawej??- jescli jest cateory szuka w cateory - lub pokazywac pod spodem liste autocomplete
   todo: POST komentarze add remove if your sessionid


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
import Error404 from './404/error404.js';



const App = () => {

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
                                <ul class="list-unstyled main-nav">
                                    <li>
                                        <NavLink exact to="/"  activeClassName="active">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/about"  activeClassName="active">About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/blog"  activeClassName="active">Blog</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact"  activeClassName="active">Contact</NavLink>
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
                            <strong>Logo</strong>
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
                        <a href="/">Back to top</a>
                    </p>
                    <p className="mb-1">Album example is © Bootstrap, but please download and customize it for yourself!</p>
                    <p className="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.0/getting-started/introduction/">getting started guide</a>.</p>
                </div>
            </footer>
        </HashRouter>
    );
}




export default App;
