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
            <main>
                <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    <div class="col-md-6 p-lg-5 mx-auto my-5">
                        <h1 class="display-4 fw-normal">React JS Web Template</h1>
                        <p class="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
                        <a class="btn btn-outline-secondary" href="#">Coming soon</a>
                    </div>
                    <div class="product-device shadow-sm d-none d-md-block"></div>
                    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                </div>
                <div className={'container'}>
                <p>Hi I'm nice fgfg and empty yet home template</p>
                </div>

                <div className="container">
                    About
                </div>

                <div className="container">
                    Gallery
                </div>

                <div className="container">
                    Blog
                </div>
                <div className="container">
                    Contact
                </div>

            </main>
        );
    }
}

export default Home;





