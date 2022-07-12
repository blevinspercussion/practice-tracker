import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import './components.css';
import { useState } from 'react';

function AdminPanel ({ headings, dailyPractice, shortTermGoals, longTermGoals, addHeading, addPractice }) {
       
    
    // Functions
    
    const handleHeadingSubmit = e => {
        e.preventDefault();
        const headingField = document.getElementById('headingField');
        addHeading(headingField.value);
    };

    const handlePracticeSubmit = e => {
        e.preventDefault();
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
        
    }

    return (
        <div className='admin-panel'>
            <div className='admin-sub'>
                <h1>Practice</h1>
                <h3>Add New Heading</h3>
                <form>
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
                <form>
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
                    {headings.map((heading, index) => (
                        <li key={index}>{heading}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h1 className='admin-sub'>Goals</h1>
                <h3>Add New Goal</h3>
                <br />
                <form>
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