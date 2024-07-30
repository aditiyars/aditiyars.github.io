import React from "react";
import Adit from "./Assets/adit.png"
import CV from "./Assets/CV ATS EN (1).pdf"
import "./Assets/Style.css"

class About extends React.Component{
    render(){
        return(
            
            <div className="container flex max-w-full mx-auto overflow-hidden mt-24" id="header">
                <div className="header-bg h-full mx-auto">
                    <div className="container flex flex-col justify-center items-center md:flex-row">
                    
                    <div className="container p-standart header-content-titles md:w-[70%] min-[1700px]:mt-[10rem]">
                        <h1 className="text-5xl px-5 font-bold :text-[55px] lg:text-[96px] md:leading-[4rem] lg:leading-[7rem] text-white">Aditiya Ramadhan Saputra</h1>
                        <p className="mt-3 text-justify px-5">
                        I'm <span className="text-white font-semibold">Web Developer</span> and Sriwijaya University Fresh Graduate majoring in Informatics Engineering,
                        <span className="text-white font-semibold"> I have a strong work ethic and excellent adaptability,</span>  
                        I am ready to bring a positive contribution to the digital world 🚀.
                        </p>
                        <div className="flex flex-row  px-5 text-sm lg:text-base  mt-4 lg:w-[60ch] leading-7">
                        <a className="bg-teal-300 hover:bg-teal-600 text-black font-bold py-2 px-4 rounded inline-flex items-center" href={CV} download>
                            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                            <span>Download CV</span>
                        </a>
                        </div>
                    </div>

                    <div className="header-content-img mt-auto sm:mt-0 flex w-[18rem] min-[350px]:w-[20rem] relative md:w-[30%] lg:w-[40%]">
                        <img src={Adit} alt="Adit Img" className="block w-full object-fit mx-auto foto" />
                    </div>
                    </div>
                </div>
                </div>
        );
    }
}

export default About;