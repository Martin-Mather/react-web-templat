import React from 'react';


//===========================  COMPONENTS
//===========================  COMPONENTS

function BlogPostsList({category}) {

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

            <div key={item.objectID} className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-primary">World</strong>
                    <h3 className="mb-0">{item.title}</h3>
                    <div className="mb-1 text-muted">Nov 12</div>
                    <p className="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                    <a href={item.url} className="stretched-link">Continue reading</a>
                </div>
                <div className="col-auto d-none d-lg-block text-center">
                    <svg className="bd-placeholder-img " width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                </div>
            </div>

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

