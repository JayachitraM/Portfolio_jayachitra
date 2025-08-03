import websiteImg1 from '../assets/proffile.png';
import websiteImg2 from '../assets/filter.png';
import websiteImg3 from '../assets/explorer.png';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg3,
                description: 'Explorer Hubs- Its a adverture explore website',
                link: 'https://drive.google.com/drive/folders/1fXuKyZjJDMmUTU2YRCsl7HBFwHAobrg2?usp=sharing'
            },
            {
                image: websiteImg1,
                description: 'Profile-Card-It is about dynamic change online or offline status mode',
                link: 'https://github.com/JayachitraM/ProfileCard'
            },
            {
                image: websiteImg2,
                description: 'Product-Filter-Its about e-comeerce one part ,it can filter product',
                link: 'https://github.com/JayachitraM/Product_Filter'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl   mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React, HTML ,CSS and Javascript. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}