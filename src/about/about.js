function About() {
    /*
        txt informacyjny - pobierany z api - model page
        jakas galeria z modalem pobierana przy pomocy axios
      * */
    return (
        <div>
            <header className={'page-head'}>
                <div className={'container'}>
                    <h1>About</h1>
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
                <p>About page content</p>
            </main>

        </div>
        );
}




export default About;