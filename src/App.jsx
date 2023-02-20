import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Footer from "./components/Footer.jsx";
import Contacts from "./components/Contacts.jsx";

function App() {
    return (
        <div className="App relative">
            <section id={'intro'}>
                <Header/>
                <Profile/>
                <AboutMe/>
                <Contacts/>
                <Footer/>
            </section>

        </div>
    )
}

export default App
