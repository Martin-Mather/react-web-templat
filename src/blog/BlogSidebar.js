import React from 'react';

class BlogSidebar extends React.Component {


    constructor(props) {
        super(props);
        this.category = this.props.category;
    }

    render() {

        return(
            <aside>
                <b>I'm a sidebar: {this.category}</b>
            </aside>
        );

    }
}



export default BlogSidebar;
