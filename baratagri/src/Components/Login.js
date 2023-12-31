import React, { useState } from 'react';
import '../Styles/Login.css';
import Screen2 from './screen2';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuth, setIsAuth] = useState(false)
    const [error, setError] = useState(false)

    const handleLogin = () => {
        // You can add your authentication logic here
        if (username == 'bharatagri' && password == '1234') {
            setIsAuth(true)
        }
        else {
            setIsAuth(false)
            setError(true)
            setPassword('')
        }
    };

    return (
        <>
            {!isAuth ? (<div className='mainbody'><div className="container">
                <h4>Hello there, Login to continue</h4>
                <form>
                    <div className='username'>
                        <label>
                            Username:
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                    </div>
                   
                    <div className='password'>
                        <label>
                            Password:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                   
                    <button className='submit' type="button" onClick={handleLogin}>
                        Login
                    </button>
                    {error && <p className='error'>"Wrong password or username"</p>}
                </form>
            </div></div>) : (
                <Screen2 />
            )}

        </>
    );
}

export default Login;
