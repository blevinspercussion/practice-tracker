import './components.css';

function Login () {

    return (
        <div className='login-div'>
            <div className='register-user'>
                <h3>Register</h3>
                <input placeholder='Email' />
                <input placeholder='Password' />
                <button>Create User</button>
            </div>
            <div className='login-user'>
                <h3>Login</h3>
                <input placeholder='Email' />
                <input placeholder='Password' />
                <button>Login</button>
            </div>
        </div>
    )
}


export default Login;