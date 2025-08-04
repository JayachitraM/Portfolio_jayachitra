//import HeroImg from '../assets/img (3).jpg';
import { AiFillGithub, AiFillInstagram, AiOutlineLinkedin } from 'react-icons/ai';

export default function Hero() {
    const config  = {
        subtitle: 'Im a Front-end developer',
        social: {
            github: 'https://github.com/JayachitraM',
            instagram: 'https://www.instagram.com/jccoder.dev?igsh=MWh6aHMydDExNHducQ==',
            linkedin: 'https://www.linkedin.com/in/jayachitra-m-11462a1b4/'
        }
    }


    return <section className='flex flex-col md:flex-row p-5 py-30   bg-image '>
      
       <div className='md:w-1/2 flex flex-col py-10 px-5'>
            <h1 className=' text-white text-6xl font-hero-font'><br/><br/>Hi, <br/><br/> Im <span className='text-black'>Jayachitra</span>  
                <p className='text-2xl'>{config.subtitle}</p>
            </h1>
            <div className='flex py-10'>
                <div className='flex py-10'>
  
  <a href={config.social.github} className='pr-5 hover:text-white'target='_blank'>
    <AiFillGithub size={40} />
  </a>
  <a href={config.social.instagram} className='pr-5 hover:text-white'target='_blank'>
    <AiFillInstagram size={40} />
  </a>
  <a href={config.social.linkedin} className='hover:text-white'target='_blank'>
    <AiOutlineLinkedin size={40} />
  </a>
</div>
            </div>
       </div>
       {/* <img className='md:w-1/3' src={HeroImg} /> */}
    </section>
}
