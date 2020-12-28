import React from 'react';

function Home() {
    /* tu beda latest posts pobierane
    *  tu bedzie galeria pobierana
    *  hero slider zbudownay reactem
    *  jakies info -  pobierany z api - model page
    * */
    return <HomeTemplate />;
}


class HomeTemplate extends React.Component {

    render() {
        return (
            <div>
                <header className={'page-head'}><h1>Home</h1></header>
                <div className={'width-holder'}>
                <p>Hi I'm nice fgfg and empty yet home template</p>
                </div>
            </div>
        );
    }
}

export default Home;





