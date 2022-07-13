import './components.css';

function GoalCard ({ type, title, description}) {
    return (
        <div className='card'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default GoalCard;