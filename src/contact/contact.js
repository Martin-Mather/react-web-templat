import React from 'react';


function Contact() {

    /*
    * Tu bedzie tekst -  pobierany z api - model page
    *  formularz kontaktowy dzialajacy
    * */


    return (

        <div>
            <header className={'page-head'}>
                <div className={'container'}>
                    <h1>Contact Us</h1>
                    <p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur</p>

                </div>
            </header>
            <main className={'container'}>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Library</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
                <p>Contact page content</p>
            </main>

        </div>
    );
}

export default Contact;