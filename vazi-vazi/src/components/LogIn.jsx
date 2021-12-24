
import { useState } from "react";


const App = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch('http://localhost:3000/users', { 
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if(response.ok){
                let data = await response.json()
                console.log(data)
            }
            if (password.length < 8) {
                alert('Password is too short. More than 8 characters, please!')
            }
            // for(let i=0; i<=response.length; i++){
            //     if(password === response[i].password && email === response[i].email){
            //         alert('welcome')
            //     }
            // }
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
                    value={email}
                    placeholder="enter a username"
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
                    disabled={!email || !password}>Login</button>
            </form>
        </div>
    );
};

export default App;