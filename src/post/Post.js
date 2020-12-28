import React from 'react';
import BlogSidebar from '../blog/BlogSidebar';

import {
    useParams
} from "react-router-dom";


function Post() {

    let {category, slug} = useParams();

    return (

        <div>
            <header className={'page-head'}><h1>Post Title</h1></header>
            <div className={'width-holder'}>
                <div className={'two-cols-l '}>
                    <PostSingle category={category} slug={slug} />
                    <BlogSidebar category={category} />
                </div>
            </div>
        </div>
    );

}

class PostSingle extends React.Component {

    //todo: jesli nie ma takeigo postu - 404???

    constructor(props) {
        super(props);
        this.category = this.props.category;
        this.slug = this.props.slug;
    }

    render() {


        return(
            <div>
                <b>Post category: {this.category} </b>
                <b>Post slug: {this.slug} </b>
                <p>Yey, you are wieving the post</p>
            </div>
        );


    }
}


export default Post;
