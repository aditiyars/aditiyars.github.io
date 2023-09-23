import React, { Component} from "react";

class Navbar extends Component {
    constructor(){
        super()
        this.state = {
            isNavMenuOpen : false
        }
        this.hideSM = this.hideSM.bind(this)
    }

    handleNavSkillsClick(){
        const skillsSection = document.querySelector('#skills');
        window.scrollTo({
          top: skillsSection.offsetTop - 25,
          behavior: 'smooth'
        });
      };
    
      handleNavProjectClick(){
        const ProjectSection = document.querySelector('#project');
        window.scrollTo({
          top: ProjectSection.offsetTop - 25,
          behavior: 'smooth'
        });
      };
      
      handleNavAboutClick(){
        const AboutSection = document.querySelector('#header');
        window.scrollTo({
          top : AboutSection,
          behavior: 'smooth'
        });
        console.log("masuk")
      };
      
      handleNavContactClick(){
        const ContactSection = document.querySelector('#contact');
        window.scrollTo({
          top: ContactSection.offsetTop - 25,
          behavior: 'smooth'
        });
      };
    
    hideSM (){
        this.setState ({
            isNavMenuOpen : !this.state.isNavMenuOpen,
        })
        console.log("masuk")
    }

    render(){

        return(
            <nav className="bg-slate-950 p-4 items-center dark:bg-slate-950 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 md:flex md:flex-wrap md:items-center md:justify-between">
                <div className=" flex flex-wrap justify-between">
                <button className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ARS</span>
                </button>
                <div className="flex md:order-2">
                    
                    <button 
                     type="button"
                     onClick={this.hideSM}
                     className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                </div>
                <div className={ `${this.state.isNavMenuOpen &&  'md:flex' } ${!this.state.isNavMenuOpen && 'hidden md:flex' }`  } id="collapseExample" data-te-collapse-item>
                    <div  className={'items-center justify-between w-full md:flex md:w-auto md:order-1'}>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
                            <li>
                            <button 
                            onClick={this.handleNavAboutClick}
                            className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">About Me</button>
                            </li>
                            <li>
                            <button 
                            onClick={this.handleNavSkillsClick}
                            className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Skills
                            </button>
                            </li>
                            <li>
                            <button 
                            onClick={this.handleNavProjectClick}
                            className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Project
                            </button>
                            </li>
                            <li>
                            <button
                            onClick={this.handleNavContactClick}
                            className="block py-2 pl-3 pr-4  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</button>
                            </li>
                        </ul>
                    </div>
                </div>
            
            </nav>
        );
    }
}

export default Navbar;