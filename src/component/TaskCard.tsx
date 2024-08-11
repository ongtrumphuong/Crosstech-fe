import React from 'react';

interface TaskCardProps {
    logo: string
    title: string
    description: string
    points: number
    actionLabel: string
}

const TaskCard: React.FC<TaskCardProps> = ({ logo, title, description, points, actionLabel }) => {
    return (
        <div className="task-card border-2 rounded-2xl p-5 border-pink-300 float-left">
            <img src={logo} alt={`${title} logo`} className='task-logo w-12'/>
            <div className="task-content my-5 font-medium">
                <h2 className='text-2xl'>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="task-footer flex justify-between items-center">
                <span className='task-points bg-stone-300 rounded-2xl px-5 py-1'>+{points}</span>
                <button className='task-action font-medium text-orange-600 border-2 border-orange-500 rounded-2xl px-8 py-1'>{actionLabel}</button>
            </div>
        </div>
    )
}

export default TaskCard;