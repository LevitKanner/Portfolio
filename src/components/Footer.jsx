const Footer = () => {
    return (
        <div className={'px-[20px] sm:px-[40px]'}>
            <p className={'w-full text-center p-[20px] border-t border-t-black font-light text-[13px]'}>
                {new Date().getFullYear()} &copy; all
                rights
                reserved.</p>
        </div>
    )
};

export default Footer;