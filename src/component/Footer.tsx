import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="footer w-1440 h64 flex gap-20 mx-20">
            <div className="logo">
                <img src="./src/images/X.svg" alt="logo-X"/>
            </div>
            <p className="text-center">© 2024 Tapos</p>
            <div className="flex gap-5">
                <p>Terms of Service</p>
                <p>Privacy Policy</p>
            </div>
            
        </footer>
    )
}

export default Footer