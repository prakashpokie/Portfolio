import React from 'react'

const About = () => {
  return (
    <div name ='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
                </div>
            <div className='max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi. I'm Prakash Gopal, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>I am passionate about harnessing data to drive insightful decisions and improve the lives of those around me. 
                        I specialize in analyzing complex datasets and building data-driven solutions for clients ranging from individuals 
                        and small businesses to large enterprise corporations. What would you do if you had a data expert available 
                        at your fingertips?
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
