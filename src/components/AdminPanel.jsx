import './components.css';

function AdminPanel ({ headings, dailyPractice, shortTermGoals, longTermGoals }) {

    const handleChange = e => {
        console.log(e.target.value);
    };

    return (
        <div className='admin-panel'>
            <div className='admin-sub'>
                <h1>Practice</h1>
                <h3>Add New Heading</h3>
                <form>
                    <label>Name of Heading</label>
                    <br />
                    <input type="text" />
                </form>
                <br />
                <br />

                <h3>Add New Practice Item</h3>
                <form>
                    <label>Heading</label>
                    <br />
                    <select onChange={handleChange} name='headingsArray' id='headings-select'>
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
                    <input type='text' />
                    <br />
                    <br />
                    <label>Description/Notes</label>
                    <br />
                    <textarea />
                    <br />
                    <br />
                    <label>Time (minutes)</label>
                    <br />
                    <input type='number'></input>
                    <br />
                    <br />
                </form>
            </div>

            <div>
                <h1 className='admin-sub'>Goals</h1>
                <h3>Add New Goal</h3>
                <br />
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
                </form>
                <br />
                <br />
            </div>            
        </div>
    )
}

export default AdminPanel;