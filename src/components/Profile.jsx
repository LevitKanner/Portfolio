import {CiMail, CiMobile3} from "react-icons/ci";

const Profile = () => {
    const yearsOfExp = new Date().getFullYear() - 2019;

    return (
        <div id={'profile'}>
            <p id={'career-title'}>
                fullstack web developer
            </p>
            <div
                className={'flex flex-col space-y-4 mt-[60px] sm:text-[15px] md:text-[16px] xl:text-[22px] md:font-normal font-light tracking-wider'}>
                <p className={'text-center'}>I'm a software engineer with {yearsOfExp}+ years experience</p>
                <p className={'flex items-center justify-between sm:justify-around'}>
                    <span className={'flex items-center space-x-1.5'}>
                        <CiMobile3 className={'hidden sm:block'}/>
                        <span>+233 554 214 041</span>
                    </span>

                    <span className={'flex items-center space-x-1.5'}>
                        <CiMail className={'hidden sm:block'}/>
                        <span>Lkanner21@gmail.com</span>
                    </span></p>
                <p className={'text-center'}> available for projects</p>
                <p className={'text-center'}> based in accra, ghana </p>
            </div>
        </div>
    )
};

export default Profile;