import './components.css';

function AdminPanel () {
    return (
        <div className='admin-panel'>
            <div className='admin-sub'>
                <h1>Practice</h1>
                <h3>Add New Heading</h3>


                <h3>Add New Practice Item</h3>
            </div>

            <div>
                <h1 className='admin-sub'>Goals</h1>
                <h3>Add New Goal</h3>
            </div>            
        </div>
    )
}

export default AdminPanel;