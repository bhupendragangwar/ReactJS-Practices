import './home.module.css'

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

// import Button from '../../common/Button'
import Anchor from '../../common/AnchorTag';


export default function Home() {
    return (
        <div className="my-2 mx-4 p-4 border-l border-r border-b border-grey-400 h-full">
            <div className="border-b border-yellow-400 ">
                <div>
                    <h1 className="text-2xl font-bold inline-block border-b-5 border-blue-400 mb-5 text-yellow-500">Hi, I'm Bhupendra Gangwar👋</h1>
                    <p className="mb-2">I'm on a journey to become a fFrontent and backend developer & MERN Stack Develope. I have building little projects, trying out new coding techniquies, and sharing what I learn along the way. When I'm not at my desk, You'll find me reading, hiking through the mountains, or challenging myself on rock-climbing walls.</p>
                    <p className="my-2">I started this blog to document my progress, keep myself accountable, and hopefully inspire anyone else who's learing to code. <br /> Welcome to my corner of the internet, and <spna className="text-2xl text-yellow-500 italic border border-yellow-200 rounded-full px-4 ">thanks</spna> for stopping by!</p>
                </div>


                {/* <div className='space-x-6 pt-3 pb-8'>
                <Button onClick = {() => console.log('btn 1 click')}>
                Btn 1
                </Button>
                <Button onClick = {() => console.log('btn 2 click')}>
                Btn 2
                </Button>
                <Button onClick = {() => console.log('btn 3 click')}>
                Btn 3
                </Button>
                <Button onClick = {() => console.log('btn 2 click')}>
                Btn 4
                </Button>
                </div>  */}

                <div className='flex space-x-4 my-7'>
                    {/* reusable Anchor tag */}

                    <Anchor href={'https://www.linkedin.com/in/bhupendragangwar/'}>
                        <FaLinkedin />
                    </Anchor>
                    <Anchor href={'https://github.com/bhupendragangwar'}>
                        <FaGithub />
                    </Anchor>
                    <Anchor href={'https://github.com/bhupendragangwar'}>
                        <FaInstagram />
                    </Anchor>

                </div>
            </div>

            <div className='mt-5 border-b border-yellow-400'>
                <div className='flex'>

                    <h1 className='font-bold text-2xl'>Latest Article</h1>
                    <spna className='ml-2 w-8 border-b-2 border-blue-400'></spna>
                </div>

                <div className='my-2'>
                    <p className='mb-1'>Article 1</p>
                    <span className='italic'>Date</span>
                    <p className='mb-1'>Article 2</p>
                    <span className='italic'>Date</span>
                    <p className='mb-1'>Article 3</p>
                    <span className='italic'>Date</span>
                    <p className='mb-1'>Article 4</p>
                    <span className='italic'>Date</span>
                    <p className='mb-1'>Article 5</p>
                    <span className='italic'>Date</span>
                </div>

                <div className='mt-4 mb-9'>
                    <button className='border-b border-blue-400'>
                        View all articles
                    </button>
                </div>

            </div>

            <div className='flex items-center space-x-2 justify-between'>
                <div>
                    <h2>Made with Rohit & Kurmi</h2>
                </div>
                <div className='flex space-x-4 my-7'>
                    {/* reusable Anchor tag */}

                    <Anchor href={'https://www.linkedin.com/in/bhupendragangwar/'}>
                        <FaLinkedin />
                    </Anchor>
                    <Anchor href={'https://github.com/bhupendragangwar'}>
                        <FaGithub />
                    </Anchor>
                    <Anchor href={'https://github.com/bhupendragangwar'}>
                        <FaInstagram />
                    </Anchor>

                </div>
            </div>
        </div>
    )
}