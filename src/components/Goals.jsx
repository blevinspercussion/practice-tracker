import './components.css';
import GoalCard from './GoalCard';

function Goals ({ goals }) {
    return (
        <div className='page-layout'>
            <h1>Short Term Goals</h1>
                <ul className='card-list'>
                {goals.map((goal, index) => {
                    if (goal.type === 'short') {
                        return(
                            <GoalCard 
                                key={index}
                                type={goal.type}
                                title={goal.title}
                                description={goal.description}
                                />
                        )
                    }
                    
                })}
                </ul>
            <h1>Long Term Goals</h1>
                <ul className='card-list'>
                {goals.map((goal, index) => {
                    if (goal.type === 'long') {
                        return (
                            <GoalCard
                                key={index}
                                type={goal.type}
                                title={goal.title}
                                description={goal.description}
                                />
                        )
                    }
                })}
                </ul>
        </div>
    )
}

export default Goals;