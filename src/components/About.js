// import AboutImg from '../assets/about.png';
import AboutImg from '../assets/hero.png';

export default function About () {
    const config  = {
        line1: "I'm Jayachitra, a B.E. Computer Science Engineering graduate with a strong interest in front-end development.",
        line2: "I’ve built projects using HTML, CSS, JavaScript, and React, and I’m continuously improving my skills. I enjoy creating responsive, interactive user interfaces and solving real-world problems through code",
        line3: "I’m now looking to begin my career as a front-end developer in a company where I can grow and contribute"
    }

    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='py-2 px-40 md:w-1/2 '>
            <img src={AboutImg} height="50px" width="350px" />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-3xl  mb-5 w-[160px] font-bold'>About Me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>
        </div>
    </section>
}