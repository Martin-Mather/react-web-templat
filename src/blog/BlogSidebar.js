import React from 'react';

import {
    NavLink,
} from "react-router-dom";

class BlogSidebar extends React.Component {


    constructor(props) {
        super(props);
        this.category = this.props.category;
    }

    render() {

        return(
            <aside>

                <h3>Categories:</h3>

                <nav className={'sidebar-nav'}>
                   <NavLink to="/blog/category1" activeClassName="active">Category 1</NavLink>
                   <NavLink to="/blog/category2" activeClassName="active">Category 2</NavLink>
                   <NavLink to="/blog/category3" activeClassName="active">Category 3</NavLink>
                   <NavLink to="/blog/category4" activeClassName="active">Category 4</NavLink>
                </nav>

            </aside>
        );

    }
}



export default BlogSidebar;
