import './components.css';

function PracticeCard ({ title, description, time }) {
    return (
        <div className='card'>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Time: {time} minutes</p>
        </div>
    )
}

export default PracticeCard;