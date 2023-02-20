import {CiMail, CiMobile3} from "react-icons/ci";


const Contacts = () => {
    return (
        <div className={'flex flex-col items-center my-14 max-w-3xl mx-auto'}>
            <p id={'career-title'} className={' leading-tight'}>
                get in touch
            </p>

            <p className={'w-full mt-4 flex flex-col items-center space-y-3 sm:flex-row sm:space-y-0 '}>
                    <span className={'flex items-center space-x-1.5'}>
                        <CiMobile3 className={'hidden sm:block'}/>
                        <span>+233 554 214 041</span>
                    </span>

                <span className={'flex items-center space-x-1.5'}>
                        <CiMail className={'hidden sm:block'}/>
                        <span>Lkanner21@gmail.com</span>
                    </span>
            </p>

        </div>
    )
};

export default Contacts;