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

                <div className="container">
                    <div class="row mb-2">
                        <div class="col-md-6">
                            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div class="col p-4 d-flex flex-column position-static">
                                    <strong class="d-inline-block mb-2 text-primary">World</strong>
                                    <h3 class="mb-0">Featured post</h3>
                                    <div class="mb-1 text-muted">Nov 12</div>
                                    <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="stretched-link">Continue reading</a>
                                </div>
                                <div class="col-auto d-none d-lg-block">
                                    <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                <div class="col p-4 d-flex flex-column position-static">
                                    <strong class="d-inline-block mb-2 text-success">Design</strong>
                                    <h3 class="mb-0">Post title</h3>
                                    <div class="mb-1 text-muted">Nov 11</div>
                                    <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" class="stretched-link">Continue reading</a>
                                </div>
                                <div class="col-auto d-none d-lg-block">
                                    <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    About
                </div>

                <div className="container">
                    Gallery
                </div>
                <div className="container">
                    Contact
                </div>

            </main>
        );
    }
}

export default Home;





