import {CiMail, CiMobile3} from "react-icons/ci";


const Contacts = () => {
    return (
        <div className={'flex flex-col items-center mt-14 mb-24 max-w-4xl mx-auto'}>
            <p id={'career-title'} className={' leading-tight'}>
                get in touch
            </p>

            <p className={'contacts'}>
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