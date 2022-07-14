import './components.css';
import trashicon from './svg/trash3.svg'

function AdminPanel ({ headings, dailyPractice, goals, addGoal, addHeading, addPractice, deleteHeading, deletePractice, deleteGoal, getHeadingTime }) {
       
    
    // Functions
    
    const handleHeadingSubmit = e => {
        e.preventDefault();
        const headingForm = document.getElementById('heading-form')
        const headingField = document.getElementById('headingField');
        addHeading(headingField.value);
        headingForm.reset();
    };

    const handlePracticeSubmit = e => {
        e.preventDefault();

        const practiceForm = document.getElementById('practice-form')
        const headingsSelect = document.getElementById('headings-select');
        const practiceTitleField = document.getElementById('practice-title-field');
        const practiceDescriptionField = document.getElementById('practice-description-field');
        const practiceTimeField = document.getElementById('practice-time-field');

        addPractice(
            headingsSelect.value,
            practiceTitleField.value,
            practiceDescriptionField.value,
            practiceTimeField.value
        );

        practiceForm.reset();
        
    }

    const handleGoalSubmit = e => {
        e.preventDefault();

        const goalsForm = document.getElementById('goals-form');
        const goalSelect = document.getElementById('goal-select');
        const goalTitleField = document.getElementById('goal-title-field');
        const goalDescriptionField = document.getElementById('goal-description-field');

        addGoal(goalSelect.value, goalTitleField.value, goalDescriptionField.value);

        goalsForm.reset();
    }
    

    return (
        <div className='admin-panel'>
            <div className='admin-sub practice-sub'>
                <h1>Practice</h1>
                <h3>Add New Heading</h3>
                <form id="heading-form">
                    <label>Name of Heading</label>
                    <br />
                    <input type="text" id="headingField" required={true} />
                    <br />
                    <br />
                    <input type="submit" onClick={handleHeadingSubmit} />
                </form>
                <br />
                <br />

                <h3>Add New Practice Item</h3>
                <form id="practice-form">
                    <label>Heading</label>
                    <br />
                    <select name='headingsArray' id='headings-select' required={true}>
                        {headings.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option}
                            </option>
                        ))}
                    </select>
                    <br />
                    <br />
                    <label>Title</label>
                    <br />
                    <input type='text' id="practice-title-field" required={true} />
                    <br />
                    <br />
                    <label>Description/Notes</label>
                    <br />
                    <textarea cols={50} rows={10} id="practice-description-field" required={true} />
                    <br />
                    <br />
                    <label>Time (minutes)</label>
                    <br />
                    <input type='number' id="practice-time-field" required={true} />
                    <br />
                    <br />
                    <input type="submit" onClick={handlePracticeSubmit} />
                    <br />
                    <br />
                </form>
                <h1>Practice Routine</h1>
                <ul>
                    {headings.map((heading, index) => {
                        return (
                            <div key={index}>
                                <li><h3>{heading} - {getHeadingTime(heading)} minutes<img className='icon' src={trashicon} onClick={() => deleteHeading(heading)} /></h3></li>
                                <ul>
                                {dailyPractice.map((practice, index) => {
                                    if (practice.heading === heading) {
                                        return (                                          
                                            <li key={index}>{practice.title}<img className='icon' src={trashicon} onClick={() => deletePractice(practice.title)} /></li>
                                        )
                                    }
                                })}
                                </ul>
                            </div>
                        )
                    })}
                </ul>
            </div>

            <div>
                <h1 className='admin-sub'>Goals</h1>
                <h3>Add New Goal</h3>
                <br />
                <form id="goals-form">
                    <label>Goal Type</label>
                    <br />
                    <select id="goal-select" required={true}>
                        <option value="short">Short Term</option>
                        <option value="long">Long Term</option>
                    </select>
                    <br />
                    <br />
                    <label>Title</label>
                    <br />
                    <input type="text" id="goal-title-field" required={true} />
                    <br />
                    <br />
                    <label>Description/Notes</label>
                    <br />
                    <textarea cols={50} rows={10} id="goal-description-field" required={true} />
                    <br />
                    <br />
                    <input type="submit" onClick={handleGoalSubmit} />
                </form>
                <h1>Goals</h1>
                <ul>
                    <li>
                        <h3>Short Term</h3>
                        <ul>
                        {goals.map((goal, index) => {
                            if (goal.type === 'short') {
                                return (
                                    <li key={index}>{goal.title}<img className='icon' src={trashicon} onClick={() => deleteGoal(goal.title)} /></li>
                                )
                            }
                        })}
                        </ul>
                    </li>
                    <li>
                        <h3>Long Term</h3>
                        <ul>
                        {goals.map((goal, index) => {
                            if (goal.type === 'long') {
                                return (
                                    <li key={index}>{goal.title}<img className='icon' src={trashicon} onClick={() => deleteGoal(goal.title)} /></li>
                                )
                            }
                        })}
                        </ul>
                    </li>
                </ul>
            </div>            
        </div>
    )
}

export default AdminPanel;