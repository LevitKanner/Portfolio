import Header from "./components/Header.jsx";
import Profile from "./components/Profile.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Footer from "./components/Footer.jsx";
import Contacts from "./components/Contacts.jsx";
import Experience from "./components/Experience.jsx";
import WorkHistory from "./pages/WorkHistory.jsx";

function App() {
    return (
        <div className="App relative">
            <section id={'intro'}>
                <Header/>
                <Profile/>
                <AboutMe/>
                <WorkHistory/>
                <Contacts/>
                <Footer/>
            </section>

        </div>
    )
}

export default App
