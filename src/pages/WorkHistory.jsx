import Experience from "../components/Experience.jsx";

function WorkHistory() {
    const history = [
        {
            company: 'BigSpark',
            date: 'mar 2023 - present',
            role: 'Engineer',
            location: 'remote'
        },
        {
            company: 'Guaranty Trust Bank Ghana',
            date: 'jul 2021 - mar 2023',
            role: 'applications developer',
            location: 'on-site'
        },
        {
            company: 'Appgharage Limited',
            date: 'mar 2021 - sept 2021',
            role: 'Web developer',
            location: 'remote'
        },
        {
            company: 'Nikasemo Technologies',
            date: 'Aug 2019 - feb 2021',
            role: 'IOS mobile developer',
            location: 'hybrid'
        },{
            company: 'Polymorph labs',
            date: 'jun 2019 - Aug 2019',
            role: 'Backend Intern',
            location: 'on-site'
        },
    ]
    return (
        <div className={'px-[20px] sm:px-[40px]'}>
            <p className={'secondary-title py-4 sm:py-10'}> History </p>
            {history.map((h, i) => (
                <Experience key={i} company={h.company} role={h.role} location={h.location} date={h.date} />
            ))}
        </div>
    );
}

export default WorkHistory;