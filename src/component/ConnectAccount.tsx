import React from "react";

const ConnectAccount: React.FC = () => {
    return (
        <div className="connect-account w-[1008px] h-[196px] p-[24px]  border-2 rounded-2xl border-pink-300 mb-[20px]">
            <h2 className="text-2xl mb-5 font-medium">Connect Your X account</h2>
            <p className="text-base">You need connect your X account to join Social Task</p>
            <a href="#learn-more" className="learn-more block text-blue-500">Learn more &gt;</a>
            <button className="connect-button w-[235px] h-[40px] mt-[12px] px-8 py-2 rounded-[100px] bg-[#CA5C3B] text-white">Connect your X account</button>
        </div>
    )
}

export default ConnectAccount