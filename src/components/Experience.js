// import AboutImg from '../assets/about.png';
import AboutImg from '../assets/about.png';

export default function Experience () {
    const config  = {
        line4:"Technical Trainer – Iwiz Android Robotics, Chennai ( April 2024 – May 2025)",
        line1: "Delivered robotics and STEM-based training to school students (Grades 3–10)",
        line2: "Taught electronics, programming (Python basics), and hands-on mechanical projects",
        line3: "Improved communication, problem-solving, and team collaboration through active classroom engagement",
        line5:  "Completed comprehensive courses in Core Java and Software Testing",
        line6:  "Gained practical knowledge in Manual Testing, Automation Testing, and Selenium",
        line7:  " Besant Technologies -Dec 2023 - Feb 2024"
    }

    return <><section className='flex flex-col md:flex-row bg-primary px-5' id='about'>
        <div className='py-2 px-5 md:w-1/2'>
            <img src={AboutImg}  />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-3xl  mb-5 w-[150px] font-bold'>PROFESSIONAL EXPERIENCE</h1>
                <p className='pb-5'>{config.line4}</p>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
            </div>           
        </div>  
    </section>
   
</>
}
