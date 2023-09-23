import React from "react";
import outbound from "./Assets/outbound.svg"

const projects = [
    {
        id:1,
        name:'Digital Signature SHA-256 & RSA · FullStack',
        desc:'digital signature application for pdf files using sha-256 and rsa algorithms (web server application)',
        skills:[
            'JavaScript','Bootstrap','NodeJS','ExpressJS'
        ],
        github:'https://github.com/aditiyars/digitalSignature.git'
    },
    {
        id:2,
        name:'Citayem Fashion Week · Front-End',
        desc:'Simple web app using html, css, javascript for Dicoding Submission',
        skills:[
            'HTML','CSS','JavaScript'
        ],
        github:'https://github.com/aditiyars/CitayemFashionWeek/tree/main'
    },
    {
        id:3,
        name:'Warteg Online · Full-Stack',
        desc:'Simple CRUD implementation on CodeIgniter3 Framework',
        skills:[
            'PHP','BootStrap','CodeIgniter3'
        ],
        github:'https://github.com/aditiyars/wartegonlineCI3'
    },
    {
        id:4,
        name:'SIPENMARU Poltekkes Palembang · Front-End',
        desc:'Web App for new student registration using CodeIgniter3 Framwork (Intenship Program)',
        skills:[
            'PHP','BootStrap','CodeIgniter3'
        ],
        github:'https://github.com/primum-coertus/poltekkespalembang'
    },
]

class Project extends React.Component{
    
    
    render(){
        return(
            <div className="container max-w-full mt-5 p-5 md:px-28" >
                <h1 className="text-3xl text-white font-bold mb-5" id="project">Project</h1>
                <ul className="md:grid md:grid-cols-2 xl:grid-cols-4">
                    {projects.map((project)=> (
                        <li key={project.id} className="md:mb-5">
                            <div className="project p-5 mr-5 hover:bg-white hover:bg-opacity-10 w-full backdrop-blur-lg rounded drop-shadow-lg">
                                <a href={project.github}>
                                    <div className="flex flex-wrap">
                                        <h3 className="font-medium leading-snug text-slate-200 mr-2">{project.name}</h3>
                                        <img src={outbound} alt="foto outbound" className="h-6"></img>
                                    </div>

                                    <p className="text-justify mt-2 leading-normal">
                                        {project.desc}
                                    </p>

                                    <ul className="mt-2 flex flex-wrap">
                                        {
                                            project.skills.map((skill, index)=>(
                                                <li key={index} className="mr-1.5 mt-2">
                                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                    {skill}
                                                </div>
                                            </li>
                                            ))
                                        }
                                    </ul>
                                </a>

                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Project;