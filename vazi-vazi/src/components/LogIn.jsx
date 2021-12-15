
import { useState } from "react";


const App = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (password.length < 8) {
                alert('Password is too short. More than 8 characters, please!')
            }
        }
        catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <div className="justify-content-center">
                <h1>Log In</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    placeholder="enter a username"
                    onChange={(e) => setUsername(e.target.value)}
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
                    disabled={!username || !password}>Login</button>
            </form>
        </div>
    );
};

export default App;