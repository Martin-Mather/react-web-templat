import React from 'react';


//===========================  COMPONENTS
//===========================  COMPONENTS

const BlogPostsList = ({category}) => {

    //STATES HANDLER
    const [stories, dispatchStories] = React.useReducer(
        storiesReducer,
        { data: [], isLoading: false, isError: false }
    );

    React.useEffect(() => {

        dispatchStories({ type: 'STORIES_FETCH_INIT' });
        getAsyncStories()
            .then(result => {
                dispatchStories({
                    type: 'STORIES_FETCH_SUCCESS',
                    payload: result.data.stories,
                });
            })
            .catch(() =>
                dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
            );

    }, []);


    return (
        <div>
            {stories.isError && <p>Something went wrong ...</p>}
            {stories.isLoading ? (
                <p>Loading ...</p>
            ) : (
                <List list={stories.data} />
            )}
        </div>
    );
}

const List = props =>
    props.list.map(item => (

        <article className="blog-post" key={item.objectID}>
            <h2 className="blog-post-title">{item.title}</h2>
            <p className="blog-post-meta">December 23, 2013 by <a href={item.url}>{item.author}</a></p>

            <p>Cum sociis natoque penatibus et magnis <a href={item.url}>dis parturient montes</a>, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
            <blockquote>
                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </blockquote>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
            <a href={item.url} >Continue reading</a>
        </article>

));


//===========================  DATA & VARIABLES
//===========================  DATA & VARIABLES


const initialStories = [
    {
        title: 'React',
        url: '/#/blog/fasdf/dsf',
        author: 'Jordan Walke',

        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: '/#/blog/fasdf/dsf',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },{
        title: 'Reduxghdfgh',
        url: '/#/blog/fasdf/dsf',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 5,
        points: 2,
        objectID: 2
    }

];

const storiesReducer = (state, action) => {
    switch (action.type) {

        case 'STORIES_FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false,
            };
        case 'STORIES_FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload,
            };
        case 'STORIES_FETCH_FAILURE':
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case 'REMOVE_STORY':
            return {
                ...state,
                data: state.data.filter(
                    story => action.payload.objectID !== story.objectID
                ),
            };

        default:
            throw new Error();
    }
};

const getAsyncStories = () =>
    new Promise(resolve =>
        setTimeout(
            () => resolve({ data: { stories: initialStories } }),
            2000
        )
    );



export default BlogPostsList;

