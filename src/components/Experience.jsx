import React from 'react'
import node from "../assets/node.png";
import python from "../assets/python.256x256.png";
import javascript  from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import django from "../assets/djangoproject.256x256.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import sql from "../assets/SQL.png";
import MongoDB from "../assets/MongoDB.png";
import azure from "../assets/azure.png";
//import Jenkins from "../assets/Jenkins.png"



const Experience = () => {

    const techs = [
        
        {
            id:1,
            src:javascript,
            title:'Javascript',
            style:'shadow-gray-500'
        },
        {
            id:2,
            src:reactImage,
            title:'React',
            style:'shadow-gray-500'
        },
        {
            id:3,
            src: node,
            title:'Node',
            style:'shadow-gray-500'
        },
        {
            id:4,
            src:python,
            title:'Python',
            style:'shadow-gray-500'
        },
        {
            id:5,
            src: django,
            title:'Django',
            style:'shadow-gray-500'
        },
        {
            id:6,
            src: sql,
            title:'SQL',
            style:'shadow-gray-500'
        },
        {
            id: 7,
            src:nextjs,
            title:'Next JS',
            style:'shadow-gray-500'
        },
        {
            id:8,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-gray-500'
        },
        {
            id:9,
            src:github,
            title:'Github',
            style:'shadow-gray-500'
        },
        {
            id:10,
            src:MongoDB,
            title:'MongoDB',
            style:'shadow-gray-500'
        },
        {
            id:11,
            src:azure,
            title:'Azure Cloud',
            style:'shadow-gray-500'
        },
       
    
    ]

  return (
    <div name="experience" 
    className="bg-gradient-to-b
    from-gray-800 to-black w-full h-screen ">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-full text-white">
            {/* max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full */}
            <div className="pt-10 pb-4">
                <p className="text-4xl mt-40 font-bold border-b-4 
                border-gray-500 p-2 inline">
                    Technical Skills</p>
                <p className="pt-6 pb-2"> The technologies I've worked with </p>
            </div> 

            <div className="w-full grid grid-cols-2 md:grid-cols-3 sm:grid-cols-2 gap-8
            text-center py-5 px-12 sm:px-0">

            {
                techs.map(({id, src, title, style}) => (
                    <div 
                    key={id}
                    className={`shadow-lg hover:shadow ease-in-out pt-3 hover:scale-105 duration-700 rounded-xl ${style}`}>
                    <img src={src} alt="" className="w-20 mx-auto rounded-full" />
                    <p className="my-2"> {title}</p>
                </div>
                ))
            }

                
            </div>
        </div>
    </div>
  )
};

export default Experience