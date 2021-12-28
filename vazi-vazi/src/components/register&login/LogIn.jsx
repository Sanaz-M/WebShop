import { useState, useEffect } from "react";
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
        <div>
            <div className="justify-content-center">
                <h1>Log In</h1>
            </div>
            <form>
                <input
                    type="text"
                    value={email}
                    placeholder="enter an email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div>
                    <input
                        type="password"
                        value={password}
                        placeholder="enter a password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    disabled={!email || !password}
                    onClick = {() => navigate('/')}
                    >Login</button>
            </form>
        </div>
    );
};

export default LogIn;