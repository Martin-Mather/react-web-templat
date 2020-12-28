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
            {category}
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
        <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <span>{item.points}</span>
        </div>
));


//===========================  DATA & VARIABLES
//===========================  DATA & VARIABLES


const initialStories = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',

        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },{
        title: 'Reduxghdfgh',
        url: 'https://redux.js.org/',
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

