import React from 'react';



function Contact() {

    /*
    * Tu bedzie tekst -  pobierany z api - model page
    *  formularz kontaktowy dzialajacy
    * */

    const storiesReducer = (state, action) => {
        if (action.type === 'SET_STORIES') {
            return action.payload;
        } else {
            throw new Error();
        }
    };


    const data = [
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


    const [stories, dispatchStories] = React.useReducer(
        storiesReducer,
        []
    );


    setTimeout(()=>{
        dispatchStories({
            type: 'SET_STORIES',
            payload: data,
        });
    },3000);


    return (
        <div>
            <header className={'page-head'}><h1>Contact</h1></header>
            <div className={'width-holder'}>
                <p>Contact page content</p>
                <List list={stories} />
            </div>
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



export default Contact;