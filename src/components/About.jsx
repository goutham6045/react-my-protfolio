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

      <p className="text-xl mt-10 text-justify font-semibold leading-relaxed">
      Hi there! My name is Goutham. I was born and raised in 
      India. I've always been passionate 
      about technology and how it shapes our world. 
      From a young age, I found myself taking apart 
      old electronics just to see how they worked. This 
      curiosity led me to pursue a degree in Computer 
      Science. Currently I am pursuing masters in Computer Scinece at University of Florida (UF). 
      Additionally, I am currently working as a Graduate Student Assistant as a Web developer at UF.
      </p>

    <br />   
    <h2 className="text-xl mt-10 font-bold">Interests Beyond Coding</h2>
    <ul className="text-xl mt-4  list-disc pl-6">
        <li>Travelling</li>
        <li>Exploring new restuarants</li>
        <li>Playing Games</li>
    </ul>

    </div>
  </div>
  );
}

export default About