import './components.css';



function PracticeCard ({ title, description, time, practice }) {

    const cardCompleteHandler = () => {
        const card = document.getElementById(title);
        console.log(practice);
        card.classList.toggle('card-complete');
    }

    return (
        <div id={title} className='card' onClick={cardCompleteHandler}>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Time: {time} minutes</p>
        </div>
    )
}

export default PracticeCard;