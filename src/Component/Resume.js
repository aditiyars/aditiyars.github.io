import React from "react";
import data from "./Data/resume.json"

class Resume extends React.Component{
    
    
    render(){
        // skill
        const skill = data.skill

        const size = skill.length/2;
        const firstArr = skill.slice(0,size);
        const secArr = skill.slice(size);

        // ORGANIZATION
        const organization = data.organization

        return(
            <div className="container max-w-full mx-auto mt-5 p-5" >
                <div className="md:grid grid-cols-2 gap-4">
                    <div className="hard-skill">
                    <h1 className="font-bold text-white text-3xl mb-5 md:text-center" id="skills">Skills</h1>
                    <div className="flex md:justify-center">
                        <ul className="list-disc px-5">
                            {firstArr.map((skill, index) => (
                            <li key={index}>{skill}</li>
                            ))}
                        </ul>
                        <ul className="list-disc px-5">
                            {secArr.map((skill, index) => (
                            <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    </div>
                    <div className="organiztaion mt-5 md:mt-0">
                    <h1 className="font-bold text-white text-3xl mb-5 md:text-center">Organization</h1>
                    <div className="flex justify-center">
                    <ul class="list-disc px-5">
                        {
                        organization.map((item) => (
                            <li key={item.id}>
                                <span className="font-medium leading-snug text-slate-200">
                                    {item.name}
                                </span>
                                <p>{item.position}</p>
                                <p>({item.year})</p>
                            </li>
                        ))}
                    </ul>
                    </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Resume;