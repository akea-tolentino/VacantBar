import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../store/session";
import './LoginForm.css'

function LoginForm() {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        const user = {
            email: email,
            password: password
        }
        return dispatch(login(user))
            .catch(async (response) => {
                let data;
                try {
                    data = await response.clone().json();
                } catch {
                    data = await response.text();
                }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([response.statusText]);
            });
    };

    const handleDemoSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        const user = {
            email: "demo@user.io",
            password: "password"
        }
        return dispatch(login(user))
            .catch(async (response) => {
                let data;
                try {
                    data = await response.clone().json();
                } catch {
                    data = await response.text();
                }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([response.statusText]);
            });
    };


    return (
        <div>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="login-message">
                    <h1>Enter your email</h1>
                    <div>
                        Enter the email and password associated <br />
                        with your VacantBar account to sign in.
                    </div>
                </div>
                <label>
                    <input
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    />
                </label>
                <br/>
                <label>
                    <input
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    />
                </label>
                <br />
                <ul>
                    { errors.map(error =>
                        <li key={error}>
                            {error}
                        </li>
                    )}
                </ul>
                <button>Sign in</button>
                <button onClick={handleDemoSubmit}>Demo User</button>
            </form>
        </div>

    )
}

export default LoginForm