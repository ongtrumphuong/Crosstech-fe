import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons"
import { siteMenu } from "../common/Site";
import clsx from "clsx";
import { RouterLink } from "../util/RouterLink";
import Logo from "../images/X.svg";

const Header: React.FC = () => {
    const [active, setActive] = useState<boolean>(false)
    const [click, setClick] = useState<string>(RouterLink.Tapos)
    const [clickDropdown, setClickDropdown] = useState<boolean>(false)
    return (
        <header className='header flex justify-between items-center max-w-[1220px] py-[29px] mx-auto'>

            <div className="logo w-[52.8px] h-[40px]">
                <img src={Logo} alt="Logo" />
            </div>
            
            <nav  className="nav-links flex gap-8">
                {siteMenu.map((e) => {
                    return <div 
                    onClick={() => setClick(e.link)}
                    className={ clsx( click === e.link ? "text-black" : "text-neutral-500", "font-medium cursor-pointer")}>
                    {e.title}
                    </div>

                })}
                <div 
                    className="cursor-pointer text-orange-500 font-medium" 
                    onClick={() => setClickDropdown(!clickDropdown)}>
                    <span>More <DownOutlined 
                                className={`transition-transform duration-300 ${
                                clickDropdown ? "transform rotate-180" : "transform rotate-0" }`}
                            />
                    </span>
                </div>
                
                
            </nav>

            <div className="relative bg-[#EEC5C7] font-medium rounded-[100px] p-0.5">                
                <button className=
                    {clsx(active ? "bg-[#CA5C3B] text-white" : "bg-[#EEC5C7] text-black", "px-3 py-1 h-[30px] rounded-[100px] text-sm font-medium ")}
                    onClick={() => setActive(true)}>Mainnet
                </button>
                <button className=
                    {clsx(!active ? "bg-[#CA5C3B] text-white" : "bg-[#EEC5C7] text-black", "px-3 py-1 h-[30px] rounded-[100px] text-sm font-medium ")}
                    onClick={() => setActive(false)}>Testnet
                </button>
            </div>

        </header>
    )
}

export default Header