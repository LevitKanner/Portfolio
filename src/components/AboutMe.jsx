const AboutMe = () => {
    return (
        <div id={'aboutMe'}>
            <div className={'grid grid-cols-1 lg:grid-cols-2 gap-10 py-12'}>
                <div>
                    <img src={''} alt={'my photo'}/>
                </div>
                <h2 className={'secondary-title'}>
                    I <br/> create <br/> scalable <br/> performant<br/> applications
                </h2>
            </div>
            <p className={'text-start'}>
                Levit Osei-Wusu is a fullstack developer with a passion for creating innovative, user-friendly web
                applications.
                I have experience in both front-end and back-end development, and specialize in developing applications
                that
                are secure, scalable, and performant.
            </p>

            <p className={'mt-[30px]'}>
                My experience covers a wide range of technologies, including HTML, CSS,
                JavaScript, Node.js, React, .Net Core, and other related frameworks. I am constantly learning and
                exploring new technologies to stay ahead of the curve and give my clients the best possible product.
            </p>

        </div>
    )
};

export default AboutMe;