import React from "react";
import projects from "./Data/project.json"

class Project extends React.Component{
    
    
    render(){
        return(
            <div className="container max-w-full mt-5 p-5 md:px-28" >
                <h1 className="text-3xl text-white font-bold mb-5" id="project">Project</h1>
                <ul className="md:grid md:grid-cols-2 xl:grid-cols-4">
                    {projects.map((project)=> (
                        <li key={project.id} className="md:mb-5">
                            <div className="p-5 m-2 bg-opacity-10 rounded-md bg-white max-w-full hover:bg-opacity-30">
                                <a href={project.github}>
                                    <div className="flex flex-wrap">
                                        <h3 className="font-medium leading-snug text-slate-200 mr-2">{project.name}</h3>
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