import React from 'react'

const About = () => {
  return (
    <div name="about"  className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl lg:mt-20 sm:mt-10'>
          • Engineered and optimized frontend Components using React.JS,
          improving site performance by 30%. <br />
          • Utilized SonarQube to identify and rectify code quality issues and security vulnerabilities. <br />
          •Conducted comprehensive code reviews to enforce best practices and
          ensure a clean, scalable codebase. <br />
          • Implemented a caching mechanism,resulting in a 40% faster application load time. <br />
          • Created custom components to enhance code readability and decrease overall code <br />
          • Contributed to an Agile project, employing agile-driven strategies
          that enhanced team performance in various activities.
        </p>
        <br />
        <p className='text-xl'> 
          
        </p>
      </div>
    </div>
  );
}

export default About