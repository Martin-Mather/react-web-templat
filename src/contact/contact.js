import React from 'react';
import Breadcrumbs from '../global/components/Breadcrumbs';


const Contact = () => {

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
                <Breadcrumbs />
                <p>Contact page content</p>
            </main>

        </div>
    );
}

export default Contact;