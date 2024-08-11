import React from "react";
import TaskCard from "./TaskCard";
import ConnectAccount from "./ConnectAccount";
import no1 from "../images/Group 5.svg";
import no2 from "../images/Group.svg";

const SocialTasks: React.FC = () => {
    return (
        <div className="social-tasks w-[1008px] mx-auto">
            {/* <Icons/> */}
            <h1 className="text-center text-4xl font-medium mt-20 mb-5">Social Tasks</h1>
            <p className="text-center mb-5">Complete the Social Tasks to earn extra $Heart token</p>

            <ConnectAccount/>

            <div className="tasks-list w-[1008px] h-[276px] gap-[24px] flex items-center space-x-[24px] mx-auto my-0">
                <TaskCard 
                    logo={no1}
                    title="Follow Tapos X"
                    description="Follow Tapos X to earn Points"
                    points={20}
                    actionLabel="Follow"
                />
                <TaskCard 
                    logo={no1}
                    title="Retweet post on X"
                    description="Retweet Tapos post on X to earn Points"
                    points={20}
                    actionLabel="Retweet"
                />
                <TaskCard 
                    logo={no2}
                    title="Join VibrantX Discord"
                    description="Retweet a daily tweet to earn HEART"
                    points={20}
                    actionLabel="Join"
                />
            </div>
        </div>
    )
}

export default SocialTasks