const Experience = ({date, company, role, location}) => {
    return (
        <div className={'border-t border-t-black dark:border-t-white py-[45px] flex justify-between items-center'}>
            <span className={'text-[10px] sm:text-[15px] hidden xl:block'}> [{date}] </span>
            <div className={'flex flex-col space-y-1.5 xl:space-y-0'}>
                <span className={'text-[13px] sm:text-[30px] font-monumentLarge'}> {company}</span>
                <span className={'text-[10px] sm:text-[15px] sm:hidden'}> {role} </span>
                <span className={'text-[10px] sm:text-[15px] xl:hidden'}> [{date}] </span>
            </div>

            <span className={'text-[10px] sm:text-[15px] hidden sm:block'}> {role} </span>
            <span className={'text-[10px] sm:text-[15px]'}> {location}</span>
        </div>
    );
}

export default Experience;