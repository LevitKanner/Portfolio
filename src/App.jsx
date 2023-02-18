import './App.css'
import Header from "./components/Header.jsx";

function App() {

    return (
        <div className="App">
            <Header/>
            <p className={'font-monument text-7xl mt-10  text-[30px] sm:text-[68px] uppercase leading-tight font-bold text-center max-w-7xl'}
               id={'career-title'}>
                fullstack web developer
            </p>
            <p className={'text-center'}>I'm a software engineer with 4+ years experience</p>
        </div>
    )
}

export default App
