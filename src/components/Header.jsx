const Header = () => {
    const socials = [
        {name: 'Twitter', link: 'https://twitter.com/LevitKanner'},
        {name: 'LinkedIn', link: 'https://www.linkedin.com/in/levit-osei/'},
        {name: 'Github', link: 'https://github.com/LevitKanner'},
    ]

    const info = [
        {name: 'Works', link: ''},
        {name: 'Resume', link: ''},
        {name: 'Contact', link: ''},
    ]
    return (
        <header className={'px-[20px] sm:px-[40px] mb-[70px]'}>
            <div
                className={'bg-[#E6E6E6] flex justify-between font-light text-[13px] uppercase border-b border-b-black h-[70px] flex justify-center items-center tracking-wide'}>

                <nav className={'hidden sm:block'}>
                    <ul className={'flex space-x-9'}>
                        {socials.map((s) =>
                            (<li key={s.name}>
                                <a href={s.link}> {s.name}</a>
                            </li>)
                        )}
                    </ul>
                </nav>
                <span className={'hidden sm:block'}> owl&trade; portfolio </span>
                <nav className={'hidden sm:block'}>
                    <ul className={'flex space-x-9'}>
                        {info.map((s) =>
                            (<li key={s.name}>
                                <a href={s.link}> {s.name}</a>
                            </li>)
                        )}
                    </ul>
                </nav>


                <div className={'sm:hidden flex justify-center w-full'}>
                    <input type="checkbox" id="menuSwitch"/>
                    <label id="burger" htmlFor="menuSwitch">
                        <div></div>
                        <div></div>
                        <div></div>
                    </label>
                    <nav id="menu"></nav>
                </div>


            </div>




        </header>
    );

};

export default Header;