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

                <div className="p-4 mb-3 bg-light">
                    <h4 className="font-italic">Categories:</h4>
                    <ol className="list-unstyled mb-0">
                        <li>
                            <NavLink to="/blog/category1" activeClassName="active">Category 1</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog/category2" activeClassName="active">Category 2</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog/category3" activeClassName="active">Category 3</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog/category4" activeClassName="active">Category 4</NavLink>
                        </li>
                    </ol>
                </div>

                <div className="p-4  rounded">
                    <h4 className="font-italic">About</h4>
                    <p className="mb-0">Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                </div>

                <div class="p-4">
                    <h4 class="font-italic">Contact</h4>
                    <ol class="list-unstyled">
                        <li><a href="/">Follow on Twitter</a></li>
                        <li><a href="/">Like on Facebook</a></li>
                        <li><a href="/">Email me</a></li>
                    </ol>
                </div>


            </aside>
        );

    }
}



export default BlogSidebar;
