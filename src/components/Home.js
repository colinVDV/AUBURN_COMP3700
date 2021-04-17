import React from 'react';
import CardProfile from '../components/MusicPlayer'

//-------------------------------------------------------------
// HomeScreen (Where music player lives)
//-------------------------------------------------------------
const Home = ({handleLogout}) => {
    return(
    <section return>
        <section className = "home">
            <nav>
                <h2>AUDEE-O</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <CardProfile/>
        </section>
    </section>
    )
}


export default Home;