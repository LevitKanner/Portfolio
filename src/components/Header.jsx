const Header = () => {
    const socials = [
        {name: 'Twitter', link: 'https://twitter.com/LevitKanner'},
        {name: 'LinkedIn', link: 'https://www.linkedin.com/in/levit-osei/'},
        {name: 'Github', link: 'https://github.com/LevitKanner'},
    ]

    const info = [
        {name: 'Works', link: ''},
        {name: 'Resume', link: ''},
        {name: 'Contacts', link: ''},
    ]
    return (
        <header className={'px-[20px] sm:px-[40px] mb-[70px] sticky top-0 z-10'}>
            <div
                className={'bg-[#E6E6E6] flex justify-between font-light text-[13px] uppercase  sm:border-b border-b-black h-[70px] flex justify-center items-center tracking-wide'}>

                <nav className={'hidden sm:block'}>
                    <ul className={'flex space-x-9'}>
                        {socials.map((s) =>
                            (<li key={s.name}>
                                <a href={s.link} target={'_blank'}> {s.name}</a>
                            </li>)
                        )}
                    </ul>
                </nav>
                <li className={'hidden sm:block'}><a href={'/'}>owl&trade; portfolio</a></li>
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
                    <nav id="menu">
                        <div className={'h-full pt-[100px] flex flex-col justify-between'}>
                            <a href={'/'} className={'text-[20px] font-semibold pt-4'}> owl&trade; portfolio </a>

                            <nav className={'mt-20'}>
                                <ul className={'flex flex-col space-y-9 font-extrabold text-[35px] font-monumentLarge'}>
                                    {info.map((s) =>
                                        (<li key={s.name}>
                                            <a href={s.link}> {s.name}</a>
                                        </li>)
                                    )}
                                </ul>
                            </nav>

                            <p className={'pb-7 text-[15px] font-light'}> {new Date().getFullYear()} &copy; all rights
                                reserved.</p>
                        </div>

                    </nav>
                </div>


            </div>


        </header>
    );

};

export default Header;