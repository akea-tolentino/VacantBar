import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/session";
import { Redirect } from "react-router-dom/cjs/react-router-dom";

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
        <form onSubmit={handleSubmit}>
            <ul>
                { errors.map(error =>
                    <li key={error}>
                        {error}
                    </li>
                )}
            </ul>
            <label>Email:
                <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
            </label>
            <br/>
            <label>Password:
                <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                />
            </label>
            <br />
            <button>Login</button>
        </form>
    )
}

export default LoginFormPage