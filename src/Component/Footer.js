import React from "react";

class Footer extends React.Component{
    render(){
        return(
            <footer className="bg-slate-800 mt-10">
                <div className="mx-auto text-center h-14 font-semibold max-w-full p-5 md:flex md:items-center md:justify-between">
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400 w-full">© 2023 <a href="https://instagram.com/aditiyaramadhans" class="hover:underline">Aditiya Ramadhan Saputra 🤞</a>. All Rights Reserved.</span>
                </div>
            </footer>
        );
    }
}

export default Footer