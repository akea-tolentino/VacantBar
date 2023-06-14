import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/session";
import { Redirect } from "react-router-dom/cjs/react-router-dom";
import './LoginForm.css'

const LoginFormPage = () => {

    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

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
    }

    return (
        <form onSubmit={handleSubmit} className="login-form">
            <ul>
                { errors.map(error =>
                    <li key={error}>
                        {error}
                    </li>
                )}
            </ul>
            <label>
                <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
                />
            </label>
            <br/>
            <label>
                <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Password"
                />
            </label>
            <br />
            <button>Login</button>
        </form>
    )
}

export default LoginFormPage