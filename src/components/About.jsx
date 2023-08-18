import React from 'react'

const About = () => {
  return (
  <div name="about" className="w-full h-screen bg-gradient-to-b
  from-gray-800 to-black text-white">
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col
    justify-center w-full h-full">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4
        border-gray-500">
          About
          </p>
      </div>

      <p className="text-xl mt-20">
      Hi there! My name is Alex. I was born and raised in 
      New York City, surrounded by the bustling energy of 
      the urban landscape. I've always been passionate 
      about technology and how it shapes our world. 
      From a young age, I found myself taking apart 
      old electronics just to see how they worked. This 
      curiosity led me to pursue a degree in Computer 
      Science, and I'm now working as a software engineer 
      at a tech startup.
      </p>

    <br />   
    <p className="text-xl">
      When I'm not coding, I love exploring the city's 
      diverse culinary scene – you can often find me trying 
      out new restaurants or attempting to recreate exotic 
      dishes at home. Traveling is another one of my 
      passions; I've been fortunate enough to visit several 
      countries across Europe and Asia, each time immersing 
      myself in different cultures and making lifelong 
      memories.
      </p>   
    </div>
  </div>
  );
}

export default About