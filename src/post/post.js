import React from 'react';
import {
    BrowserRouter as Router,
    HashRouter,
    Switch,
    Route,
    Link,
    NavLink,
    Redirect,
    useRouteMatch,
    useParams
} from "react-router-dom";


function Post() {

    let {category, slug} = useParams();

    //todo: sidebar dodac z nawigacja zaznaczajca sie
    //todo: strona 404 gdy nie ma postu?

    return (

        <div>
            <header className={'page-head'}><h1>Post Title</h1></header>
            <PostSingle category={category} slug={slug} />
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
