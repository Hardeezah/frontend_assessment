'use client'

import Logo from "./Logo";
import MenuItems from "./MenuItems";

const Navbar = () => {
    
    return (  
        <div className="w-full h-[119px] bg-[#353342] py-5 font-title">
            <div className="
                py-3 
                
                items-center 
                max-w-[1206px] 
                m-auto
            ">
                    <div className="
                        flex 
                        flex-row 
                        items-center 
                        justify-between 
                        gap-3 
                        md:gap-0
                        px-5
                        md:px-3
                    ">
                        <Logo/>
                        <MenuItems/>
                        
                    </div>
                </div>
            </div>
        
        );
}
 
export default Navbar;