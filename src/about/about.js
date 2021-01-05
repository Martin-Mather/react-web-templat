import Breadcrumbs from '../global/components/Breadcrumbs';

const About = () => {



    return (
        <div>
            <header className={'page-head'}>
                <div className={'container'}>
                    <h1>About</h1>
                    <p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur</p>

                </div>
            </header>
            <main className={'container'}>
                <Breadcrumbs />
                <p>About page content</p>
            </main>

        </div>
        );
}




export default About;