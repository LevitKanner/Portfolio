const Footer = () => {
    return (
        <div className={'px-[20px] sm:px-[40px]'}>
            <p className={'flex justify-between items-center w-full text-center py-[20px] border-t border-t-black font-light text-[13px] sm:text-[16px]'}>
               <span>{new Date().getFullYear()} &copy; all
                rights
                reserved.</span>
                <span
                    className={'font-Restonasi text-[20px] sm:text-[35px] font-black lowercase'}> Levit Osei-Wusu</span>
            </p>
        </div>
    )
};

export default Footer;