import {
    HashRouter,
    Switch,
    useRouteMatch,
    Route,
    useParams,
    NavLink,
    Link,
} from "react-router-dom";

const Breadcrumbs = () => {

     let { path } = useRouteMatch();
     let {category, slug} = useParams();

      return (
          <div>
              <nav aria-label="breadcrumb">

                      <Switch>
                          <Route path="/about">
                              <ol className="breadcrumb">
                                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                  <li className="breadcrumb-item active" aria-current="page">About</li>
                              </ol>
                          </Route>
                          <Route path="/blog">
                              {(() => {
                                  switch (path) {
                                      case '/blog':
                                          return (

                                              <ol className="breadcrumb">
                                                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                  <li className="breadcrumb-item active" aria-current="page">Blog</li>
                                              </ol>
                                          );

                                      case '/blog/:category':
                                          return  (
                                              <ol className="breadcrumb">
                                                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                  <li className="breadcrumb-item"><Link to="/blog">Blog</Link></li>
                                                  <li className="breadcrumb-item active" aria-current="page">{category}</li>
                                              </ol>
                                      );
                                      case '/blog/:category/:slug':
                                          return (
                                              <ol className="breadcrumb">
                                                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                                  <li className="breadcrumb-item"><Link to="/blog">Blog</Link></li>
                                                  <li className="breadcrumb-item"><Link to={`/blog/${category}`}>{category}</Link></li>
                                                  <li className="breadcrumb-item active" aria-current="page">{slug}</li>
                                              </ol>
                                          );
                                      default:
                                          return null;
                                  }
                              })()}


                          </Route>
                          <Route path="/contact">
                              <ol className="breadcrumb">
                                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                  <li className="breadcrumb-item active" aria-current="page">Contact</li>
                              </ol>
                          </Route>
                          <Route path="*">
                              <ol className="breadcrumb">
                                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                  <li className="breadcrumb-item active" aria-current="page">404</li>
                              </ol>
                          </Route>
                      </Switch>

              </nav>

          </div>

    );

}


export default Breadcrumbs;