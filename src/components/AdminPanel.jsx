import './components.css';

function AdminPanel ({ headings, dailyPractice, shortTermGoals, longTermGoals, addHeading, addPractice }) {
       
    
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

    return (
        <div className='admin-panel'>
            <div className='admin-sub'>
                <h1>Practice</h1>
                <h3>Add New Heading</h3>
                <form id="heading-form">
                    <label>Name of Heading</label>
                    <br />
                    <input type="text" id="headingField" />
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
                    <select name='headingsArray' id='headings-select'>
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
                    <input type='text' id="practice-title-field"/>
                    <br />
                    <br />
                    <label>Description/Notes</label>
                    <br />
                    <textarea cols={50} rows={10} id="practice-description-field"/>
                    <br />
                    <br />
                    <label>Time (minutes)</label>
                    <br />
                    <input type='number' id="practice-time-field" />
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
                                <li><h3>{heading}</h3></li>
                                <ul>
                                {dailyPractice.map((practice, index) => {
                                    if (practice.heading === heading) {
                                        return (
                                            
                                            <li key={index}>{practice.title}</li>
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
                    <select>
                        <option value="short-term">Short Term</option>
                        <option value="long-term">Long Term</option>
                    </select>
                    <br />
                    <br />
                    <label>Title</label>
                    <br />
                    <input type="text" />
                    <br />
                    <br />
                    <label>Description/Notes</label>
                    <br />
                    <textarea cols={50} rows={10} />
                    <br />
                    <br />
                    <input type="submit" />
                </form>
                <br />
                <br />
            </div>            
        </div>
    )
}

export default AdminPanel;