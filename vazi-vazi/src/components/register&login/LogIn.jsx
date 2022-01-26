import { useState, useEffect } from "react";
import './login.css';
import { useSelector, useDispatch } from 'react-redux';
import { getUsersAction } from '../../redux/action';
import { useNavigate } from "react-router-dom";


const LogIn = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const usersResult = useSelector(state => state.users.content);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsersAction());
    }, []);


    return (
        <div id='login-container'>
            <div className="justify-content-center">
                <h1>Log In</h1>
            </div>
            <form id='login-form'>
                <div>
                    <input
                        className="login-form-control"
                        type="text"
                        value={email}
                        placeholder="enter an email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <input
                        className="login-form-control"
                        type="password"
                        value={password}
                        placeholder="enter a password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                    <button
                    className="mt-2 login-button"
                        type="submit"
                        disabled={!email || !password}
                        onClick={() => navigate('/')}
                    >
                        Let's login!</button>
            </form>
        </div>
    );
};

export default LogIn;